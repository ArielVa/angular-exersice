import { Component } from '@angular/core';
import {Question} from "./utils/Question";
import {QUESTIONS_DB} from "./utils/QuestionDB";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pop-quiz';

  quizLength: number = 10;
  questions: Question[] = [];

  currentQuestionIndex: number = 0;
  isQuizOver: boolean = false;

  private allQuestions: Question[] = QUESTIONS_DB as unknown as Question[];

  constructor() {
    this.loadNextQuestion()
    console.log(this)
  }

  // private populateQuizQuestions() {
  //   while(this.questions.length != this.quizLength) {
  //     const i = Math.floor(Math.random() * this.allQuestions.length);
  //     !this.questions.includes(this.allQuestions[i]) ? this.questions.push(this.allQuestions[i]) : undefined;
  //   }
  // }

  private loadNextQuestion() {
    let i = Math.floor(Math.random() * this.allQuestions.length);
    while(this.questions.includes(this.allQuestions[i])) {
      i = Math.floor(Math.random() * this.allQuestions.length);
    }
    this.questions.push(this.allQuestions[i]);
  }

  selectAnswer(answerIndex: number) {
    this.questions[this.currentQuestionIndex].userAnswer = answerIndex;
    setTimeout(() => {
      this.currentQuestionIndex++;
      this.isQuizOver = this.currentQuestionIndex === this.quizLength;
      !this.isQuizOver ? this.loadNextQuestion() : undefined;
    }, 200);
  }
}
