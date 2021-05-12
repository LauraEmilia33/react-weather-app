import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <p className="Date">
        Last Updated:
      </p>

      <p className="Humidity">
        Humidity: 82 %
      </p>

      <p className="Wind">
        Wind: 73 km/h
      </p>
    </div>
  )
}