export class Question {
	constructor(private caption: string, private answers: string[], private correct: number) {
	}

	get Caption(): string {
		return this.caption;
	}

	get Answers(): string[] {
		return this.answers
	}

	get CorrectAnswerIndex(): number {
		return this.correct;
	}
}