import { Injectable } from '@angular/core';
import {Question} from "../entities/Question";
import { ExamService } from './exam.service';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private examService: ExamService) {
  }
  async answerQuestion(answerIndex: number) {
    this.examService.exam.questions[this.examService.exam.currentQuestion++].userAnswer = answerIndex;
  }
}
