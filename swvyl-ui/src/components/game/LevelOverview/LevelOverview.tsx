import React, { useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { infoLogFormatter } from "../../../utils/logFormatter";

interface LevelOverviewProps {}

export const LevelOverview = (): JSX.Element => {
  const [contentIndex, setContentIndex] = useState(0);
  const navigate = useNavigate();

  const incrementIndex = () => {
    if (contentIndex === content.length - 1) {
      infoLogFormatter("Navigating to game questions...");
      navigate("/game");
    } else {
      setContentIndex(contentIndex + 1);
    }
  };

  return (
    <div className="level-overview h-100">
      <div className="hide-overflow-container">
        <div className="h-100 d-flex flex-column align-items-center justify-content-center">
          <div>
            <p className="s-m-a-r-t-GOALS-8 mb-5">
              <span className="text-wrapper-150">S</span>
              <span className="text-wrapper-151">.</span>
              <span className="text-wrapper-150">M</span>
              <span className="text-wrapper-151">.</span>
              <span className="text-wrapper-152">A</span>
              <span className="text-wrapper-151">.R.T GOALS</span>
            </p>
            <p className="one-of-the-biggest mb-5">{content[contentIndex]}</p>
            <div className="w-100 d-flex justify-content-center">
              <button type="submit" className="swyvl-button onboarding">
                <div className="text-wrapper-183" onClick={incrementIndex}>
                  Continue
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const content = [
  <span className="text-wrapper-153">
    We all have financial goals we want to achieve. We get excited about those
    goals at first, already imagining how good it will feel when they’re
    accomplished. It’s exhilarating! But as soon as we hit a few bumps in the
    road, we get discouraged. We may give up, sometimes far too quickly.
  </span>,
  <span className="text-wrapper-153">
    Your goal has to be SPECIFIC, not generic or vague. Be clear on what you
    want to accomplish and ask yourself how this goal will put you in a better
    financial situation. You can’t get what you want if you don’t know what you
    want.
  </span>,
  <span className="text-wrapper-153">
    Make your financial goal MEASURABLE by quantifying it so you can evaluate
    your progress and overall success. Express your goals in clear numbers, so
    you’ll know where you are and when you’ve succeeded.
  </span>,
  <span className="text-wrapper-153">
    One of the biggest obstacles to achieving a goal is setting your
    expectations too high. The surest way to improve your financial situation is
    to take achievable steps. If that means taking smaller steps, that’s ok. You
    can always set a new goal!
  </span>,
  <span className="text-wrapper-153">
    When setting the goal, assess the steps you plan to take to achieve the
    goal. Ask yourself if those steps are REALISTIC given your current
    circumstances. Setting unrealistic goals usually leads to disappointment and
    surrender.
  </span>,
  <span className="text-wrapper-153">
    Give yourself a TIME FRAME to achieve this goal. This will encourage you to
    follow through, stop procrastinating, and keep yourself accountable.
  </span>,
];
