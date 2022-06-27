export class Answer {
	constructor(private index: number, private isCorrect: boolean) {
	}

	get Index() {
		return this.index;
	}

	get IsCorrect() {
		return this.isCorrect;
	}
}