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
import { errorLogFormatter, infoLogFormatter } from "./utils/logFormatter";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./app/features/authSlice";
import { RootState } from "./app/store";
import Dashboard from "./components/dashboard/Dashboard";
import AuthenticationSelector from "./components/authentication/AuthenticationSelector";

Amplify.configure(config);

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.authSlice);

  console.log(user);

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

    async function checkUserAuthentication() {
      try {
        const amazonCognitoUserMetaResponse =
          (await getCurrentUser()) as AuthUser;
        const { userId } = amazonCognitoUserMetaResponse;
        let userAttributes;
        if (userId) {
          userAttributes = await fetchUserAttributes();
          const user = { ...userAttributes, userId } as User;
          dispatch(setUser(user));
          infoLogFormatter("User has been successfully authenticated...");
        }
      } catch (error) {
        console.error("User is not authenticated...Please sign in");
        console.error(error);
        // User has failed authentication.
      }
    }

    checkUserAuthentication();
  }, [dispatch]);

  function renderBasedOnAuth() {
    if (user.userId && user.email) {
      return <Dashboard accessToken="" />;
    }

    return <AuthenticationSelector />;
  }

  return <div className="App">{renderBasedOnAuth()}</div>;
}

export default App;
