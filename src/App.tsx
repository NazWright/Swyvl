import React, { useEffect } from "react";
import logo from "./logo.svg";
import Auth from "aws-amplify/auth";
import AuthAPI from "aws-amplify/api";
import { Hub } from "aws-amplify/utils";
import { constants } from "./constants/applicationConstants";
import "./App.css";

function App() {
  useEffect(() => {
    Hub.listen("auth", (data) => {
      switch (data.payload.event) {
        default:
          break;
        case constants.SIGNED_IN:
          break;
        case constants.SIGNED_OUT:
          break;
      }
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
