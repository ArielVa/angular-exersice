import {Component, OnInit} from "@angular/core";
import { GameStateService } from "./service/gamestate.service";
import { WordService } from "./service/word.service";
import { Board } from "./entities/Board";
import {of, Observable, BehaviorSubject, Subject, map, takeLast, last, take, switchAll, mergeAll, merge, shareReplay} from "rxjs";
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
  gameOver$:  BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  go$!: Observable<boolean>;
  playerWon$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  playerGuessWord$: Subject<string> = new Subject<string>();

  constructor(private wordService: WordService, private gameStateService: GameStateService) {
  }

  async ngOnInit(): Promise<void> {
    await this.newGame();
    
    this.board$ = this.playerGuessWord$.pipe(
      map(async (b) => {
        const i = await this.wordService.checkPlayerGuess(b);
        const j = await this.gameStateService.addGuessToBoard(i);

        this.playerWon$.next(await this.gameStateService.checkIfPlayerWon());

        this.gameOver$.next(await this.gameStateService.checkIfGameIsOver());

        return {
          currentGuess: j.currentGuess+1,
          guesses: j.guesses
        };
      }),
      switchAll()
    );

    
  //  
    
    // this.go$ = this.board$.pipe(
    //   map(async b => {
    //     console.log(b);
        
    //     return await this.gameStateService.checkIfGameIsOver();
    //   }),
    //   switchAll()
    // )


    // this.go$ = this.board$.pipe(
    //   map(async (b) => await this.gameStateService.checkIfGameIsOver()),
    //   switchAll()
    // )

  }

  async newGame(): Promise<void> {
    this.isGameInLoadingState$.next(true);
    this.playerWon$.next(false);
    this.gameOver$.next(false);
    this.loadingText$.next('Creating New Game...');
    await this.wordService.generateRandomWordToGuess();
    const p = await this.gameStateService.createNewGameBoard();
    console.log(this.gameStateService.getBoardObs());
    
    // await this.gameStateService.createNewGameBoard();
    // this.board$ = this.gameStateService.getBoardObs();
    
    // await this.wordService.generateRandomWordToGuess();
    this.isGameInLoadingState$.next(false);
    // console.log(this);
  }

  // async playerGuessFlow(guess: string) {
  //   this.loadingText$.next("Comparing words...");
  //   this.isGameInLoadingState$.next(true);
  //   this.board$ = of(await this.gameStateService.addGuessToBoard(await this.wordService.checkPlayerGuess(guess)));
  //   this.playerWon$.next(await this.gameStateService.checkIfPlayerWon());
  //   this.gameOver$.next(await this.gameStateService.checkIfGameIsOver());
  //   this.isGameInLoadingState$.next(false);
  //   // this.board.guesses[this.board.currentGuess] = resCells;

  //   // this.board.currentGuess++;
  //   // this.gameOver = this.playerWon || gameState;

  //   // console.log(this);

  // }
}
