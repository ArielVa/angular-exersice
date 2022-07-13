import { ExamService } from './exam.service';
import {Injectable} from "@angular/core";
import {Question} from "../entities/Question";

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private examService: ExamService) {
  }
  async answerQuestion(answerIndex: number): Promise<Question> {
    return {
      userAnswer: answerIndex,
      answers: this.examService.Exam.questions[this.examService.Exam.currentQuestion].answers,
      caption: this.examService.Exam.questions[this.examService.Exam.currentQuestion].caption,
      correct: this.examService.Exam.questions[this.examService.Exam.currentQuestion].correct
    }
  }
}
