import React, { useEffect } from "react";
import logo from "./logo.svg";
import {
  getCurrentUser,
  AuthUser,
  fetchUserAttributes,
} from "aws-amplify/auth";
import { Amplify } from "aws-amplify";
import AuthAPI from "aws-amplify/api";
import { Hub } from "aws-amplify/utils";
import { constants } from "./constants/applicationConstants";
import "./App.css";
import { User } from "./model/User";
import config from "./aws-exports";
import { infoLogFormatter } from "./utils/logFormatter";

Amplify.configure(config);

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

    checkUserAuthentication();
  }, []);

  async function checkUserAuthentication() {
    try {
      const amazonCognitoUserMetaResponse =
        (await getCurrentUser()) as AuthUser;
      const { userId } = amazonCognitoUserMetaResponse;
      let userAttributes;
      if (userId) {
        userAttributes = (await fetchUserAttributes()) as User;
        infoLogFormatter("User has been successfully authenticated...");
      }
    } catch (error) {
      console.error(error);
    }
  }

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
