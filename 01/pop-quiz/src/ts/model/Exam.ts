import {Question} from "./Question";

export class Exam{
	constructor(private questions: Question[]) {
	}

	get Questions() {
		return this.questions;
	}
}