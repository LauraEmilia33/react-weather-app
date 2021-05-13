import React from "react";
import FormattedDate from "./FormattedDate";

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

      <p className="Degrees">
        {Math.round(props.data.temperature)}
      </p>

      <p className="Units">
        ºC
        </p>

      <img
        className="Icon"
        src={props.data.iconUrl}
        alt={props.data.description}
      />

    </div>
  );
}