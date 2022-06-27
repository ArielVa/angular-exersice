export class Answer {
	constructor(private index: number, private isBoolean: boolean) {
	}

	get Index() {
		return this.index;
	}

	get IsCorrect() {
		return this.isBoolean;
	}
}