import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {BehaviorSubject, first, last, map, merge, Observable, startWith, switchAll, take, withLatestFrom} from 'rxjs';
import {Board} from './entities/board';
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
  trueGameOver$!: Observable<boolean>

  constructor(private gameService: GameService, private wordService: WordService){}

  ngOnInit() {

    this.newGame()

    this.board$ = this.gameService.getGameStateObs().pipe(
      map(gs => gs.board)
    );

    this.playerWon$ = this.gameService.getGameStateObs().pipe(
      map(gs => {
        console.log(gs)
        return gs.hasPlayerWon
      })
    );

    this.gameOver$ = this.gameService.getGameStateObs().pipe(
      map(gs => gs.isGameOver || gs.hasPlayerWon)
    );

  }

  addGuess(value: string) {
    this.gameService.addGuessToBoard(this.wordService.checkPlayerGuess(value));
  }

  newGame() {
    this.wordService.generateRandomWordToGuess();
    this.gameService.createNewBoard();
  }
}
