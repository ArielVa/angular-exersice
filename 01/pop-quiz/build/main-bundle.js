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
        "caption": "There are a total of X seasons of the TV show LOST",
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

/***/ "./src/ts/model/Question.ts":
/*!**********************************!*\
  !*** ./src/ts/model/Question.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Question = void 0;
var Question = /** @class */ (function () {
    function Question(caption, answers, correct) {
        this.caption = caption;
        this.answers = answers;
        this.correct = correct;
    }
    Object.defineProperty(Question.prototype, "Caption", {
        get: function () {
            return this.caption;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "Answers", {
        get: function () {
            return this.answers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "CorrectAnswerIndex", {
        get: function () {
            return this.correct;
        },
        enumerable: false,
        configurable: true
    });
    return Question;
}());
exports.Question = Question;


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
var Question_1 = __webpack_require__(/*! ./model/Question */ "./src/ts/model/Question.ts");
var QuestionsDB_1 = __webpack_require__(/*! ./data/QuestionsDB */ "./src/ts/data/QuestionsDB.ts");
console.log('Hello World');
var label = document.getElementById("ans-label-2");
label.innerText = "kekw";
var question = new Question_1.Question("When was Israel founded?", ["1733", "1947", "1948", "1849"], 3);
var q2 = new Question_1.Question("6 / (2 * (1 + 2)) = ?", ["9", "1", "6", "12"], 2);
console.log(JSON.stringify([question, q2]));
console.log(QuestionsDB_1.QUESTIONS_DB);

})();

/******/ })()
;
//# sourceMappingURL=main-bundle.js.map