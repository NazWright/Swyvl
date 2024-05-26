import { Question } from "./Question";

export interface Level {
  levelNumber: number;
  questions: Question[];
  isCompleted: boolean;
  loadQuestions: () => void;
  checkCompletion: () => boolean;
}
