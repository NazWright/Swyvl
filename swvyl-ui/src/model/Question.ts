export interface Question {
  id: string;
  text: string;
  choices: string[];
  correctAnswer: string;
  checkAnswer: (selection: string) => boolean;
}

export class QuestionImpl implements Question {
  id: string;
  text: string;
  choices: string[];
  correctAnswer: string;

  constructor(
    id: string,
    text: string,
    correctAnswer: string,
    choices: string[]
  ) {
    this.id = id;
    this.text = text;
    this.correctAnswer = correctAnswer;
    this.choices = choices;
  }

  checkAnswer(selection: string) {
    return this.correctAnswer === selection;
  }
}
