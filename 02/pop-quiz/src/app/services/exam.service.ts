import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Exam } from '../entities/Exam';
import { Question } from '../entities/Question';
import { QUESTIONS_DB } from '../utils/QuestionDB';

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  allQuestions: Question[] = QUESTIONS_DB as unknown as Question[];

  exam!: Exam;

  constructor() { }

  async createNewExam(): Promise<Exam> {
    this.exam = {currentQuestion: 0, questions: Array(environment.numOfQuestions)};

    Array(environment.numOfQuestions).fill(0).forEach((n, idx) => {
      let i = Math.floor(Math.random() * this.allQuestions.length);
      while(this.exam.questions.includes(this.allQuestions[i])) {
        i = Math.floor(Math.random() * this.allQuestions.length);
      }
      this.exam.questions[idx] = this.allQuestions[i];
    });

    return this.exam;
  }

  async calculateExamScore(): Promise<string> {
    let nCorrect: number = 0;
    this.exam.questions.forEach(question => {
      nCorrect += question.userAnswer === question.correct ? 1 : 0;
    });
    return ((nCorrect / this.exam.questions.length) * 100).toFixed(2);
  }

  async isQuizOver(): Promise<boolean> {
    return this.exam.currentQuestion === environment.numOfQuestions;
  }
}
