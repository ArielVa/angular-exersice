import {Injectable} from "@angular/core";
import {Cell} from "../entities/Cell";
import {environment} from "../../environments/environment";
import { CellStatus } from "../enums/CellStatus";
import { Guess } from "../entities/Guess";
import { GameStateService } from "./gamestate.service";
import { Board } from "../entities/Board";

@Injectable({
  providedIn: "root"
})
export class PlayerStateService {

  constructor() {
  }

  async checkIfPlayerWon(board: Board): Promise<boolean> {
    return !(board.guesses[board.currentGuess].cells.some(cell => cell.status !== CellStatus.EXACT));
  }
}
