import { Component } from "@angular/core";
import { CellStatus } from "./enums/CellStatus";
import { Cell } from "./entities/Cell";
import { GameStateService } from "./service/gamestate.service";
import { PlayerStateService } from "./service/playerstate.service";
import { WordService } from "./service/word.service";
import { Guess } from "./entities/Guess";
import { Board } from "./entities/Board";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  wordToGuess: string = '';

  board!: Board;

  loadingText: string = '';
  isGameInLoadingState: boolean = false;
  gameOver: boolean = false;
  playerWon: boolean = false;

  readonly WORD_LENGTH: number = 5;
  readonly MAX_NUM_OF_GUESSES: number = 6;

  constructor(private wordService: WordService, private gameStateService: GameStateService, private playerStateService: PlayerStateService) {
    this.newGame() 
  }

  async newGame() {
    this.board = await this.gameStateService.initBoard();
    
    this.isGameInLoadingState = true;
    this.playerWon = this.gameOver = false;
   
    this.loadingText = 'Loading New Game...'
    await this.setWordToGuess();
    this.isGameInLoadingState = false;
    console.log(this);
  }

  private async setWordToGuess() {
    this.wordToGuess = await this.wordService.generateRandomWord();
  }

  async playerGuessFlow(guess: string) {
    this.loadingText = "Comparing words..."
    this.isGameInLoadingState = true;

    // const resCells = await this.wordService.compareWords(guess, this.wordToGuess);
    const resCells = await this.wordService.checkIfPlayerGuessIsCorrect(guess, this.wordToGuess);
    this.isGameInLoadingState = false;
  
    
    this.board.guesses[this.board.currentGuess] = resCells;
    
    this.playerWon = await this.playerStateService.checkIfPlayerWon(this.board);
    this.board.currentGuess++;
    const gameState = await this.gameStateService.checkIfGameIsOver(this.board);
    this.gameOver = this.playerWon || gameState;

    console.log(this);
    
  }

  
}
