import { Injectable } from '@angular/core';
import {ExamState, initialExamState} from "../entities/exam-state";
import {BehaviorSubject, Observable} from "rxjs";
import {Exam} from "../entities/exam";
import {Question} from "../entities/question";

@Injectable({
  providedIn: 'root'
})
export class ExamStateService {


  private examState: ExamState = initialExamState()
  examState$ = new BehaviorSubject<ExamState>(this.examState);

  exam$ = new BehaviorSubject<Exam>(this.examState.exam);
  isExamOver$ = new BehaviorSubject<boolean>(this.examState.isExamOver);

  constructor() { }

  private changeExamState(examState: ExamState) {
    this.examState = examState;
    this.examState$.next((this.examState));
  }

  ExamState(): ExamState {
    return {
      exam: this.examState.exam,
      isExamOver: this.examState.isExamOver
    }
  }

  createNewExam() {
    this.changeExamState(initialExamState());
    console.log(initialExamState())
  }

  async calculateExamScore(): Promise<string> {
    let nCorrect: number = 0;
    this.examState.exam.questions.forEach(question => {
      nCorrect += question.userAnswer === question.correct ? 1 : 0;
    });
    return ((nCorrect / this.examState.exam.questions.length) * 100).toFixed(2);
  }

  async answerQuestion(answeredQuestion: Question): Promise<void> {
    this.examState.exam.questions[this.examState.exam.currentQuestion] = answeredQuestion

    this.examState = {
      exam: {
        questions: this.examState.exam.questions,
        currentQuestion: this.examState.exam.currentQuestion + 1
      },
      isExamOver: this.examState.exam.currentQuestion + 1 === 10
    }
    console.log(this.examState)
    this.examState$.next(this.examState);
  }


  getExamStateObs(): Observable<ExamState> {
    return this.examState$.asObservable()
  }

  getExamObs(): Observable<Exam> {
    return this.exam$.asObservable();
  }

}
