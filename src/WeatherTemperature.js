import React, { useState } from "react";
import "./Weather.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9 / 5) + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">

        <p className="Degrees">
          {Math.round(props.celsius)}
        </p>

        <p className="Units">
          ºC
      </p>

        <button
          className="Fahrenheit"
          onClick={showFahrenheit}>
          ºF
        </button>

        <button className="Celsius">
          ºC
        </button>

      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">

        <p className="Degrees">
          {Math.round(fahrenheit())}
        </p>

        <p className="Units">
          ºF
        </p>

        <button className="Fahrenheit">
          ºF
        </button>

        <button
          className="Celsius"
          onClick={showCelsius}>
          ºC
        </button>

      </div>
    );
  }
}