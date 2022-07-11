import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {Board} from '../entities/Board';
import {CellStatus} from '../enums/CellStatus';
import {DelayService} from "./delay.service";
import {Observable, of, Subject} from "rxjs";
import {Guess} from "../entities/Guess";


@Injectable({
  providedIn: 'root'
})
export class GameStateService {

  board!: Board;
  board$: Subject<Board> = new Subject<Board>();

  constructor(private delayService: DelayService) {
  }

  async createNewGameBoard(): Promise<Observable<Board>> {
    await this.delayService.delay(1000);
    this.board = {
      currentGuess: 0,
      guesses: Array(environment.maxNumOfGuesses)
      .fill(0)
      .map((_) => ({
        cells: Array(environment.wordLength)
        .fill(0)
        .map((_) => ({
          content: '',
          status: CellStatus.EMPTY
        }))
      }))
    };
    this.board$.next(this.board);
    return this.board$.asObservable()
  }

  async addGuessToBoard(guess: Guess): Promise<Board> {
    await this.delayService.delay(100);
    this.board.guesses[this.board.currentGuess] = guess;
    this.board = {
      currentGuess: this.board.currentGuess + 1,
      guesses: this.board.guesses
    }
    this.board$.next(this.board);
    console.log(this.board)
    return this.board
  }

  async checkIfGameIsOver(): Promise<boolean> {
    return await this.checkIfPlayerWon() || this.board.currentGuess === environment.maxNumOfGuesses;
  }

  async checkIfPlayerWon(): Promise<boolean> {
    return !(this.board.guesses[this.board.currentGuess-1].cells.some(cell => cell.status !== CellStatus.EXACT));
  }
}
