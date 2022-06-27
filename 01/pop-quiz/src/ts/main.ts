import {Question} from "./model/Question";
import {QUESTIONS_DB} from "./data/QuestionsDB";


console.log('Hello World');

const label = document.getElementById("ans-label-2") as HTMLInputElement;
label.innerText ="kekw"


const question = new Question("When was Israel founded?", ["1733", "1947", "1948", "1849"], 3)
const q2 = new Question("6 / (2 * (1 + 2)) = ?", ["9", "1", "6", "12"], 2);
console.log(JSON.stringify([question, q2]))
console.log(QUESTIONS_DB as unknown as Question[])