import React, { useEffect, useState } from "react";
import "./Game.css";
import { Question, QuestionImpl } from "../../model/Question";
import { Game } from "../../model/Game";
import { fetchUserAttributes } from "aws-amplify/auth";
import { User } from "../../model/User";
import { Level } from "../../model/Level";
import { CircularProgress } from "@mui/material";

export default function GameUI() {
  const [user, setUser] = useState({});
  const [game, setGameDetails] = useState(new Game(undefined, 1, []));
  const [levels, setLevels] = useState([new Level(0, undefined, false, 0, 0)]);

  useEffect(() => {
    async function initializeGame() {
      const userAttributes = (await fetchUserAttributes()) as User;
      const levels = [new Level(1, questionsList, false, 1, 0)];
      // TODO: replace hardcoded number with the current level on the user object
      const gameDetails = new Game(userAttributes, 1, levels);
      console.log(gameDetails);
      setGameDetails(gameDetails);
      setLevels(levels);
      setUser(userAttributes);
    }

    initializeGame();
  }, []);

  const currentLevel = levels[game.current_level - 1];
  const { questions } = currentLevel;

  function renderGameQuestions() {
    return questions ? <GameContent /> : <CircularProgress />;
  }

  function selectAnswer(event: React.MouseEvent, question: Question) {
    const isCorrect = question.checkAnswer(
      event.currentTarget.innerHTML as string
    );
    if (isCorrect) {
      currentLevel.correctCount = currentLevel.correctCount + 1;
      // TODO: update user points total
    }
    // update the UI to show that the answer was correct of not
  }

  const GameContent = () => {
    return (
      <div
        className="container w-100 h-100 d-flex flex-column
  align-items-center"
      >
        <div>Level: {game.current_level}</div>

        <div>{questions && questions[0].text}</div>

        <div>
          {questions &&
            questions[0].choices.map((choice, index: number) => {
              return (
                <div
                  onClick={(event: React.MouseEvent) =>
                    selectAnswer(event, questions[0])
                  }
                  key={index}
                >
                  {choice}
                </div>
              );
            })}
        </div>

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

const questionsList = [question];
