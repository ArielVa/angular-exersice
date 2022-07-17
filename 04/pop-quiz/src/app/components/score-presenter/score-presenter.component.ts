import { Component, OnInit } from '@angular/core';
import {map, Observable, switchAll} from "rxjs";
import {ExamStateService} from "../../services/exam-state.service";

@Component({
  selector: 'app-score-presenter',
  templateUrl: './score-presenter.component.html',
  styleUrls: ['./score-presenter.component.css']
})
export class ScorePresenterComponent implements OnInit {
  score$!: Observable<string>
  constructor(private examStateService: ExamStateService) { }

  ngOnInit(): void {
    this.score$ = this.examStateService.getExamStateObs()
    .pipe(
      map(_ => this.examStateService.calculateExamScore()),
      switchAll()
    )
  }

}
