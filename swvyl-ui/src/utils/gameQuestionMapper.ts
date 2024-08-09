import { default as smartGoalsJson } from "../data/game/smartGoals.json";
import { GameQuestionJSONData } from "../model/GameQuestionJSONData";
import { QuestionImpl } from "../model/Question";

export function mapJsonFileToGameQuestions(data: GameQuestionJSONData) {
  const questions = data.questions.map((questionJson, index: number) => {
    return new QuestionImpl(
      `${index}`,
      questionJson.question,
      questionJson.correctAnswer,
      [
        questionJson.incorrectAnswer1,
        questionJson.correctAnswer,
        questionJson.incorrectAnswer2,
        questionJson.incorrectAnswer3,
      ]
    );
  });
  return questions;
}
