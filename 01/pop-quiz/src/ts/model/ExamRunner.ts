import {Exam} from "./Exam";
import {Answer} from "./Answer";

export class ExamRunner {

	private answers:Answer[] = [];
	private currentQuestionIndex: number = 0

	constructor(private exam: Exam) {
	}

	get Answers(): Answer[] {
		return this.answers;
	}

	get Exam(): Exam {
		return this.exam;
	}

	get CurrentQuestion() {
		return this.exam.Questions[this.currentQuestionIndex];
	}

	checkExamOver() {
		return this.currentQuestionIndex === this.exam.Questions.length;
	}

	currentScore(): number {
		let s = 0.0;
		this.answers.forEach(ans => ans.IsCorrect ? s++ : s);
		return this.answers.length > 0 ? s / this.answers.length : 0;
	}

	answerNextQuestion(answerIndex: number) {
		this.answers.push(new Answer(answerIndex,this.exam.Questions[this.currentQuestionIndex].correct === answerIndex));
		this.currentQuestionIndex++
	}



}