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
		// TODO - SAY if the exam is over
		return this.currentQuestionIndex == this.exam.Questions.length;
	}


	currentScore(): number {
		// TODO - return percentage of correct answers;
		let s = 0.0;
		this.answers.forEach(ans => ans.IsCorrect ? s++ : s);
		if(this.answers.length > 0) console.log(s, this.answers[0], this.answers[0].IsCorrect)

		return this.answers.length > 0 ? s / this.answers.length : 0;
	}

	answerNextQuestion(answerIndex: number) {
		// TODO - check if current answer is correct, append to answers list
		this.answers.push(new Answer(answerIndex,
			this.exam.Questions[this.currentQuestionIndex].correct === answerIndex));
		this.currentQuestionIndex++
	}



}