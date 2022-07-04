import { Component } from '@angular/core';
import {Question} from "./entities/Question";
import {QUESTIONS_DB} from "./utils/QuestionDB";
import {QuestionService} from "./services/questionservice.service";
import {environment} from "../environments/environment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pop-quiz';

  questions: Question[] = [];

  currentQuestionIndex: number = 0;
  isQuizOver: boolean = false;


  constructor(private questionService: QuestionService) {
    this.loadNextQuestion();
    console.log(this)
  }

  private async loadNextQuestion() {
    const q = await this.questionService.loadNewQuestion(this.questions);
    this.questions.push(q);
  }

  async selectAnswer(answerIndex: number) {
    this.questions[this.currentQuestionIndex].userAnswer = answerIndex;
    this.isQuizOver = this.currentQuestionIndex + 1 === environment.numOfQuestions;
    if(!this.isQuizOver) {
      await this.loadNextQuestion();
      this.currentQuestionIndex++;
    }
  }
}
