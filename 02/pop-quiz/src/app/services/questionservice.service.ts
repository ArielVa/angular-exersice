import { Injectable } from '@angular/core';
import {Question} from "../entities/Question";
import {QUESTIONS_DB} from "../utils/QuestionDB";

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private allQuestions: Question[] = QUESTIONS_DB as unknown as Question[];
  private currentQuestion!: Question;
  constructor() {
  }

  async loadNewQuestion(questions: Question[]): Promise<Question> {
    return new Promise<Question>((resolve, reject) => {
      setTimeout(() => {
        let i = Math.floor(Math.random() * this.allQuestions.length);
        while(questions.includes(this.allQuestions[i])) {
          i = Math.floor(Math.random() * this.allQuestions.length);
        }
        resolve(this.currentQuestion = this.allQuestions[i]);
      }, 150)
    });
  }

  async getCurrentQuestion() {
    return this.currentQuestion;
  }

}
