import {Exam} from "./exam";
import {Question} from "./question";
import {QUESTIONS_DB} from "./questions";

export interface ExamState {
    readonly exam: Exam,
    readonly isExamOver: boolean
}

function createRandomQuestions(): Question[] {
  const allQuestions = QUESTIONS_DB as unknown as Question[];
  let questions: Question[] = [];
  questions = Array(10)
  .fill(0)
  .map((_, idx) => {
    let i = Math.floor(Math.random() * allQuestions.length);
    while(questions.includes(allQuestions[i])) {
      i = Math.floor(Math.random() * allQuestions.length);
    }
    return allQuestions[i];
  });
  ;
  return questions;
}


export function initialExamState(): ExamState {
  return {
    exam: {
      questions: createRandomQuestions(),
      currentQuestion: 0
    },
    isExamOver: false
  }
}
