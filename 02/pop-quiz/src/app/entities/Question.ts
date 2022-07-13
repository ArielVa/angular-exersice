export interface Question {
  readonly caption: string;
  readonly answers: string[];
  readonly correct: number;
  readonly userAnswer: number;
}
