import React, { useState } from "react";
import uWalletLoginImage from "../../static/img/untitled-design-36-3.png";
import { CircularProgress } from "@mui/material";
import { constants } from "../../constants/applicationConstants";
import SignIn from "./signIn/SignIn";
import SignUp from "./signUp/SignUp";
import "./authentication.css";
import Verification from "./Verification";

export default function AuthenticationSelector() {
  const [logInToggled, setLogInToggled] = useState(true);
  const [isVerification, setIsVerification] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [verificationEmail, setVerificationEmail] = useState("");

  function handleVerification(email: string) {
    setVerificationEmail(email);
    setIsVerification(true);
  }

  return (
    <>
      {!isLoading && !isVerification && (
        <div className="login">
          <div className="swyvl-auth-screen">
            <div className="login-container d-flex flex-column align-items-center">
              <img
                className="logo-image"
                alt="Untitled design"
                src={uWalletLoginImage}
              />
              <div
                className={`authentication-form ${
                  logInToggled ? "sign-in" : "sign-up"
                } ${isVerification ? "verification" : ""}`}
              >
                {/*TODO: Work on button toggling functionality */}
                <div>
                  <div className={`overlap-89 ${logInToggled ? "active" : ""}`}>
                    <div
                      className={`overlap-90 ${logInToggled ? "" : "active"}`}
                    >
                      <div
                        className={`text-wrapper-179`}
                        onClick={(event) => setLogInToggled(false)}
                      >
                        Sign Up
                      </div>
                    </div>
                    <div
                      className="text-wrapper-180"
                      onClick={(event) => setLogInToggled(true)}
                    >
                      Log In
                    </div>
                  </div>
                </div>
                {logInToggled && (
                  <SignIn
                    setLoading={(isLoading: boolean) => setIsLoading(isLoading)}
                  />
                )}

                {!logInToggled && (
                  <SignUp
                    setLoading={(isLoading: boolean) => setIsLoading(isLoading)}
                    verificationHandler={(email) => handleVerification(email)}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      {isLoading && (
        <div
          className={
            isLoading && constants.flexFullWidthHeightCenteredClassName
          }
        >
          <CircularProgress />
        </div>
      )}

      {isVerification && <Verification email={verificationEmail} />}
    </>
  );
}
