export interface GameQuestionJSONData {
  levelName: string;
  questions: GameJSONQuestions[];
}

export interface GameJSONQuestions {
  question: string;
  correctAnswer: string;
  incorrectAnswer1: string;
  incorrectAnswer2: string;
  incorrectAnswer3: string;
}
