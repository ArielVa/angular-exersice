import { Component } from '@angular/core';
import {Question} from "./entities/question";
import {QUESTIONS} from "./entities/questions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentQuestion: Question;
  currentQuestionIndex: number;
  summary: Question[];
  isQuizOver: boolean;

  constructor() {
    this.currentQuestionIndex = 0;
    this.currentQuestion = QUESTIONS[this.currentQuestionIndex];
    this.summary = [];
    this.isQuizOver = false;
  }

  userSelectAnswer(answer: string) {
    if(this.isQuizOver) return;

    let answerIndex = this.currentQuestion.answers.indexOf(answer) + 1;
    this.currentQuestion.userAnswer = answerIndex;

    this.summary.push(this.currentQuestion);
    this.currentQuestionIndex++;
    this.currentQuestion = QUESTIONS[this.currentQuestionIndex];
    this.isQuizOver = this.currentQuestionIndex === 10;
  }
}
