import {Exam} from "./Exam";
import {Answer} from "./Answer";

export class ExamRunner {

	private answers:Answer[] = [];

	constructor(private exam: Exam) {
	}

	currentQuestion() {
		// TODO - Say what the current question is - return index or question ?
	}

	checkExamOver() {
		// TODO - SAY if the exam is over
	}

	get Answers(): Answer[] {
		return this.answers;
	}

	currentScore(): number {
		// TODO - return percentage of correct answers;
		let s = 0.0;
		this.answers.forEach(ans => s = ans.IsCorrect ? s++ : s);
		return s / this.answers.length;
	}

	answerNextQuestion(answerIndex: number) {
		// TODO - check if current answer is correct, append to answers list

	}



}