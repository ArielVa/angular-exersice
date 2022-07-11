import {Injectable} from '@angular/core';
import {WORDS} from "../utils/words";
import {Cell} from "../entities/Cell";
import {environment} from "../../environments/environment";
import {CellStatus} from '../enums/CellStatus';
import {Guess} from '../entities/Guess';
import {BehaviorSubject} from "rxjs";
import {DelayService} from "./delay.service";

@Injectable({
  providedIn: 'root'
})
export class WordService {

  allWords: string[] = WORDS;
  wordToGuess!: string;

  constructor(private delayService: DelayService) {
  }

   async generateRandomWordToGuess(): Promise<string> {
     await this.delayService.delay(1000);
     this.wordToGuess = WORDS[Math.floor(Math.random() * WORDS.length)];
     console.log(this.wordToGuess)
     return this.wordToGuess;
   }

  async checkPlayerGuess(playerGuess: string): Promise<Guess> {
    await this.delayService.delay(200);
    let guessResult: Guess;
    if(playerGuess === this.wordToGuess) {
      guessResult = {
        cells: Array(environment.wordLength)
          .fill(0)
          .map((_, i) => ({
            content: playerGuess[i],
            status: CellStatus.EXACT
          }))
      }
    } else {
      const cells: Cell[] = [];
      for (let i = 0; i < playerGuess.length; i++) {
        let status: CellStatus = CellStatus.WRONG;
        for (let j = 0; j < this.wordToGuess.length; j++) {
          if (playerGuess[i] === this.wordToGuess[j]) {
            status = i === j ? CellStatus.EXACT : CellStatus.EXISTS;
            break;
          }
        }
        cells.push({content: playerGuess[i], status: status});
      }
      guessResult = {cells: [...cells]};
    }
    return guessResult;
  }

}
