import {Exam} from "../model/Exam";
import {ExamRunner} from "../model/ExamRunner";
import {Question} from "../model/Question";

export class View {

	private caption: HTMLHeadingElement;
	private inputs: HTMLInputElement[] = [];
	private labels: HTMLLabelElement[] = [];
	private form: HTMLFormElement;
	private examScoreText: HTMLHeadingElement;
	private score: HTMLSpanElement;

	constructor() {
		this.form = document.getElementById('quiz-form')  as HTMLFormElement;
		this.caption = document.getElementById('question-caption') as HTMLHeadingElement
		for(let i=1; i<=4; i++) {
			this.inputs.push(document.getElementById("ans-input-" + i) as HTMLInputElement);
			this.labels.push(document.getElementById("ans-label-" + i) as HTMLLabelElement);
		}
		this.examScoreText = document.getElementById('exam-score-text') as HTMLHeadingElement;
		this.score = document.getElementById('exam-score') as HTMLSpanElement;
	}

	setQuestionCaption(caption: string) {
		this.caption.innerText = caption;
	}

	setQuestionLabels(labels: string[]) {
		labels.forEach((label, i) => {
			this.labels[i].innerText = label;
		})
	}

	render(examRunner: ExamRunner) {
		if(!examRunner.checkExamOver()) {
			const q: Question = examRunner.CurrentQuestion
			this.setQuestionCaption(q.caption);
			this.setQuestionLabels(q.answers);
		} else {
			this.form.style.display = 'none';
			this.examScoreText.style.display = 'inherit';
			this.score.innerText = (examRunner.currentScore() * 100).toFixed(2).toString() + '%';
		}
	}
}