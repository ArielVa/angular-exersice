import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Exam } from '../entities/Exam';
import { Question } from '../entities/Question';
import { QUESTIONS_DB } from '../utils/QuestionDB';
import {DelayService} from "./delay.service";

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  private allQuestions: Question[] = QUESTIONS_DB as unknown as Question[];
  private exam!: Exam;

  constructor(private delayService: DelayService) { }

  async createNewExam(): Promise<Exam> {
    this.exam = {currentQuestion: 0, questions: Array(environment.numOfQuestions)};
    Array(environment.numOfQuestions).fill(0).forEach((_, idx) => {
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

  async insertAnsweredQuestion(question: Question): Promise<Exam> {
    await this.delayService.delay(200);
    this.exam.questions[this.exam.currentQuestion] = question;
    this.exam = {
      questions: [...this.exam.questions],
      currentQuestion: this.exam.currentQuestion + 1
    };
    return this.exam;
  }

  async isQuizOver(): Promise<boolean> {
    return this.exam.currentQuestion === environment.numOfQuestions;
  }

  get Exam() {
    return {
      currentQuestion: this.exam.currentQuestion,
      questions: this.exam.questions
    };
  }
}
