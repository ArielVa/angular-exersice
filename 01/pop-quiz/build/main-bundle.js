/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ts/data/QuestionsDB.ts":
/*!************************************!*\
  !*** ./src/ts/data/QuestionsDB.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.QUESTIONS_DB = void 0;
exports.QUESTIONS_DB = [
    {
        "caption": "When was Israel founded?",
        "answers": [
            "1733",
            "1947",
            "1948",
            "1849"
        ],
        "correct": 3
    },
    {
        "caption": "6 / (2 * (1 + 2)) = ?",
        "answers": [
            "9",
            "1",
            "6",
            "12"
        ],
        "correct": 2
    },
    {
        "caption": "There are a total of X Harry Potter books?",
        "answers": [
            "6",
            "8",
            "7",
            "9"
        ],
        "correct": 3
    },
    {
        "caption": "How many states are there in the US?",
        "answers": [
            "50",
            "51",
            "52",
            "1"
        ],
        "correct": 1
    },
    {
        "caption": "Which of these countries was NOT a part of the Soviet Union?",
        "answers": [
            "Ukraine",
            "Belarus",
            "Poland",
            "Georgia"
        ],
        "correct": 3
    },
    {
        "caption": "Which flies a green, white, and orange (in that order) tricolour flag?",
        "answers": [
            "Ireland",
            "Ivory Coast",
            "Italy",
            "Iceland"
        ],
        "correct": 3
    },
    {
        "caption": "Where was the first example of paper money used?",
        "answers": [
            "China",
            "Turkey",
            "Greece",
            "Germany"
        ],
        "correct": 3
    },
    {
        "caption": "When was World of Warcraft released?",
        "answers": [
            "2002",
            "2004",
            "1994",
            "2006"
        ],
        "correct": 2
    },
    {
        "caption": "How many seasons does the tv series LOST has?",
        "answers": [
            "6",
            "5",
            "4",
            "3"
        ],
        "correct": 1
    },
    {
        "caption": "Who if the F1 (Formula 1) driver with the most wins in record?",
        "answers": [
            "Michael Schumacher",
            "Fernando Alonso",
            "Sebastian Vettel",
            "Lewis Hamilton"
        ],
        "correct": 4
    },
    {
        "caption": "In media entertainment '1984' orginally refers to a X?",
        "answers": [
            "Book",
            "Movie",
            "Play",
            "Video Game"
        ],
        "correct": 1
    },
    {
        "caption": "Who was Hudini?",
        "answers": [
            "Soccer player",
            "A magician",
            "Playwriter",
            "Director"
        ],
        "correct": 2
    },
    {
        "caption": "The eigth planet of the Milkey Way solar system is?",
        "answers": [
            "Venus",
            "Jupiter",
            "Pluto",
            "Neptune"
        ],
        "correct": 4
    },
    {
        "caption": "What is the name of the Roman god of war?",
        "answers": [
            "Zeus",
            "Mars",
            "Ra",
            "Ares"
        ],
        "correct": 2
    },
    {
        "caption": "Who is the writer for the detective series 'Sherlock Holmes'?",
        "answers": [
            "J.R.R Tolkien",
            "G.R.R Martin",
            "Arthur Conan Doyle",
            "C.K Lewis"
        ],
        "correct": 3
    },
    {
        "caption": "The Tower of Babel was first refenced in which book?",
        "answers": [
            "The Bible",
            "The New Testement",
            "The Quran",
            "The Greek Scrolls"
        ],
        "correct": 1
    },
    {
        "caption": "What date is referenced in the 1971 song Septemberby 'Earth, Wind & Fire'?",
        "answers": [
            "26th of September",
            "23rd of September",
            "24th of September",
            "21st of September"
        ],
        "correct": 4
    },
    {
        "caption": "Ringo Starr of The Beatles mainly played what instrument?",
        "answers": [
            "Bass",
            "Guitar",
            "Drums",
            "Piano"
        ],
        "correct": 3
    },
    {
        "caption": "Which of the following is NOT a primary color?",
        "answers": [
            "Blue",
            "Yellow",
            "Red",
            "Green"
        ],
        "correct": 2
    },
    {
        "caption": "In the 1971 film 'Willy Wonka the Chocolate Factory', who played Willy Wonka?",
        "answers": [
            "Shia LeBouf",
            "Gene Wilder",
            "Peter Ostrum",
            "Johnny Depp"
        ],
        "correct": 2
    },
    {
        "caption": "What Greek letter is used to signify summation?",
        "answers": [
            "Sigma",
            "Alpha",
            "Omega",
            "Delta"
        ],
        "correct": 1
    },
    {
        "caption": "Joseph Smith was the founder of what religion?",
        "answers": [
            "Christianity",
            "Buddhism",
            "Mormonism",
            "Hinduism"
        ],
        "correct": 3
    },
    {
        "caption": "What is the Capital of the United States?",
        "answers": [
            "Los Angelas, CA",
            "New York City, NY",
            "Houston, TX",
            "Washington, D.C."
        ],
        "correct": 4
    },
    {
        "caption": "Where did the pineapple plant originate?",
        "answers": [
            "South America",
            "Hawaii",
            "Europe",
            "Asia"
        ],
        "correct": 1
    }
];


/***/ }),

/***/ "./src/ts/model/Answer.ts":
/*!********************************!*\
  !*** ./src/ts/model/Answer.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Answer = void 0;
var Answer = /** @class */ (function () {
    function Answer(index, isCorrect) {
        this.index = index;
        this.isCorrect = isCorrect;
    }
    Object.defineProperty(Answer.prototype, "Index", {
        get: function () {
            return this.index;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Answer.prototype, "IsCorrect", {
        get: function () {
            return this.isCorrect;
        },
        enumerable: false,
        configurable: true
    });
    return Answer;
}());
exports.Answer = Answer;


/***/ }),

/***/ "./src/ts/model/Exam.ts":
/*!******************************!*\
  !*** ./src/ts/model/Exam.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Exam = void 0;
var Exam = /** @class */ (function () {
    function Exam(questions) {
        this.questions = questions;
    }
    Object.defineProperty(Exam.prototype, "Questions", {
        get: function () {
            return this.questions;
        },
        enumerable: false,
        configurable: true
    });
    return Exam;
}());
exports.Exam = Exam;


/***/ }),

/***/ "./src/ts/model/ExamRunner.ts":
/*!************************************!*\
  !*** ./src/ts/model/ExamRunner.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ExamRunner = void 0;
var Answer_1 = __webpack_require__(/*! ./Answer */ "./src/ts/model/Answer.ts");
var ExamRunner = /** @class */ (function () {
    function ExamRunner(exam) {
        this.exam = exam;
        this.answers = [];
        this.currentQuestionIndex = 0;
    }
    Object.defineProperty(ExamRunner.prototype, "Answers", {
        get: function () {
            return this.answers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExamRunner.prototype, "Exam", {
        get: function () {
            return this.exam;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExamRunner.prototype, "CurrentQuestion", {
        get: function () {
            return this.exam.Questions[this.currentQuestionIndex];
        },
        enumerable: false,
        configurable: true
    });
    ExamRunner.prototype.checkExamOver = function () {
        return this.currentQuestionIndex === this.exam.Questions.length;
    };
    ExamRunner.prototype.currentScore = function () {
        var s = 0.0;
        this.answers.forEach(function (ans) { return ans.IsCorrect ? s++ : s; });
        return this.answers.length > 0 ? s / this.answers.length : 0;
    };
    ExamRunner.prototype.answerNextQuestion = function (answerIndex) {
        this.answers.push(new Answer_1.Answer(answerIndex, this.exam.Questions[this.currentQuestionIndex].correct === answerIndex));
        this.currentQuestionIndex++;
    };
    return ExamRunner;
}());
exports.ExamRunner = ExamRunner;


/***/ }),

/***/ "./src/ts/view-model/view.ts":
/*!***********************************!*\
  !*** ./src/ts/view-model/view.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.View = void 0;
var View = /** @class */ (function () {
    function View() {
        this.inputs = [];
        this.labels = [];
        this.summaryQuestionCaption = [];
        this.summaryQuestionUserAnswer = [];
        this.summaryQuestionCorrectAnswer = [];
        this.form = document.getElementById('quiz-form');
        this.caption = document.getElementById('question-caption');
        for (var i = 1; i <= 4; i++) {
            this.inputs.push(document.getElementById("ans-input-" + i));
            this.labels.push(document.getElementById("ans-label-" + i));
        }
        this.examScoreText = document.getElementById('exam-score-text');
        this.score = document.getElementById('exam-score');
        for (var i = 1; i <= 10; i++) {
            this.summaryQuestionCaption.push(document.getElementById("summary-question-" + i));
            this.summaryQuestionUserAnswer.push(document.getElementById("summary-user-answer-" + i));
            this.summaryQuestionCorrectAnswer.push(document.getElementById("summary-correct-answer-" + i));
        }
    }
    View.prototype.setQuestionCaption = function (caption) {
        this.caption.innerText = caption;
    };
    View.prototype.setQuestionLabels = function (labels) {
        var _this = this;
        labels.forEach(function (label, i) {
            _this.labels[i].innerText = label;
        });
    };
    View.prototype.render = function (examRunner) {
        var _this = this;
        if (!examRunner.checkExamOver()) {
            var q = examRunner.CurrentQuestion;
            this.setQuestionCaption(q.caption);
            this.setQuestionLabels(q.answers);
        }
        else {
            this.form.style.display = 'none';
            this.examScoreText.style.display = 'inherit';
            this.score.innerText = (examRunner.currentScore() * 100).toFixed(2).toString() + '%';
            examRunner.Exam.Questions.forEach(function (q, i) {
                _this.summaryQuestionCaption[i].innerText = (i + 1).toString() + ") " + q.caption;
                _this.summaryQuestionCaption[i].style.display = 'inherit';
                _this.summaryQuestionUserAnswer[i].innerText = q.answers[examRunner.Answers[i].Index - 1];
                _this.summaryQuestionUserAnswer[i].style.display = 'inherit';
                _this.summaryQuestionCorrectAnswer[i].innerText = q.answers[q.correct - 1];
                _this.summaryQuestionCorrectAnswer[i].style.display = 'inherit';
                _this.summaryQuestionCorrectAnswer[i].style.color = 'green';
                if (q.answers[examRunner.Answers[i].Index - 1] === q.answers[q.correct - 1]) {
                    _this.summaryQuestionUserAnswer[i].style.color = 'royalblue';
                }
                else {
                    _this.summaryQuestionUserAnswer[i].style.color = 'red';
                }
            });
        }
    };
    return View;
}());
exports.View = View;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!************************!*\
  !*** ./src/ts/main.ts ***!
  \************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
var QuestionsDB_1 = __webpack_require__(/*! ./data/QuestionsDB */ "./src/ts/data/QuestionsDB.ts");
var Exam_1 = __webpack_require__(/*! ./model/Exam */ "./src/ts/model/Exam.ts");
var ExamRunner_1 = __webpack_require__(/*! ./model/ExamRunner */ "./src/ts/model/ExamRunner.ts");
var view_1 = __webpack_require__(/*! ./view-model/view */ "./src/ts/view-model/view.ts");
var allQuestions = QuestionsDB_1.QUESTIONS_DB;
var examQuestions = [];
while (examQuestions.length != 10) {
    var i = Math.floor(Math.random() * allQuestions.length);
    !examQuestions.includes(allQuestions[i]) ? examQuestions.push(allQuestions[i]) : undefined;
}
var examRunner = new ExamRunner_1.ExamRunner(new Exam_1.Exam(examQuestions));
var view = new view_1.View();
view.render(examRunner);
var inputs = [];
var _loop_1 = function (i) {
    inputs.push(document.getElementById("ans-input-" + i));
    inputs[i - 1].addEventListener('click', function () {
        setTimeout(function () {
            optionClicked(i);
            inputs[i - 1].checked = false;
        }, 100);
    });
};
for (var i = 1; i <= 4; i++) {
    _loop_1(i);
}
function optionClicked(answer) {
    examRunner.answerNextQuestion(answer);
    view.render(examRunner);
}

})();

/******/ })()
;
//# sourceMappingURL=main-bundle.js.map