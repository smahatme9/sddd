const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "Berlin", "Rome", "London"],
        answer: "Paris"
    },
    {
        question: "Which planet is closest to the Sun?",
        options: ["Earth", "Venus", "Mercury", "Mars"],
        answer: "Mercury"
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "4"
    },
    {
        question: "What is 4 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "6"
    }
];

const quizContainer = document.getElementById("quiz");
const questionElem = document.getElementById("question");
const optionsElem = document.getElementById("options");
const submitBtn = document.getElementById("submitBtn");
const resultElem = document.getElementById("result");

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElem.textContent = currentQuestion.question;
    optionsElem.innerHTML = "";

    for (let i = 0; i < currentQuestion.options.length; i++) {
        const option = currentQuestion.options[i];
        const input = document.createElement("input");
        input.type = "radio";
        input.name = "option";
        input.value = option;
        input.id = "option" + (i + 1);

        const label = document.createElement("label");
        label.setAttribute("for", "option" + (i + 1));
        label.textContent = option;

        optionsElem.appendChild(input);
        optionsElem.appendChild(label);
    }
}

function checkAnswer() {
    const selectedOption = document.querySelector('input[name="option"]:checked');

    if (!selectedOption) return;

    const userAnswer = selectedOption.value;
    const currentQuestion = questions[currentQuestionIndex];

    if (userAnswer === currentQuestion.answer) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    quizContainer.style.display = "none";
    resultElem.textContent = `Your score: ${score}/${questions.length}`;
    resultElem.style.display = "block";
}

submitBtn.addEventListener("click", checkAnswer);

displayQuestion();

