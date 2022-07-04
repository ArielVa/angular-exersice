import {Injectable} from "@angular/core";
import {Cell, CellStatus} from "../model/cell";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: "root"
})

export class PlayerStateService {

  constructor() {
  }

  async checkIfPlayerWon(guessNum: number, cells: Cell[]): Promise<boolean> {
    if(guessNum > environment.maxNumOfGuesses) {
      return false;
    }

    for(let i=0; i< environment.wordLength; i++) {
      if(cells[(guessNum * environment.wordLength) + i].CellStatus !== CellStatus.EXACT) {
        return false;
      }
    }

    return true;
  }
}
