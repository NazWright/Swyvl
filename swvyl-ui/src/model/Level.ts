import { Question } from "./Question";

export interface Levelable {
  levelNumber: number;
  questions?: Question[];
  isCompleted: boolean;
  numberCorrectToPass: number;
  correctCount: number;
  // loadQuestions: () => void;
  checkCompletion: (questionIndex: number) => boolean;
  isLevelPassed: () => boolean;
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

  checkCompletion = (questionIndex: number) => {
    if (!this.questions) return false;

    if (questionIndex === this.questions.length - 1) {
      this.isCompleted = true;
      return true;
    }

    return false;
  };

  isLevelPassed = () => {
    return this.correctCount >= this.numberCorrectToPass;
  };
}
