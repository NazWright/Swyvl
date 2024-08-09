import React, { useEffect, useState } from "react";
import "./Game.css";
import { Game } from "../../model/Game";
import { fetchUserAttributes } from "aws-amplify/auth";
import { User } from "../../model/User";
import { Level, LevelStatus } from "../../model/Level";
import { CircularProgress } from "@mui/material";
import { infoLogFormatter } from "../../utils/logFormatter";
import { QuestionScreen } from "./QuestionScreen";
import { createGame } from "../../utils/createGameObject";
import { useNavigate } from "react-router-dom";

export default function GameUI() {
  const [game, setGameDetails] = useState(new Game(undefined, 1, []));
  const navigate = useNavigate();

  const [levels, setLevels] = useState([
    new Level(
      0,
      "SMART Goals",
      LevelStatus.NOT_STARTED,
      undefined,
      false,
      0,
      0
    ),
  ]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    async function initializeGame() {
      const userAttributes = (await fetchUserAttributes()) as User;
      const game = createGame(userAttributes);

      setGameDetails(game);
      setLevels(game.levels);
    }
    initializeGame();
  }, []);

  const currentLevel = levels[game.current_level - 1];
  const { questions } = currentLevel;

  function renderGameQuestions() {
    if (!isLoading && questions) {
      console.log(currentLevel.status);
      switch (currentLevel.status) {
        case LevelStatus.OVERVIEW || LevelStatus.NOT_STARTED:
          return (
            <QuestionScreen
              questionIndex={questionIndex}
              time={1200}
              level={currentLevel}
              question={questions[questionIndex]}
              nextQuestionHandler={(questionIsCorrect) =>
                handleAnswer(questionIsCorrect)
              }
            />
          );
        default:
          return <div>done</div>;
      }
    }
    return <CircularProgress />;
  }

  function handleAnswer(isCorrect: boolean) {
    if (isCorrect) {
      incrementCorrectCount();
    }
    processQuestionCompletion();
  }

  function processQuestionCompletion() {
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
      currentLevel.completeLevel();
      infoLogFormatter(
        "User has successfully passed level " + currentLevel.levelNumber
      );

      if (!game.isComplete() && currentLevel.isCompleted) {
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
      alert("You have failed the level, please try again...");
      currentLevel.failLevel();
      navigate("/insights");
      // TODO: can show a modal to allow the user to quit or restart the level.
    }
  }

  function incrementCorrectCount() {
    currentLevel.correctCount = currentLevel.correctCount + 1;
    // TODO: update user points total
  }

  return renderGameQuestions();
}
