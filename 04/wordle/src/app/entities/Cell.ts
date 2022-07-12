import { CellStatus } from "./CellStatus";

export interface Cell {
  readonly status: CellStatus,
  readonly content: string
}
