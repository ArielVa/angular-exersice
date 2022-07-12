import { Component, OnInit } from '@angular/core';
import { last, map, Observable, Subject } from 'rxjs';
import { Board } from './entities/Board';
import { GameService } from './services/game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit
{
 
  board$ = new Subject<Board>();
  guessWord$ = new Subject<string>();

  wordSubject$: Subject<string> = new Subject<string>();
  listener$!: Observable<boolean>;

  constructor(private gameService: GameService){}

  async ngOnInit(): Promise<void> {

    this.board$.next(await this.gameService.createNewEmptyBoard());

    this.listener$ = this.wordSubject$.pipe(
      map(w => true)
    )

  }


}
