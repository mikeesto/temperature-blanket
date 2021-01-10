#!/usr/bin/env node
require("dotenv").config();
const fs = require("fs");
const path = require("path");
const fetch = require("node-fetch");

// Read existing data
const pathToData = path.join(__dirname, "/data/temperatures.json");

const temperatures = JSON.parse(fs.readFileSync(pathToData));

// Get today's max temperature
const getData = async () => {
  // Lat & lon of Brisbane, AU
  const lat = -27.4698;
  const lon = 153.0251;

  await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&units=metric&appid=${process.env.API_KEY}`
  )
    .then((res) => res.json())
    .then(({ daily }) => {
      const today = new Date();
      const date = today.getDate();
      const month = today.getMonth() + 1; // getMonth starts from 0...
      temperatures[`${date}/${month}`] = daily[0].temp.max; // Get forecasted max temp for current day
    });
};

getData().then(() =>
  // Write temperatures to file
  fs.writeFileSync(
    path.resolve(pathToData),
    JSON.stringify(temperatures, null, 2)
  )
);
