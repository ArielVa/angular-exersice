import {Injectable} from '@angular/core';
import {CellStatus} from '../entities/cell-status';
import {DelayService} from './delay.service';
import {Guess} from '../entities/guess';
import {BehaviorSubject, Observable} from "rxjs";
import {GameState, initialGameState} from "../entities/game-state";

@Injectable({
  providedIn: 'root'
})
export class GameService {

  gameState: GameState = initialGameState();
  gameState$ = new BehaviorSubject<GameState>(this.gameState);

  constructor(private delayService: DelayService) {
  }

  private updateGameStateBehaviourSubject(gameState: GameState) {
    this.gameState = gameState;
    this.gameState$.next(this.gameState);
  }

  getGameStateObs(): Observable<GameState> {
    return this.gameState$.asObservable();
  }

  createNewBoard(): void {
    this.updateGameStateBehaviourSubject(initialGameState())
  }

  private checkIfGameOver(): boolean {
    return this.gameState.board.currentGuess + 1 === 6;
  }

  private checkIfPlayerWon(): boolean {
    return !this.gameState.board.guesses[this.gameState.board.currentGuess].cells.some(cell => cell.status !== CellStatus.EXACT);
  }

  addGuessToBoard(guess: Guess): void {
    const board = this.gameState.board;
    board.guesses[board.currentGuess] = guess;
    this.gameState = {
      board: {
        guesses: board.guesses,
        currentGuess: board.currentGuess + 1
      },
      isGameOver: this.checkIfGameOver(),
      hasPlayerWon: this.checkIfPlayerWon()
    };
    this.gameState$.next(this.gameState);
  }


}
