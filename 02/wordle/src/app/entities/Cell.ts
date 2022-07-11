import { CellStatus } from "../enums/CellStatus";

export interface Cell {
  readonly status: CellStatus,
  readonly content: string
}
