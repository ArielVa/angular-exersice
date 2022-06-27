export class View2 {
	private readonly inputGuess: HTMLInputElement
	private readonly inputGuessCells: HTMLInputElement[] = [];
	public readonly btnOK: HTMLButtonElement;
	private readonly btnReset: HTMLButtonElement;

	private readonly gameOverText: HTMLHeadingElement;
	private readonly gameOverStatus: HTMLSpanElement;

	constructor(cbf: (guess: string) => void) {
		this.inputGuess =  document.getElementById("input-guess") as HTMLInputElement;

		for(let i=1; i<7; i++) {
			for(let j=1; j<6; j++) {
				this.inputGuessCells.push(document.getElementById("input_" + i + "_" + j) as HTMLInputElement);
			}
		}

		this.btnOK = document.getElementById("button-ok") as HTMLButtonElement;
		this.btnReset = document.getElementById("button-reset") as HTMLButtonElement;

		this.gameOverText = document.getElementById("game-over") as HTMLHeadingElement;
		this.gameOverStatus = document.getElementById("game-over-status") as HTMLSpanElement;

		this.btnOK.addEventListener('click', cbf.bind(this, this.inputGuess.value));



	}
}