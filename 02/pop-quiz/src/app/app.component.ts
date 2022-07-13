import { Component } from '@angular/core';
import {Question} from "./entities/Question";
import {QuestionService} from "./services/questionservice.service";
import { ExamService } from './services/exam.service';
import { Exam } from './entities/Exam';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pop-quiz';

  answeredQuestions: Question[] = [];
  exam!: Exam;

  isQuizOver: boolean = false;


  constructor(private questionService: QuestionService, private examService: ExamService) {
    this.createNewPopQuiz();
  }

  private async createNewPopQuiz() {
    this.exam = await this.examService.createNewExam();
  }

  async selectAnswer(answerIndex: number) {

    this.exam = await this.examService.insertAnsweredQuestion(await this.questionService.answerQuestion(answerIndex));

    this.answeredQuestions = this.exam.questions.filter(q => q.userAnswer >= 1);

    this.isQuizOver = await this.examService.isQuizOver();
  }
}
