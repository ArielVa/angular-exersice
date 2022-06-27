import {Component} from '@angular/core';
import {WORDS} from "./utils/words";
import {Cell, CellStatus} from "./model/cell";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  wordToGuess: string = '';
  cells: Cell[] = [];

  gameOver: boolean = false;
  playerWon: boolean = false;

  readonly WORD_LENGTH: number = 5;
  readonly MAX_NUM_OF_GUESSES: number = 6;
  currentGuessNum: number = 0;

  constructor() {
    this.newGame();
    console.log(this)
  }

  private setWordToGuess(): void {
    this.wordToGuess = WORDS[Math.floor(Math.random() * WORDS.length)]
  }

  private addGuess(value: string): void {
    if(value === this.wordToGuess) {
      for(let i=0; i<this.WORD_LENGTH; i++) {
        this.cells[(this.currentGuessNum * this.WORD_LENGTH) + i].CellStatus = CellStatus.EXACT;
        this.cells[(this.currentGuessNum * this.WORD_LENGTH) + i].CellContent = value[i];
      }
    } else {
      for(let i=0; i < value.length; i++) {
        let cellStatus: CellStatus = CellStatus.WRONG;
        for(let j=0; j < this.wordToGuess.length; j++) {
          if(value[i] === this.wordToGuess[j]) {
            cellStatus = i === j ? CellStatus.EXACT : CellStatus.EXISTS;
          }
        }
        this.cells[(this.currentGuessNum * this.WORD_LENGTH) + i].CellStatus = cellStatus;
        this.cells[(this.currentGuessNum * this.WORD_LENGTH) + i].CellContent = value[i];
      }
    }

  }

  private setPlayerState(): void {
    if(this.currentGuessNum > this.MAX_NUM_OF_GUESSES) {
      this.playerWon = false;
      return ;
    }

    for(let i=0; i<this.WORD_LENGTH; i++) {
      if(this.cells[(this.currentGuessNum * this.WORD_LENGTH) + i].CellStatus !== CellStatus.EXACT) {
       this.playerWon = false;
       return;
      }
    }

    this.playerWon = true;
  }

  private setGameState(): void {
    this.gameOver = this.playerWon || this.currentGuessNum === this.MAX_NUM_OF_GUESSES;
  }

  playerGuessFlow(guess: string): void {
    this.addGuess(guess);
    this.setPlayerState();
    this.currentGuessNum++;

    this.setGameState();
    console.log(this)
  }

  newGame(): void {
    this.setWordToGuess();
    this.currentGuessNum = 0;
    this.playerWon = this.gameOver = false;
    this.cells = [];
    for(let i =0; i < this.WORD_LENGTH * this.MAX_NUM_OF_GUESSES; i++) {
      this.cells.push(new Cell());
    }
  }



}
