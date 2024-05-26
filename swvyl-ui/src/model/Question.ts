export interface Question {
  id: string;
  text: string;
  choices: string[];
  correctAnswer: string;
  askQuestion: () => void;
  checkAnswer: () => boolean;
}
