//references to index.html elements responsible for visual aspect of the game

const startScreen = document.getElementById("start-screen");

    const linkToHighScores = document.querySelector(".scores");

    const timerBox = document.querySelector(".timer")

    const startBtn = document.getElementById("start");

    const quitBtn = document.getElementById("quit");

const quizScreen = document.getElementById("questions");

    const questionDisplayArea = document.getElementById("question-title");

    const choicesDisplayArea = document.getElementById("choices");

    const timerDisplayArea = document.getElementById("time");

    const validationDisplayArea = document.getElementById("validation");


const endScreen = document.getElementById("end-screen");

    const finalScoreDisplayArea = document.getElementById("final-score");

    const initialsInputArea = document.getElementById("initials");

    const submitBtn = document.getElementById("submit");

    const cancelBtn = document.getElementById("cancel");

    const feedbackDisplayArea = document.getElementById("feedback");

const gameOverScreen = document.getElementById("gameOver-screen");

//variables and constants storing actual numerical values responsible for controlling game logic

let currentQuestionIndex = 0;

let timer;

const maxTime = 61; 

let initials = "";

let score = 0;
