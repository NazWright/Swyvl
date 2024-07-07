import { Question } from "./Question";

export enum LevelStatus {
  NOT_STARTED,
  OVERVIEW,
  IN_PROGRESS,
  COMPLETED,
  FAILED,
}

export interface Levelable {
  levelNumber: number;
  status: LevelStatus;
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
  status: LevelStatus;

  constructor(
    levelNumber: number,
    status: LevelStatus,
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
    this.status = status || LevelStatus.NOT_STARTED;
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

  setLevelStatus = (status: LevelStatus) => {
    this.status = status;
  };

  completeLevel = () => {
    this.setLevelStatus(LevelStatus.COMPLETED);
    this.isCompleted = true;
  };

  failLevel = () => {
    this.setLevelStatus(LevelStatus.FAILED);
    this.isCompleted = false;
  };
}
