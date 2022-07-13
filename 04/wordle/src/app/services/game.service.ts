import { Injectable } from '@angular/core';
import { Board } from '../entities/Board';
import { CellStatus } from '../entities/CellStatus';
import { DelayService } from './delay.service';
import { Guess } from '../entities/Guess';
import {Observable, of, Subject} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class GameService {

  board!: Board;
  board$ = new Subject<Board>();

  constructor(private delayService: DelayService) { }

  createNewEmptyBoard(): Observable<Board> {
    this.board = {
      currentGuess: -1,
      guesses: Array(6)
      .fill(0)
      .map(_ => ({
        cells: Array(5)
        .fill(0)
        .map(_ => ({
          content: '',
          status: CellStatus.EMPTY
        }))
      }))
    };
    this.board$.next(this.board);
    return of(this.board);
  }

  addGuessToBoard(guess: Guess): Observable<Board> {
    this.board.guesses[this.board.currentGuess] = guess;
    this.board = {
      currentGuess: this.board.currentGuess + 1,
      guesses: this.board.guesses
    }
    this.board$.next(this.board);
    return of(this.board);
  }

  checkIfGameIsOver(): boolean {
    console.log("step 3")
    return (this.checkIfPlayerWon() || this.board.currentGuess >= 5);
  }

  checkIfPlayerWon(): boolean {
    if(this.board.currentGuess < 0) return false;
    console.log("step 4")
    return !(this.board.guesses[this.board.currentGuess-1].cells.some(cell => cell.status !== CellStatus.EXACT));
  }
}
