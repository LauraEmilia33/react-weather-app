import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./Weather.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">

      <p className="Date">
        Last Updated: <FormattedDate date={props.data.date} />
      </p>

      <p className="Humidity">
        Humidity: {props.data.humidity} %
        </p>

      <p className="Wind">
        Wind: {Math.round(props.data.wind)} km/h
        </p>

      <h2 className="City">
        {props.data.city}
      </h2>

      <h3 className="Description">
        {props.data.description}
      </h3>

      <WeatherIcon code={props.data.icon} size={65} />
      <WeatherTemperature celsius={props.data.temperature} />

    </div>
  );
}