import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by{" "}
          <a href="https://focused-borg-61dda1.netlify.app/" target="_blank">
            Claire Fleischer
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/ladyhobbit13/react-weather"
            target="_blank"
          >
            open-sourced on GitHub.
          </a>
        </footer>
      </div>
    </div>
  );
}
