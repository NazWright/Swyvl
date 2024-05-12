import React from "react";
import "./steps.css";
import capImage from "../../../static/img/cap-10.png";
import wifiImage from "../../../static/img/wifi-3.png";
import cellularConnection from "../../../static/img/cellular-connection-10.png";
import ut33 from "../../../static/img/untitled-design-33.png";
import { OnboardingStepsProps } from "./OnboardingStepsProps";

export default function OnboardingComplete({
  handleCompletedStep,
}: OnboardingStepsProps) {
  return (
    <div className="LOG-IN">
      <div className="div">
        <div className="status-bar">
          <img
            className="cellular-connection"
            alt="Cellular connection"
            src={cellularConnection}
          />
          <img className="wifi" alt="Wifi" src={wifiImage} />
          <div className="time">9:30</div>
          <div className="battary">
            <img className="cap" alt="Cap" src={capImage} />
            <div className="overlap-group">
              <div className="rectangle" />
            </div>
          </div>
        </div>
        <div className="overlap">
          <div className="rectangle-2" />
        </div>
        <div className="text-wrapper">1 STEPS LEFT</div>
        <div className="overlap-2">
          <p className="hi-welcome-to">
            Hi welcome to University Wallet!
            <br />I am your personal advisor. My friends <br />
            call me P.A. I’m here to guide you through
            <br />
            your financial Journey. If you have <br />
            any questions just click the message tab
            <br />
            whenever you need me!
          </p>
          <div className="group">
            <div className="overlap-3">
              <div className="ellipse" />
              <img
                className="untitled-design"
                alt="Untitled design"
                src={ut33}
              />
              <div className="rectangle-3" />
            </div>
          </div>
          <div className="text-wrapper-2">P.A</div>
        </div>
        <div className="group-2 onboarding">
          <div className="text-wrapper-3" onClick={handleCompletedStep}>
            Home
          </div>
        </div>
      </div>
    </div>
  );
}
