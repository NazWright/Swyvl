import React from "react";
import "./steps.css";
import capImage from "../../../static/img/cap-10.png";
import wifiImage from "../../../static/img/wifi-3.png";
import cellularConnection from "../../../static/img/cellular-connection-10.png";
import union1 from "../../../static/img/union-1.png";
import path13 from "../../../static/img/path-13-1.png";
import ut32 from "../../../static/img/untitled-design-32.png";
import { OnboardingStepsProps } from "./steps/OnboardingStepsProps";

export default function OnboardingStepsIntro({
  handleCompletedStep,
}: OnboardingStepsProps) {
  return (
    <div className="screen-3">
      <div className="LOG-IN-4">
        <div className="overlap-12">
          <img className="path-13" alt="Path" src={union1} />
          <img className="union" alt="Union" src={path13} />
          <div className="ellipse-2" />
          <div className="ellipse-3" />
          <div className="ellipse-4" />
          <div className="text-wrapper-27">How it works</div>
          <p className="add-your-card-so-we">
            Add your card so we can track your
            <br />
            Spending habits
          </p>
          <p className="learn-through-mini">
            Learn through mini modules, complete
            <br />
            quizzes for points, and exchange points
            <br />
            For rewards
          </p>
          <div className="text-wrapper-28">Meet your personal advisor</div>
          <img className="untitled-design-2" alt="Untitled design" src={ut32} />
          <div className="group-16 onboarding" onClick={handleCompletedStep}>
            <div className="text-wrapper-29">Continue</div>
          </div>
        </div>
        <div className="status-bar-4">
          <img
            className="cellular-connection-3"
            alt="Cellular connection"
            src={cellularConnection}
          />
          <img className="wifi-4" alt="Wifi" src={wifiImage} />
          <div className="time-4">9:30</div>
          <div className="battary-4">
            <img className="cap-4" alt="Cap" src={capImage} />
            <div className="overlap-group-4">
              <div className="rectangle-9" />
            </div>
          </div>
        </div>
        <div className="overlap-13">
          <div className="rectangle-10" />
        </div>
        <div className="text-wrapper-30">3 STEPS LEFT</div>
        <div className="group-17">
          <div className="text-wrapper-31">Please complete the</div>
          <div className="ellipse-5" />
          <p className="text-wrapper-32">Task to be all set up!</p>
        </div>
      </div>
    </div>
  );
}
