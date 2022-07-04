import {Component} from '@angular/core';
import {Cell} from "./model/cell";
import {WordService} from "./service/word.service";
import {GameStateService} from "./service/gamestate.service";
import {PlayerStateService} from "./service/playerstate.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  wordToGuess: string = '';
  cells: Cell[] = [];

  loadingText: string = '';
  isGameInLoadingState: boolean = false;
  gameOver: boolean = false;
  playerWon: boolean = false;

  readonly WORD_LENGTH: number = 5;
  readonly MAX_NUM_OF_GUESSES: number = 6;
  currentGuessNum: number = 0;

  constructor(private wordService: WordService, private gameStateService: GameStateService, private playerStateService: PlayerStateService) {
    this.newGame()
  }

  private async setWordToGuess() {
    this.wordToGuess = await this.wordService.generateRandomWord();
  }

  async playerGuessFlow(guess: string) {
    // this.addGuess(guess);
    this.loadingText = "Comparing words..."
    this.isGameInLoadingState = true;

    const resCells = await this.wordService.compareWords(guess, this.wordToGuess);
    this.isGameInLoadingState = false;
    resCells.forEach((cell, i) => {
      this.cells[(this.currentGuessNum * this.WORD_LENGTH) + i] = new Cell(cell.CellContent, cell.CellStatus);
    });

    this.playerWon = await this.playerStateService.checkIfPlayerWon(this.currentGuessNum++, this.cells);

    const gState = await this.gameStateService.checkIfGameIsOver(this.currentGuessNum);
    this.gameOver = this.playerWon || gState;
  }

  async newGame() {
    this.isGameInLoadingState = true;
    this.currentGuessNum = 0;
    this.playerWon = this.gameOver = false;
    this.cells = [];
    for (let i = 0; i < this.WORD_LENGTH * this.MAX_NUM_OF_GUESSES; i++) {
      this.cells.push(new Cell());
    }
    this.loadingText = 'Loading New Game...'
    await this.setWordToGuess();
    this.isGameInLoadingState = false;
    console.log(this);
  }
}
