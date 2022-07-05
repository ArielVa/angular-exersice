import {Component, Input, OnInit} from '@angular/core';
import { ExamService } from 'src/app/services/exam.service';
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

  constructor(private examService: ExamService) { }

  ngOnInit(): void {
    this.calculateScore()
  }

  async calculateScore(): Promise<void> {
    this.score = await this.examService.calculateExamScore();
  }

}
