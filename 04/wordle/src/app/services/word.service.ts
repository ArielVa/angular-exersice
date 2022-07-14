import { Injectable } from '@angular/core';
import {DelayService} from "./delay.service";
import {WORDS} from "../utils/words";
import {Guess} from "../entities/guess";
import {environment} from "../../environments/environment";
import {CellStatus} from "../entities/cell-status";
import {Cell} from "../entities/cell";

@Injectable({
  providedIn: 'root'
})
export class WordService {

  allWords: string[] = WORDS;
  wordToGuess!: string;

  constructor(private delayService: DelayService) { }

  generateRandomWordToGuess(): string {
    this.wordToGuess = WORDS[Math.floor(Math.random() * WORDS.length)];
    console.log(this.wordToGuess)
    return this.wordToGuess;
  }

  checkPlayerGuess(playerGuess: string): Guess {
    let guessResult: Guess;
    if(playerGuess === this.wordToGuess) {
      guessResult = {
        cells: Array(5)
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
