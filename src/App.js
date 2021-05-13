import Weather from "./Weather.js";
import './App.css';

export default function App() {
  return (
    <div className="App">

      <header>
        <h1>Weather App</h1>
      </header>

      <div className="Main">
        <Weather defaultCity="London" />
      </div>

      <button className="Location">
        📍
      </button>

      <footer>
        <p>
          This project was coded by {" "}
          <a
            href="https://www.linkedin.com/in/laura-emilia-barojas/"
            target="_blank"
            rel="noreferrer"
          >
            Laura Barojas
              </a> and it is {" "}
          <a
            href="https://github.com/LauraEmilia33/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub.
              </a>
        </p>
      </footer>

    </div >
  );
}


