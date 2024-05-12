import { Link } from "react-router-dom";
import React from "react";
import "./steps.css";
import capImage from "../../../static/img/cap-10.png";
import wifiImage from "../../../static/img/wifi-3.png";
import shape40 from "../../../static/img/shape-40.png";
import shape41 from "../../../static/img/shape-41.png";
import shape42 from "../../../static/img/shape-42.png";
import shape43 from "../../../static/img/shape-43.png";
import shape44 from "../../../static/img/shape-44.png";
import path128 from "../../../static/img/path-128.png";
import cellularConnection from "../../../static/img/cellular-connection-10.png";
import { OnboardingStepsProps } from "../OnboardingStepsProps";
import AddCardForm from "./AddCardForm";

export default function AddNewCardStep({
  handleCompletedStep,
}: OnboardingStepsProps) {
  return (
    <div className="div-wrapper">
      <div className="LOG-IN-3">
        <div className="status-bar-3">
          <img
            className="cellular-connection-2"
            alt="Cellular connection"
            src={cellularConnection}
          />
          <img className="wifi-3" alt="Wifi" src={wifiImage} />
          <div className="time-3">9:30</div>
          <div className="battary-3">
            <img className="cap-3" alt="Cap" src={capImage} />
            <div className="overlap-group-2">
              <div className="rectangle-6" />
            </div>
          </div>
        </div>
        <div className="overlap-5">
          <div className="rectangle-7" />
        </div>
        <div className="text-wrapper-14">3 STEPS LEFT</div>
        <div className="overlap-6">
          <div className="scroll-group">
            <div className="group-12">
              <div className="card">
                <div className="overlap-7">
                  <div className="group-wrapper">
                    <div className="waves-wrapper">
                      <div className="waves" />
                    </div>
                  </div>
                  <div className="visa-pay-logo">
                    <div className="overlap-8">
                      <img className="shape" alt="Shape" src={shape40} />
                      <img className="shape-2" alt="Shape" src={shape41} />
                      <img className="shape-3" alt="Shape" src={shape42} />
                    </div>
                    <div className="overlap-group-3">
                      <img className="shape-4" alt="Shape" src={shape43} />
                      <img className="shape-5" alt="Shape" src={shape44} />
                    </div>
                  </div>
                  <div className="text-wrapper-15">CARD HOLDER</div>
                  <div className="stephen-austin">Emery Murrain</div>
                  <div className="text-wrapper-16">VALID THRU</div>
                  <div className="text-wrapper-17">04 / 21</div>
                  <div className="div-2">
                    <img className="path" alt="Path" src={path128} />
                    <img className="path-2" alt="Path" src={path128} />
                    <img className="path-3" alt="Path" src={path128} />
                    <img className="path-4" alt="Path" src={path128} />
                    <img className="path-5" alt="Path" src={path128} />
                    <img className="path-6" alt="Path" src={path128} />
                    <img className="path-7" alt="Path" src={path128} />
                    <img className="path-8" alt="Path" src={path128} />
                    <img className="path-9" alt="Path" src={path128} />
                    <img className="path-10" alt="Path" src={path128} />
                    <img className="path-11" alt="Path" src={path128} />
                    <img className="path-12" alt="Path" src={path128} />
                    <div className="text-wrapper-18">4765</div>
                  </div>
                </div>
              </div>
              <div className="text-wrapper-19">Add New Card</div>
            </div>
          </div>
          <AddCardForm handleCompletedStep={handleCompletedStep} />
        </div>
      </div>
    </div>
  );
}
