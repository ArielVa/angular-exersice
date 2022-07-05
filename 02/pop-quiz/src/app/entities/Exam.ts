import { Question } from "./Question";

export interface Exam {
    questions: Question[],
    currentQuestion: number
}