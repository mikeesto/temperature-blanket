import React from "react";
import { Helmet } from "react-helmet";
import "fontsource-inconsolata";
import "../styles.css";
import Blanket from "../images/blanket_outline.svg";
import temperatures from "../../data/temperatures.json";
import favicon from "../static/favicon.ico";

function classNameGenerator(temp) {
  if (temp > 35) {
    return "red";
  } else if (temp > 32) {
    return "orange";
  } else if (temp > 30) {
    return "yellow";
  } else if (temp > 27) {
    return "darkgreen";
  } else if (temp > 24) {
    return "green";
  } else if (temp > 20) {
    return "darkblue";
  } else if (temp < 20) {
    return "blue";
  }
}

const randomObject = {};
for (let i = 0; i < 365; i++) {
  randomObject[i] = Math.random() * 36 + 15;
}

export default function Home() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Temperature Blanket</title>
        <link rel="icon" href={favicon} />
      </Helmet>
      <h1>Temperature Blanket</h1>
      <div className="colours">
        <div>
          <span className="circle red" />
          <span className="key">&gt; 35</span>
        </div>
        <div>
          <span className="circle orange" />
          <span className="key">35 - 33</span>
        </div>
        <div>
          <span className="circle yellow" />
          <span className="key">32 - 31</span>
        </div>
        <div>
          <span className="circle darkgreen" />
          <span className="key">30 - 28</span>
        </div>
        <div>
          <span className="circle green" />
          <span className="key">27 - 24</span>
        </div>
        <div>
          <span className="circle darkblue" />
          <span className="key">23 - 21</span>
        </div>
        <div>
          <span className="circle blue" />
          <span className="key">&lt; 20</span>
        </div>
      </div>
      <p>Celsius... not fahrenheit!</p>
      <div className="wrapper">
        <div className="container">
          <img className="blanket" src={Blanket} alt="blanket" />
          {Object.values(randomObject).map((temperature, index) => (
            <div
              key={index}
              className={`temperature ${classNameGenerator(temperature)}`}
            />
          ))}
        </div>
        <a
          href="https://github.com/mikeesto/temperature-blanket"
          target="__blank"
        >
          Codes on GitHub
        </a>
      </div>
    </>
  );
}
