export class Question {

	constructor(public caption: string, public answers: string[], public correct: number) {

	}

	get Caption() {
		return this.caption;
	}

	get Answers() {
		return this.answers
	}

	get CorrectAnswerIndex() {
		return this.correct;
	}
}