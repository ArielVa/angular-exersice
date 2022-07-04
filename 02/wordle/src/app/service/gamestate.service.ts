import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class GameStateService {

  constructor() {
  }

  async checkIfGameIsOver(guessNum: number): Promise<boolean> {
    return guessNum === environment.maxNumOfGuesses;
  }
}
