import { Question } from "./Question";

export interface Levelable {
  levelNumber: number;
  questions?: Question[];
  isCompleted: boolean;
  numberCorrectToPass: number;
  correctCount: number;
  // loadQuestions: () => void;
  checkCompletion: () => boolean;
}

export class Level implements Levelable {
  levelNumber: number;
  questions?: Question[];
  isCompleted: boolean;
  numberCorrectToPass: number;
  correctCount: number;

  constructor(
    levelNumber: number,
    questions: Question[] | undefined,
    isCompleted: boolean,
    numberCorrectToPass: number,
    correctCount?: number
  ) {
    this.levelNumber = levelNumber;
    this.isCompleted = isCompleted;
    this.questions = questions;
    this.correctCount = correctCount || 0;
    this.numberCorrectToPass = numberCorrectToPass;
  }

  checkCompletion = () => {
    return this.correctCount >= this.numberCorrectToPass;
  };
}
