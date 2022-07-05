import {Injectable} from '@angular/core';
import {WORDS} from "../utils/words";
import {Cell} from "../entities/Cell";
import {environment} from "../../environments/environment";
import { CellStatus } from '../enums/CellStatus';
import { Guess } from '../entities/Guess';

@Injectable({
  providedIn: 'root'
})
export class WordService {

  constructor() {
  }

  async generateRandomWord(): Promise<string> {
    return new Promise<string>((resolve, rejected) => {
      setTimeout(() => {
        resolve(WORDS[Math.floor(Math.random() * WORDS.length)]);
      }, 1000)
    });
  }

  async compareWords(s1: string, s2: string):  Promise<Cell[]> {
    return new Promise<Cell[]>((resolve, rejected) => {
      setTimeout(() => {
        const cells: Cell[] = [];
        if(s1 === s2) {
          for(let i=0; i<environment.wordLength; i++) {

            cells.push({content: s2[i], status: CellStatus.EXACT})
          }
        } else {
          for(let i=0; i < s1.length; i++) {
            let cellStatus: CellStatus = CellStatus.WRONG;
            for(let j=0; j < s2.length; j++) {
              if(s1[i] === s2[j]) {
                cellStatus = i === j ? CellStatus.EXACT : CellStatus.EXISTS;
              }
            }
            cells.push({content: s1[i], status: cellStatus})
          }
        }
        resolve(cells);
      }, 500)
    })
  }

  async checkIfPlayerGuessIsCorrect(playerWord: string, correctWord: string): Promise<Guess> {
    return new Promise<Guess>((resolve, rejected) => {
      let guessResult: Guess;;
      setTimeout(() => {
        if(playerWord === correctWord) {
          guessResult = {cells: [
            {content: correctWord[0], status: CellStatus.EXACT},
            {content: correctWord[1], status: CellStatus.EXACT},
            {content: correctWord[2], status: CellStatus.EXACT},
            {content: correctWord[3], status: CellStatus.EXACT},
            {content: correctWord[4], status: CellStatus.EXACT}
          ]};
        } else {
          const cells: Cell[] = [];
          for(let i=0; i<playerWord.length; i++) {
            let status: CellStatus = CellStatus.WRONG;
            for (let j=0; j<correctWord.length; j++) {
              if(playerWord[i] === correctWord[j]) {
                status = i === j ? CellStatus.EXACT : CellStatus.EXISTS;
                break;
              }
            }
            cells.push({content: playerWord[i], status: status});
          }
          guessResult = {cells: [
           ...cells
          ]};
        }
        resolve(guessResult)
      }, 500);
    });
  }
}
