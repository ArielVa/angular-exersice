import {Component, Input, OnInit} from '@angular/core';
import {Question} from "../../entities/Question";

@Component({
  selector: 'app-quiz-over',
  templateUrl: './quiz-over.component.html',
  styleUrls: ['./quiz-over.component.css']
})
export class QuizOverComponent implements OnInit {

  @Input()
  quizQuestions: Question[] = []

  score: string = '';

  constructor() { }

  ngOnInit(): void {
    this.calculateScore()
  }

  async calculateScore(): Promise<void> {
    let nCorrect: number = 0;
    this.quizQuestions.forEach(question => {
      nCorrect += question.userAnswer === question.correct ? 1 : 0;
    });
    this.score = ((nCorrect / this.quizQuestions.length) * 100).toFixed(2);
  }

}
