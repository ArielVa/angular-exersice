import { Injectable } from '@angular/core';
import { Board } from '../entities/Board';
import { CellStatus } from '../entities/CellStatus';
import { DelayService } from './delay.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  board!: Board;
  

  constructor(private delayService: DelayService) { }

  async createNewEmptyBoard(): Promise<Board> {
    await this.delayService.delay(1000);
    return {
      currentGuess: 0,
      guesses: Array(6)
      .fill(0)
      .map(_ => ({
        cells: Array(5)
        .fill(0)
        .map(_ => ({
          content: '',
          status: CellStatus.EMPTY
        }))
      }))
    }
  }


}
