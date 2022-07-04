import {Injectable} from '@angular/core';
import {WORDS} from "../utils/words";
import {Cell, CellStatus} from "../model/cell";
import {environment} from "../../environments/environment";

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
            cells.push(new Cell(s2[i], CellStatus.EXACT));
          }
        } else {
          for(let i=0; i < s1.length; i++) {
            let cellStatus: CellStatus = CellStatus.WRONG;
            for(let j=0; j < s2.length; j++) {
              if(s1[i] === s2[j]) {
                cellStatus = i === j ? CellStatus.EXACT : CellStatus.EXISTS;
              }
            }
            cells.push(new Cell(s1[i], cellStatus));
          }
        }
        resolve(cells);
      }, 500)
    })
  }
}
