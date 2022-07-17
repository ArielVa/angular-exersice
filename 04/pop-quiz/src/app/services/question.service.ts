import { Injectable } from '@angular/core';
import {Question} from "../entities/question";
import {ExamStateService} from "./exam-state.service";
import {BehaviorSubject, map, Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class QuestionService {


  constructor() {

  }

  async answerQuestion(question: Question, answerIndex: number): Promise<Question> {
    return {
      ...question,
      userAnswer: answerIndex
    }
  }

}
