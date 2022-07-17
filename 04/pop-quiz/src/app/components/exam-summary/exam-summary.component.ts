import { Component, OnInit } from '@angular/core';
import {ExamStateService} from "../../services/exam-state.service";
import {map, Observable, pipe,} from "rxjs";
import {Question} from "../../entities/question";

@Component({
  selector: 'app-exam-summary',
  templateUrl: './exam-summary.component.html',
  styleUrls: ['./exam-summary.component.css']
})
export class ExamSummaryComponent implements OnInit {

  questions$!: Observable<Question[]>

  constructor(private examStateService: ExamStateService) { }

  ngOnInit(): void {
    this.questions$ = this.examStateService.getExamStateObs()
      .pipe(
        map(es => es.exam.questions.filter(q => q.userAnswer > 0))
      )

  }

}
