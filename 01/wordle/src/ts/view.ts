import {Game} from "./game";
import {CellStatus} from "./cell";

export class View {
	private readonly inputGuess: HTMLInputElement
	private readonly inputGuessCells: HTMLInputElement[] = [];
	private readonly btnOK: HTMLButtonElement;
	private readonly btnReset: HTMLButtonElement;

	private readonly gameOverText: HTMLHeadingElement;
	private readonly gameOverStatus: HTMLSpanElement;

	constructor(private game: Game) {
		this.inputGuess =  document.getElementById("input-guess") as HTMLInputElement;

		for(let i=1; i<7; i++) {
			for(let j=1; j<6; j++) {
				this.inputGuessCells.push(document.getElementById("input_" + i + "_" + j) as HTMLInputElement);
			}
		}

		this.btnOK = document.getElementById("button-ok") as HTMLButtonElement;
		this.btnReset = document.getElementById("button-reset") as HTMLButtonElement;

		this.gameOverText = document.getElementById("game-over") as HTMLHeadingElement
		this.gameOverStatus = document.getElementById("game-over-status") as HTMLSpanElement


		this.btnOK.addEventListener('click', () => {
			if(!this.game.isGameOver()) {
				this.game.addGuess(this.inputGuess.value);
				this.renderGame(game)
				if(this.game.isGameOver()) {
					this.gameOverText.style.display = "inherit";
					this.btnReset.style.display = "inherit";
					this.gameOverStatus.innerText = this.game.hasPlayerWon() ? "YOU WON" : "YOU LOST";
				}
			}
		});

		this.btnReset.addEventListener('click', () => {
			this.game.reset();
			this.gameOverText.style.display = "none";
			this.btnReset.style.display = "none";
			this.renderGame(game);
			console.log(this.game);
		})
	}



	private renderGame(game: Game): void {
		// TODO - Render one specific row of entire game?
		// const start = (game.NumOfFilledRows - 1) * game.WordLength;
		// const end = start + game.WordLength;
		// console.log(start, end)
		// for (let i=start; i<end; i++) {
		// 	const cellStatus = game.Cells[i].CellStatus;
		// 	this.inputGuessCells[i].value = game.Cells[i].CellContent;
		// 	switch (cellStatus) {
		// 		case CellStatus.WRONG:
		// 			this.inputGuessCells[i].style.color = "#ff0707"
		// 			break;
		// 		case CellStatus.EXISTS:
		// 			this.inputGuessCells[i].style.color = "#0ea0f1"
		// 			break;
		// 		case CellStatus.EXACT:
		// 			this.inputGuessCells[i].style.color = "#28c913"
		// 			break;
		// 		default:
		// 			break;
		// 	}
		//
		// }
		for (let i=0; i<this.inputGuessCells.length; i++) {
			this.inputGuessCells[i].value = game.Cells[i].CellContent;
			switch (game.Cells[i].CellStatus) {
				case CellStatus.WRONG:
					this.inputGuessCells[i].style.color = "#ff0707"
					break;
				case CellStatus.EXISTS:
					this.inputGuessCells[i].style.color = "#0ea0f1"
					break;
				case CellStatus.EXACT:
					this.inputGuessCells[i].style.color = "#28c913"
					break;
				default:
					break;
			}

		}
	}
}