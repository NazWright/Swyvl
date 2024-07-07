import React, { useState } from "react";
import "./style.css";
import { Question } from "../../../model/Question";

interface GameQuestionScreenProps {
  time: number;
  question: Question;
}

export const QuestionScreen = (): JSX.Element => {
  const [isAnswerChoiceSelected, setIsAnswerChoiceSelected] = useState(false);
  const [questionIsComplete, setQuestionIsComplete] = useState(false);
  let cssClassNameForAnswerChoice =
    "answer-choice d-flex justify-content-center align-items-center";

  function checkAnswer(answerChoice: string, correctAnswer: string) {
    return answerChoice === correctAnswer;
  }

  function getCssClassNameFromAnswerChoice(
    answerChoice: string,
    correctAnswer: string
  ) {
    if (questionIsComplete) {
      if (checkAnswer(answerChoice, correctAnswer)) {
        return " correct";
      }
      return " incorrect";
    }
    return "";
  }

  return (
    <div className="game-screen">
      <div className="question-settings mb-3">
        <div>
          <div>
            <div className="timer">05</div>
          </div>
          <div className="question-progress">Question 1 of 3</div>
        </div>
      </div>
      <div className="custom-size-2">
        {/* level name heading */}
        <div className="mb-3">
          <div className="overlap-13">
            <div className="text-wrapper-16">BUDGETING</div>
          </div>
        </div>
        <div className="mb-3">
          <div className="question">
            <p className="question-heading mb-5">
              What is the first step to creating a budget?
              <br />
            </p>

            {/* answer choices */}
            <div className="mb-4">
              <div className={cssClassNameForAnswerChoice}>
                <p>Start tracking all spending</p>
              </div>
              <div
                className={cssClassNameForAnswerChoice}
                onClick={() => setIsAnswerChoiceSelected(true)}
              >
                <p>Decide how much to save</p>
              </div>
              <div className={cssClassNameForAnswerChoice}>
                <p>Write out income x Expenses</p>
              </div>
              <div className={cssClassNameForAnswerChoice}>
                <div>Call Financial Firm</div>
              </div>
            </div>
            <div className="d-flex w-100 justify-content-center">
              <button
                disabled={!isAnswerChoiceSelected}
                className={`button ${
                  isAnswerChoiceSelected ? "enabled" : ""
                } d-flex justify-content-center align-items-center`}
              >
                <div>Continue</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
