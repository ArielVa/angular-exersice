import {WORDS} from "./words";
import {Cell, CellStatus} from "./cell";

export class Game {

	private readonly NUM_ROWS = 6;
	private readonly WORD_LENGTH = 5;

	private cells: Cell[] = [];
	private currentRow: number = 0;

	private wordToGuess!: string;

	constructor() {
		this.reset();
		for(let i=0; i<30; i++) {
			this.cells.push(new Cell());
		}
	}

	addGuess(word: string): void {
		console.log("herererer")
		if(word === this.wordToGuess) {
			for(let i=0; i<word.length; i++) {
				this.cells[(this.currentRow * this.WORD_LENGTH) + i] = new Cell(word[i], CellStatus.EXACT);
			}
		} else {
			for(let i=0; i<word.length; i++) {
				let cellStatusToAdd: CellStatus = CellStatus.WRONG;
				for(let j=0; j<this.wordToGuess.length; j++) {
					if(word[i] === this.wordToGuess[j]) {
						cellStatusToAdd = i === j ?  CellStatus.EXACT : cellStatusToAdd = CellStatus.EXISTS;
					}
				}
				this.cells[(this.currentRow * this.WORD_LENGTH) +i] = new Cell(word[i], cellStatusToAdd);
			}
		}
		this.currentRow++;
	}

	reset() {
		this.currentRow = 0;
		this.cells.forEach(cell => {
			cell.CellStatus = CellStatus.EMPTY;
			cell.CellContent = '';
		})
		this.wordToGuess = WORDS[Math.floor(Math.random() * WORDS.length)];
	}

	isGameOver(): boolean {
		return this.currentRow === this.NUM_ROWS || this.hasPlayerWon();
	}

	hasPlayerWon() : boolean {
		if(this.currentRow > this.NUM_ROWS || this.currentRow === 0) {
			return false;
		}

		for(let i=0; i<this.WORD_LENGTH; i++) {
			if(this.cells[((this.currentRow - 1) * this.WORD_LENGTH) + i].CellStatus !== CellStatus.EXACT) {
				return false;
			}
		}

		return true;
	}

	get NumOfFilledRows(): number {
		return this.currentRow;
	}

	get NumOfRows(): number {
		return this.NUM_ROWS;
	}

	get WordLength(): number {
		return this.WORD_LENGTH;
	}

	get Cells(): Cell[] {
		return this.cells;
	}
}