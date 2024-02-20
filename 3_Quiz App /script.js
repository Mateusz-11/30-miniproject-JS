const questions = [
	{
		question: "Whish is the largest animal in the world?",
		answer: [
			{ text: "Shark", correct: false },
			{ text: "Blue whale", correct: true },
			{ text: "Elephant", correct: false },
			{ text: "Giraffe", correct: false },
		],
	},
	{
		question: "Whish is the smallest country in the world?",
		answer: [
			{ text: "Vatican City", correct: true },
			{ text: "Bhutan", correct: false },
			{ text: "Nepal", correct: false },
			{ text: "Shri Lanka", correct: false },
		],
	},
	{
		question: "Whish is the largest desert in the world?",
		answer: [
			{ text: "Kalahari", correct: false },
			{ text: "Gobi", correct: false },
			{ text: "Sahara", correct: false },
			{ text: "Antarctica", correct: true },
		],
	},
	{
		question: "Whish is the smallest continent in the world?",
		answer: [
			{ text: "Asia", correct: false },
			{ text: "Australia", correct: true },
			{ text: "Arctica", correct: false },
			{ text: "Africa", correct: false },
		],
	},
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
	currentQuestionIndex = 0;
	score = 0;
	nextButton.innerHTML = "Next";
	showQuestion();
}

function showQuestion() {
	let currentQuestion = questions[currentQuestionIndex];
	let questionNo = currentQuestionIndex + 1;
	questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
	currentQuestion.answer.forEach((answer) => {
		const button = document.createElement("button");
		button.innerHTML = answer.text;
		button.classList.add("btn");
		answerButton.appendChild(button);
	});
}

startQuiz();
