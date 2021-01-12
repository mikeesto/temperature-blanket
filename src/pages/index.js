import React from "react";
import { Helmet } from "react-helmet";
import "../styles.css";
import Blanket from "../images/blanket_outline.svg";
import temperatures from "../../data/temperatures.json";

function classNameGenerator(temp) {
  if (temp > 35) {
    return "red";
  } else if (temp > 32) {
    return "orange";
  } else if (temp > 30) {
    return "yellow";
  } else if (temp > 27) {
    return "green";
  } else if (temp > 24) {
    return "darkgreen";
  } else if (temp > 20) {
    return "blue";
  } else if (temp < 20) {
    return "darkblue";
  }
}

const randomObject = {};
for (let i = 0; i < 365; i++) {
  randomObject[i] = Math.random() * 36 + 15;
}

export default function Home() {
  return (
    <div className="wrapper">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Temperature Blanket</title>
      </Helmet>
      <div className="container">
        <img className="blanket" src={Blanket} alt="blanket" />
        {Object.values(randomObject).map((temperature, index) => (
          <div
            key={index}
            className={`temperature ${classNameGenerator(temperature)}`}
          />
        ))}
      </div>
    </div>
  );
}
