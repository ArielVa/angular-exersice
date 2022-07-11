import {Component, OnInit} from "@angular/core";
import { GameStateService } from "./service/gamestate.service";
import { WordService } from "./service/word.service";
import { Board } from "./entities/Board";
import {of, Observable, BehaviorSubject, Subject, map, takeLast} from "rxjs";
import {environment} from "../environments/environment";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  readonly WORD_LENGTH = environment.wordLength;

  board$!: Observable<Board>
  loadingText$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  isGameInLoadingState$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  gameOver$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  playerWon$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private wordService: WordService, private gameStateService: GameStateService) {
  }

  async ngOnInit(): Promise<void> {
    await this.newGame()
  }

  async newGame(): Promise<void> {
    this.isGameInLoadingState$.next(true);
    this.playerWon$.next(false);
    this.gameOver$.next(false);
    this.loadingText$.next('Creating New Game...');
    this.board$ = (await this.gameStateService.createNewGameBoard()).pipe(
      takeLast(1)
    );
    await this.wordService.generateRandomWordToGuess();
    this.isGameInLoadingState$.next(false);
    console.log(this);
  }

  async playerGuessFlow(guess: string) {
    this.loadingText$.next("Comparing words...");
    this.isGameInLoadingState$.next(true);
    // this.board$.next(await this.gameStateService.addGuessToBoard(await this.wordService.checkPlayerGuess(guess)));
    this.playerWon$.next(await this.gameStateService.checkIfPlayerWon());
    this.gameOver$.next(await this.gameStateService.checkIfGameIsOver());
    this.isGameInLoadingState$.next(false);
    // this.board.guesses[this.board.currentGuess] = resCells;

    // this.board.currentGuess++;
    // this.gameOver = this.playerWon || gameState;

    // console.log(this);

  }
}
