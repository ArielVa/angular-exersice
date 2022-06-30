import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Question} from "../../utils/Question";

@Component({
  selector: 'app-question-presenter',
  templateUrl: './question-presenter.component.html',
  styleUrls: ['./question-presenter.component.css']
})
export class QuestionPresenterComponent implements OnInit {

  @Input()
  question!: Question;

  @Input()
  numQuestion: number = 0;

  @Output()
  answerSelected = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onAnswerClicked(answerIndex: number) {
    this.answerSelected.emit(answerIndex);
  }

}
