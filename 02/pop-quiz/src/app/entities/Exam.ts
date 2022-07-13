import { Question } from "./Question";

export interface Exam {
    readonly questions: Question[],
    readonly currentQuestion: number
}
