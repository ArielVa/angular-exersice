import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import { Board } from '../entities/Board';
import { Cell } from '../entities/Cell';
import { Guess } from '../entities/Guess';
import { CellStatus } from '../enums/CellStatus';


@Injectable({
  providedIn: 'root'
})
export class GameStateService {


  board!: Board;

  constructor() {    
  }

  async initBoard (): Promise<Board> {
    return new Promise<Board>((resolve, rejected) => {
      setTimeout(() => {
          this.board = {currentGuess: 0, guesses: Array(environment.maxNumOfGuesses)}
          for(let i=0; i<environment.maxNumOfGuesses; i++) {
            let tempGuess: Guess = {cells: []};
            Array(environment.wordLength).fill(0).forEach((n, i) => {
              tempGuess.cells.push({content: '', status: CellStatus.EMPTY});
            })
      
            this.board.guesses[i] = tempGuess;
          }
         
          resolve(this.board)
      }, 100);
    });
  } 

  async checkIfGameIsOver(board: Board): Promise<boolean> {
    return board.currentGuess === environment.maxNumOfGuesses;
  }
}
