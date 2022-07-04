import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Question} from "../../entities/Question";

@Component({
  selector: 'app-question-presenter',
  templateUrl: './question-presenter.component.html',
  styleUrls: ['./question-presenter.component.css']
})
export class QuestionPresenterComponent implements OnInit {

  @Input()
  question!: Question;

  lastQuestion: Question = this.question;

  @Input()
  numQuestion: number = 0;

  @Output()
  answerSelected = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit(): void {
  }

  async onAnswerClicked(answerIndex: number) {
    this.lastQuestion = this.question; // prevents spamming answers on old questions before new one is loaded
    this.answerSelected.emit(answerIndex);
  }

}
