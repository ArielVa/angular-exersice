import { CellStatus } from "../enums/CellStatus";

export interface Cell {
  status: CellStatus,
  content: string
}
