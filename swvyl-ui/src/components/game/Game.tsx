import React, { useEffect, useState } from "react";
import "./Game.css";
import { Question, QuestionImpl } from "../../model/Question";
import { Game } from "../../model/Game";
import { fetchUserAttributes } from "aws-amplify/auth";
import { User } from "../../model/User";
import { Level } from "../../model/Level";
import { CircularProgress } from "@mui/material";
import { infoLogFormatter } from "../../utils/logFormatter";
import { FieldValues, useForm } from "react-hook-form";

export default function GameUI() {
  const [game, setGameDetails] = useState(new Game(undefined, 1, []));
  const [levels, setLevels] = useState([new Level(0, undefined, false, 0, 0)]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    async function initializeGame() {
      const userAttributes = (await fetchUserAttributes()) as User;
      // TODO: replace hardcoded number with the current level on the user object
      const gameDetails = new Game(userAttributes, game.current_level, levels);
      setGameDetails(gameDetails);
      setLevels(baselevels);
    }

    initializeGame();
  }, [game.current_level, levels]);

  const currentLevel = levels[game.current_level - 1];
  const { questions } = currentLevel;

  function renderGameQuestions() {
    return questions && !isLoading ? <GameContent /> : <CircularProgress />;
  }

  function handleAnswer(isCorrect: boolean) {
    if (isCorrect) {
      incrementCorrectCount();
    }
    processQuestionCompletion();
  }

  function processQuestionCompletion() {
    // update the UI to show that the answer was correct of not
    const newQuestionIndex = questionIndex;
    const isComplete = currentLevel.checkCompletion(newQuestionIndex);

    if (isComplete) {
      handleLevelCompletion();
    } else {
      setQuestionIndex(questionIndex + 1);
    }
  }

  function handleLevelCompletion() {
    const isLevelPassed = currentLevel.isLevelPassed();

    if (isLevelPassed) {
      infoLogFormatter(
        "User has successfully passed level " + currentLevel.levelNumber
      );

      if (!game.isComplete()) {
        console.info("Moving on to the next level...");
        setGameDetails(
          new Game(game.user, game.current_level + 1, game.levels)
        );
      } else {
        console.info("game is complete");
        setDisabled(true);
      }
    } else {
      infoLogFormatter("User has failed level");
      setDisabled(true);
      // TODO: can show a modal to allow the user to quit or restart the level.
    }
  }

  function incrementCorrectCount() {
    currentLevel.correctCount = currentLevel.correctCount + 1;
    // TODO: update user points total
  }

  function selectAnswer(
    fieldValues: FieldValues | undefined,
    question: Question
  ) {
    if (!fieldValues?.smartGoalsFormInput) return;
    setIsLoading(true);
    setDisabled(true);

    const selectedAnswer = fieldValues.smartGoalsFormInput as string;
    const isCorrect = question.checkAnswer(selectedAnswer);

    handleAnswer(isCorrect);
    reset();
    setIsLoading(false);
    setDisabled(false);
  }

  const GameContent = () => {
    return (
      <div
        className="container w-100 h-100 d-flex flex-column
  align-items-center"
      >
        <div>Level: {game.current_level}</div>

        <div>{questions && questions[questionIndex].text}</div>

        <form onSubmit={handleSubmit((event) => selectAnswer(event, question))}>
          {questions &&
            questions[questionIndex].choices.map((choice, index: number) => {
              return (
                <div key={index}>
                  <input
                    disabled={disabled}
                    type="radio"
                    key={index}
                    value={choice}
                    {...register("smartGoalsFormInput")}
                  />
                  <label htmlFor={choice}>{choice}</label>
                </div>
              );
            })}
          <button disabled={disabled}>Next</button>
        </form>

        {!questions && <CircularProgress />}
      </div>
    );
  };

  return renderGameQuestions();
}

const question = new QuestionImpl(
  "1",
  "What Does the S in smart goals stand for?",
  "Smart",
  ["Smart", "Measurable", "Attainable", "Goals"]
);

const question2 = new QuestionImpl(
  "2",
  "What Does the M in smart goals stand for?",
  "Smart",
  ["Smart", "Johnny", "Attainable", "Goals"]
);

const questionsList = [question, question2];

const baselevels = [
  new Level(1, questionsList, false, 1, 0),
  new Level(2, questionsList, false, 1, 0),
];
