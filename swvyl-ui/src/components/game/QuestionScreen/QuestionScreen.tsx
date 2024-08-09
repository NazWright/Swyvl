import React, { useState } from "react";
import "./style.css";
import { Question } from "../../../model/Question";
import { Level } from "../../../model/Level";
import AnswerChoice from "./AnswerChoice";
import Timer from "./Timer";

interface GameQuestionScreenProps {
  time: number;
  question: Question;
  questionIndex: number;
  level: Level;
  nextQuestionHandler: (questionIsCorrect: boolean) => void;
}

export const QuestionScreen = ({
  time,
  question,
  questionIndex,
  level,
  nextQuestionHandler,
}: GameQuestionScreenProps): JSX.Element => {
  const [isAnyAnswerChoiceSelected, setIsAnyAnswerChoiceSelected] =
    useState(false);
  const [questionIsComplete, setQuestionIsComplete] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState("");

  function isLastQuestion() {
    if (!level.questions || level.questions.length < 1) {
      throw new Error("There were no questions provided for the given level.");
    }
    return questionIndex === level.questions.length - 1;
  }

  function selectAnswerChoice(choice: string) {
    setIsAnyAnswerChoiceSelected(true);
    setSelectedAnswer(choice);
  }

  function triggerNextQuestion() {
    setQuestionIsComplete(true);
    setTimeout(() => {
      setQuestionIsComplete(false);
      setIsAnyAnswerChoiceSelected(false);
      nextQuestionHandler(selectedAnswer === question.correctAnswer);
    }, time);
  }

  return (
    <div className="game-screen">
      <div className="question-settings mb-3">
        <div>
          <Timer
            seconds={20}
            resetTrigger={questionIsComplete}
            timeUpHandler={() => {
              selectAnswerChoice(question.correctAnswer);
              triggerNextQuestion();
            }}
          />
          <div className="question-progress">
            Question {questionIndex + 1} of{" "}
            {level.questions && level.questions.length}
          </div>
        </div>
      </div>
      <div className="custom-size-2">
        {/* level name heading */}
        <div className="mb-3">
          <div className="overlap-13">
            <div className="text-wrapper-16">{level.levelName}</div>
          </div>
        </div>
        <div className="mb-3">
          <div className="question">
            <p className="question-heading mb-5">
              {question.text}
              <br />
            </p>

            {/* answer choices */}
            <div className="mb-4">
              {question.choices.length > 1 &&
                question.choices.map((choice, index) => {
                  return (
                    <AnswerChoice
                      key={index}
                      questionIsComplete={questionIsComplete}
                      choice={choice}
                      correct={question.checkAnswer(choice)}
                      selected={
                        (isAnyAnswerChoiceSelected &&
                          selectedAnswer === choice) ||
                        (questionIsComplete && !isAnyAnswerChoiceSelected)
                      }
                      // TODO: Once an answer choice is selected, ALL choices need to be disabled
                      onClick={() => selectAnswerChoice(choice)}
                    />
                  );
                })}
            </div>

            <div className="d-flex w-100 justify-content-center">
              <button
                disabled={!isAnyAnswerChoiceSelected}
                className={`button ${
                  isAnyAnswerChoiceSelected ? "enabled" : ""
                } d-flex justify-content-center align-items-center`}
                onClick={() => triggerNextQuestion()}
              >
                <div> {isLastQuestion() ? "End" : "Next"}</div>
              </button>
            </div>
          </div>
        </div>
        <div className="question-progress">
          Correct: {level.correctCount}/
          {level.questions && level.questions.length}
        </div>
      </div>
    </div>
  );
};
