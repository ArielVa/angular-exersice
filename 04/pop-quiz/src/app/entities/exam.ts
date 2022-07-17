import {Question} from "./question";

export interface Exam {
  readonly questions: Question[],
  readonly currentQuestion: number
}
