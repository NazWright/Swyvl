import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./steps.css";
import capImage from "../../../static/img/cap-10.png";
import wifiImage from "../../../static/img/wifi-3.png";
import cellularConnection from "../../../static/img/cellular-connection-10.png";
import { useDispatch } from "react-redux";
import { OnboardingStepsProps } from "../OnboardingStepsProps";

export default function ChooseGoalsStep({
  handleCompletedStep,
}: OnboardingStepsProps) {
  const [selectedGoals, setSelectedGoals] = useState([""]);
  const dispatch = useDispatch();

  function selectOrRemoveGoal(event: React.MouseEvent, goal: string) {
    if (selectedGoals.includes(goal)) {
      const newSelectedGoals = selectedGoals.filter(
        (selectedGoal) => goal !== selectedGoal
      );
      console.info("User removed goal: " + goal);
      setSelectedGoals(newSelectedGoals);
      return;
    }

    console.info("User selected new goal: " + goal);
    setSelectedGoals([...selectedGoals, goal]);
  }

  function submitUserGoals(event: React.MouseEvent) {
    if (selectedGoals.length !== 3) {
      alert("Please select three goals.");
      return;
    }
    console.info("Storing user goals into redux store...");
    // TODO: store user goal data to database here
    // dispatch(setUserGoals(selectedGoals));
    console.info(
      "Successfully stored user goals, redirecting to welcome step..."
    );

    handleCompletedStep();
  }

  return (
    <div className="LOG-IN-screen">
      <div className="LOG-IN-2">
        <div className="status-bar-2">
          <img
            className="img"
            alt="Cellular connection"
            src={cellularConnection}
          />
          <img className="wifi-2" alt="Wifi" src={wifiImage} />
          <div className="time-2">9:30</div>
          <div className="battary-2">
            <img className="cap-2" alt="Cap" src={capImage} />
            <div className="rectangle-wrapper">
              <div className="rectangle-4" />
            </div>
          </div>
        </div>
        <div className="overlap-4">
          <div className="rectangle-5" />
        </div>
        <div className="text-wrapper-4">2 STEPS LEFT</div>
        <p className="p">CHOOSE YOUR GOALS (Pick 3)</p>
        <p className="LEARNING-EARNS">
          LEARNING EARNS POINTS, WHICH CAN <br />
          BE REDEEMED FOR REWARDS.
        </p>
        <div
          className={`overlap-wrapper goal ${
            selectedGoals.includes("savings") ? "selected" : ""
          }`}
          onClick={(event) => selectOrRemoveGoal(event, "savings")}
        >
          <div className="SAVINGS-INVEST-wrapper">
            <div className="SAVINGS-INVEST">SAVINGS &amp; INVEST</div>
          </div>
        </div>
        <div
          className={`group-3 goal ${
            selectedGoals.includes("budgeting") ? "selected" : ""
          }`}
          onClick={(event) => selectOrRemoveGoal(event, "budgeting")}
        >
          <div className="text-wrapper-5">BUDGETING</div>
        </div>
        <div
          className={`group-4 goal ${
            selectedGoals.includes("debt") ? "selected" : ""
          }`}
          onClick={(event) => selectOrRemoveGoal(event, "debt")}
        >
          <div className="text-wrapper-6">DEBT PAYOFF</div>
        </div>
        <div
          className={`group-5 goal ${
            selectedGoals.includes("earn") ? "selected" : ""
          }`}
          onClick={(event) => selectOrRemoveGoal(event, "earn")}
        >
          <div className="text-wrapper-7">EARN</div>
        </div>
        <div
          className={`group-6 goal ${
            selectedGoals.includes("spend") ? "selected" : ""
          }`}
          onClick={(event) => selectOrRemoveGoal(event, "spend")}
        >
          <div className="text-wrapper-8">SPEND</div>
        </div>
        <div
          className={`group-7 goal ${
            selectedGoals.includes("college") ? "selected" : ""
          }`}
          onClick={(event) => selectOrRemoveGoal(event, "college")}
        >
          <div className="text-wrapper-9">COLLEGE</div>
        </div>
        <div
          className={`group-8 goal ${
            selectedGoals.includes("protect") ? "selected" : ""
          }`}
          onClick={(event) => selectOrRemoveGoal(event, "protect")}
        >
          <div className="text-wrapper-10">PROTECT</div>
        </div>
        <div
          className={`group-9 goal ${
            selectedGoals.includes("borrow") ? "selected" : ""
          }`}
          onClick={(event) => selectOrRemoveGoal(event, "borrow")}
        >
          <div className="text-wrapper-11">BORROW</div>
        </div>
        <div className="group-11" onClick={submitUserGoals}>
          <div className="text-wrapper-13" style={{ color: "white" }}>
            Continue
          </div>
        </div>
      </div>
    </div>
  );
}
