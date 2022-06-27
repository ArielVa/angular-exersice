import {Question} from "./model/Question";
import {QUESTIONS_DB} from "./data/QuestionsDB";
import {Exam} from "./model/Exam";
import {ExamRunner} from "./model/ExamRunner";
import {View} from "./view-model/view";



const allQuestions = QUESTIONS_DB as unknown as Question[];

const examQuestions: Question[] = [];
while(examQuestions.length != 10) {
	const i = Math.floor(Math.random() * allQuestions.length);
	!examQuestions.includes(allQuestions[i]) ? examQuestions.push(allQuestions[i]) : undefined;
}

const examRunner: ExamRunner = new ExamRunner(new Exam(examQuestions));
const view: View = new View();


view.render(examRunner);

const inputs: HTMLInputElement[] = [];
for(let i=1; i<=4; i++) {
	inputs.push(document.getElementById("ans-input-" + i) as HTMLInputElement);
	inputs[i-1].addEventListener('click', () => {
		setTimeout(() => {
			optionClicked(i);
			inputs[i-1].checked = false;
		}, 100)
	})

}

function optionClicked(answer: number) {
	examRunner.answerNextQuestion(answer);

	view.render(examRunner);
	console.log(examRunner);
}

