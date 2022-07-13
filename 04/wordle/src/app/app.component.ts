import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {BehaviorSubject, first, last, map, Observable, startWith, switchAll, take, withLatestFrom} from 'rxjs';
import {Board} from './entities/Board';
import {GameService} from './services/game.service';
import {WordService} from "./services/word.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit
{

  board$!: Observable<Board>;
  guessWord$ = new BehaviorSubject<string>('');

  playerWon$!: Observable<boolean>;
  gameOver$!: Observable<boolean>;


  constructor(private gameService: GameService, private wordService: WordService){}

  ngOnInit() {
    this.newGame()
  }

    newGame() {
      this.wordService.generateRandomWordToGuess();
      this.gameService.createNewEmptyBoard();

      this.board$ = this.guessWord$.pipe(
        map(playerGuessWord => {
          console.log("step 1")
          return this.gameService.addGuessToBoard(this.wordService.checkPlayerGuess(playerGuessWord));
        }),
        switchAll()
      );


      this.gameOver$ = this.guessWord$.pipe(
        map((_) => {
          console.log("step 2")
          return this.gameService.checkIfGameIsOver();
        }),
      );

      this.playerWon$ = this.guessWord$.pipe(
        first(),
        map(_ => {
          console.log("step 5")
          return this.gameService.checkIfPlayerWon();
        }),
      );
    }
}
