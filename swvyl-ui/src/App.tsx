import React, { useEffect } from "react";
import {
  getCurrentUser,
  AuthUser,
  fetchUserAttributes,
} from "aws-amplify/auth";
import { Amplify } from "aws-amplify";
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

  useEffect(() => {
    async function authenticateUser() {
      infoLogFormatter("Checking to see if there is an authenticated user...");
      try {
        const amazonCognitoUserMetaResponse =
          (await getCurrentUser()) as AuthUser;
        const { userId } = amazonCognitoUserMetaResponse;
        if (userId) {
          infoLogFormatter("User is already authenticated.");
          const userAttributes = await fetchUserAttributes();
          const user = { ...userAttributes } as User;
          dispatch(setUser(user));
        } else {
          throw new Error(
            "Something went wrong with fetching user credentials from Cognito"
          );
        }
      } catch (error) {
        console.error("No authenticated user found...Please sign in");
        console.error(error);
      }
    }

    authenticateUser();
  }, [dispatch, user.email, user.email_verified]);

  function render() {
    if (user.sub && user.email) {
      return <Dashboard />;
    }

    return <AuthenticationSelector />;
  }

  return <div className="App">{render()}</div>;
}

export default App;
