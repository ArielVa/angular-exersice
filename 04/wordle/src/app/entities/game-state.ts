import {Board} from "./board";
import {CellStatus} from "./cell-status";

export interface GameState {
  readonly board: Board;
  readonly isGameOver: boolean;
  readonly hasPlayerWon: boolean;
}

export function initialGameState(): GameState {
  return {
    board: {
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
      })),
    },
    isGameOver: false,
    hasPlayerWon: false
  }
}
