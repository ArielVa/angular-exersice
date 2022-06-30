import {ExamRunner} from "../model/ExamRunner";
import {Question} from "../model/Question";

export class View {

	private caption: HTMLHeadingElement;
	private inputs: HTMLInputElement[] = [];
	private labels: HTMLLabelElement[] = [];
	private form: HTMLFormElement;
	private examScoreText: HTMLHeadingElement;
	private score: HTMLSpanElement;
	private summaryQuestionCaption: HTMLHeadingElement[] = [];
	private summaryQuestionUserAnswer: HTMLHeadingElement[] = [];
	private summaryQuestionCorrectAnswer: HTMLHeadingElement[] = [];
	constructor() {
		this.form = document.getElementById('quiz-form')  as HTMLFormElement;
		this.caption = document.getElementById('question-caption') as HTMLHeadingElement
		for(let i=1; i<=4; i++) {
			this.inputs.push(document.getElementById("ans-input-" + i) as HTMLInputElement);
			this.labels.push(document.getElementById("ans-label-" + i) as HTMLLabelElement);
		}
		this.examScoreText = document.getElementById('exam-score-text') as HTMLHeadingElement;
		this.score = document.getElementById('exam-score') as HTMLSpanElement;

		for(let i=1; i<=10; i++) {
			this.summaryQuestionCaption.push(document.getElementById("summary-question-" + i) as HTMLHeadingElement);
			this.summaryQuestionUserAnswer.push(document.getElementById("summary-user-answer-" + i) as HTMLHeadingElement);
			this.summaryQuestionCorrectAnswer.push(document.getElementById("summary-correct-answer-" + i) as HTMLHeadingElement);
		}
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

			examRunner.Exam.Questions.forEach((q, i) => {
				this.summaryQuestionCaption[i].innerText = (i+1).toString() + ") " + q.caption;
				this.summaryQuestionCaption[i].style.display = 'inherit'

				this.summaryQuestionUserAnswer[i].innerText = q.answers[examRunner.Answers[i].Index-1];
				this.summaryQuestionUserAnswer[i].style.display = 'inherit'

				this.summaryQuestionCorrectAnswer[i].innerText = q.answers[q.correct-1];
				this.summaryQuestionCorrectAnswer[i].style.display = 'inherit'
				this.summaryQuestionCorrectAnswer[i].style.color = 'green'

				if(q.answers[examRunner.Answers[i].Index-1] === q.answers[q.correct-1]) {
					this.summaryQuestionUserAnswer[i].style.color = 'royalblue'
				} else {
					this.summaryQuestionUserAnswer[i].style.color = 'red'
				}
			});
		}
	}
}