import { Game } from "../model/Game";
import { GameQuestionJSONData } from "../model/GameQuestionJSONData";
import { Level, LevelStatus } from "../model/Level";
import { QuestionImpl } from "../model/Question";
import { mapJsonFileToGameQuestions } from "./gameQuestionMapper";
import { default as smartGoalsJson } from "../data/game/smartGoals.json";
import { User } from "../model/User";

const levelInfo = [
  {
    questions: smartGoalsJson,
    name: "S.M.A.R.T. Goals",
  },
];

function getLevels(gameQuestionsJSONDataArray: GameQuestionJSONData[]) {
  const levels = gameQuestionsJSONDataArray.map(
    (gameQuestionsJSONData, index: number) => {
      const questions = mapJsonFileToGameQuestions(
        gameQuestionsJSONData
      ) as QuestionImpl[];
      const level = new Level(
        index,
        levelInfo[index].name,
        LevelStatus.NOT_STARTED,
        questions,
        false,
        getNumberOfCorrectAnswersToPass(questions.length)
      );
      level.setLevelStatus(LevelStatus.OVERVIEW);
      return level;
    }
  );

  return levels;
}

function getNumberOfCorrectAnswersToPass(numberOfQuestions: number) {
  return Math.ceil(numberOfQuestions * 0.8);
}

/*
 * Creates the game object base on each level
 */
export function createGame(user: User) {
  const questionsPerLevel = levelInfo.map((infoPerLevel) => {
    return infoPerLevel.questions;
  });
  const game = new Game(user, 0, getLevels(questionsPerLevel));
  return game;
}
