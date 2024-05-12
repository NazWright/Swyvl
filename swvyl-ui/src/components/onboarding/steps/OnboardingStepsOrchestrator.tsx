import "./steps.css";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import OnboardingComplete from "./OnboardingComplete";
import ChooseGoals from "./goals/ChooseGoals";
import AddCard from "./addCard/AddCard";
import TasksOverview from "./TasksOverview";
import { User } from "../../../model/User";

export default function OnboardingStepsOrchestrator() {
  const user = useSelector((state) => state as User);
  const navigate = useNavigate();
  const [pageIndex, setPageIndex] = useState(0);

  function markPageStatusAsComplete() {
    setPageIndex(pageIndex + 1);

    redirectIfOnboardingIsComplete(pageIndex);
  }

  function redirectIfOnboardingIsComplete(pageIndex: number) {
    if (pageIndex === 3) {
      if (user.sub) {
        navigate("/dashboard");
      } else {
        navigate("/");
      }
    }
  }

  function getCurrentPageElement(pageIndex: number) {
    switch (pageIndex) {
      case 0:
        return <TasksOverview handleCompletedStep={markPageStatusAsComplete} />;
      case 1:
        return <AddCard handleCompletedStep={markPageStatusAsComplete} />;
      case 2:
        return <ChooseGoals handleCompletedStep={markPageStatusAsComplete} />;
      case 3:
        return (
          <OnboardingComplete handleCompletedStep={markPageStatusAsComplete} />
        );

      default:
        navigate("/");
    }
  }

  return getCurrentPageElement(pageIndex);
}
