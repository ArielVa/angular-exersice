export enum CellStatus {
	EMPTY,
	WRONG,
	EXISTS,
	EXACT
}

export class Cell {

	constructor(private content: string = '', private cellStatus: CellStatus = CellStatus.EMPTY) {
	}

	set CellStatus(status: CellStatus) {
		this.cellStatus = status;
	}
	get CellStatus(): CellStatus {
		return this.cellStatus;
	}


	set CellContent(str: string) {
		this.content = str;
	}

	get CellContent(): string {
		return this.content;
	}
}