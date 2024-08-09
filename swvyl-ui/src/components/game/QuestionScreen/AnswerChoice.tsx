import React from "react";

interface AnswerChoiceProps {
  choice: string;
  correct: boolean;
  questionIsComplete: boolean;
  selected: boolean;
  onClick: () => void;
}

export default function AnswerChoice({
  choice,
  correct,
  questionIsComplete,
  selected,
  onClick,
}: AnswerChoiceProps) {
  let cssClassNameForAnswerChoice = `answer-choice d-flex justify-content-center align-items-center ${
    selected && !questionIsComplete ? " selected" : ""
  }`;

  function getCssClassName() {
    if (selected && questionIsComplete) {
      return correct ? "correct" : "incorrect";
    }
  }

  return (
    <div
      className={cssClassNameForAnswerChoice + " " + getCssClassName()}
      onClick={onClick}
    >
      <p>{choice}</p>
    </div>
  );
}
