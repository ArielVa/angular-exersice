import {Component, OnInit} from '@angular/core';
import {ExamStateService} from "./services/exam-state.service";
import {map, Observable} from "rxjs";
import {Exam} from "./entities/exam";
import {QuestionService} from "./services/question.service";
import {Question} from "./entities/question";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  exam$!: Observable<Exam>;
  isExamOver$!: Observable<boolean>;
  constructor(private examStateService: ExamStateService, private questionService: QuestionService) {

  }
  ngOnInit(): void {

    this.examStateService.createNewExam();

    this.exam$ = this.examStateService.getExamStateObs()
    .pipe(
      map(es => es.exam)
    );

    this.isExamOver$ = this.examStateService.getExamStateObs()
      .pipe(
        map(es => es.isExamOver)
      );



  }

  async answerQuestion(answeredQuestion: Question) {
    await this.examStateService.answerQuestion(answeredQuestion);
  }
}
