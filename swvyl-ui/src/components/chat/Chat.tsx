import React, { useEffect, useState } from "react";
import "./Chat.css";
import { Link } from "react-router-dom";
import Footer from "../shared/Footer";
import avatar from "../../static/img/img-ad4293a71892-1.png";
import { CircularProgress } from "@mui/material";
import { constants } from "../../constants/applicationConstants";
import wificonnection from "../../static/img/wifi-3.png";
import cellularconnection from "../../static/img/cellular-connection-10.png";

export default function Chat() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  });

  return (
    <>
      {!isLoading && (
        <div className="iphone-pro">
          <div className="div">
            <div className="status-bar">
              <img
                className="cellular-connection"
                alt="Cellular connection"
                src={cellularconnection}
              />
              <img className="wifi" alt="Wifi" src={wificonnection} />
              <div className="time">9:30</div>
              <div className="battary">
                <img className="cap" alt="Cap" src="/img/cap-3.png" />
                <div className="overlap-group">
                  <div className="rectangle-2" />
                </div>
              </div>
            </div>
            <div className="overlap-2">
              <div className="rectangle-3" />
              <img className="IMG" alt="Img" src={avatar} />
              <div className="rectangle-4" />
              <input
                className="enter-your-message uwallet-input chat-input"
                placeholder=" Enter your message here or click prompt above"
              />
              <div className="rectangle-5" />
              <div className="title">
                <div className="group">
                  <div className="text-wrapper">Submit</div>
                </div>
              </div>
              <div className="rectangle-6" />
              <p className="type-or-choose-an">
                <span className="span">Type or Choose an Option</span>
                <span className="text-wrapper-2">
                  <br />
                  <br />
                  “What is my account balance?”
                  <br />
                  <br />
                </span>
              </p>
              <Link to="/iphone-14-13-pro-13-12-pro-12-7">
                <p className="how-long-will-it">
                  “How long will it take to pay off <br />
                  my credit card if I only make
                  <br />
                  the minimum payment?”
                </p>
              </Link>
            </div>
            <Footer />
          </div>
        </div>
      )}

      {isLoading && (
        <div className={constants.flexFullWidthHeightCenteredClassName}>
          <CircularProgress />
        </div>
      )}
    </>
  );
}
