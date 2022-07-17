import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Question} from "../../entities/question";
import {Exam} from "../../entities/exam";
import {QuestionService} from "../../services/question.service";

@Component({
  selector: 'app-question-presenter',
  templateUrl: './question-presenter.component.html',
  styleUrls: ['./question-presenter.component.css']
})
export class QuestionPresenterComponent implements OnInit {

  @Input()
  question!: Question | null;

  @Input()
  questionNumber!: number

  @Output()
  userAnswerChosen = new EventEmitter<Question>();

  constructor(private questionService: QuestionService) { }

  ngOnInit(): void {
  }

  async answerChosen(answerIndex: number) {
    this.userAnswerChosen.emit(await this.questionService.answerQuestion(this.question ? this.question : {userAnswer:0, answers:[], correct:0, caption:''}, answerIndex));
  }

}
