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

//functions definitions

function startQuiz() {

    startScreen.classList.add('hide');

    quizScreen.classList.remove('hide');

    linkToHighScores.addEventListener('click', disableClick);
    
    startTimer();

    setNextQuestion();
    
}

function startTimer() {

    timer = maxTime;

    intervalId = setInterval(function () {

        timer--;

        displayTimer();

        if (timer <= 0) {

            endQuiz();

        }

    }, 1000);

}

function displayTimer() {

    timerDisplayArea.innerHTML = timer;

}

function endQuiz() {

    clearInterval(intervalId);

    timerDisplayArea.innerHTML = '0';

    quizScreen.classList.add('hide');

    endScreen.classList.remove('hide');

    finalScoreDisplayArea.textContent = score;
 
    linkToHighScores.removeEventListener('click', disableClick);

}

function setNextQuestion() {

    resetChoices();

    if (currentQuestionIndex < quizData.length) {

        showQuestion(quizData[currentQuestionIndex]);

    } 
    else {

        endQuiz();

    }

}

function resetChoices() {

    while (choicesDisplayArea.firstChild) {

        choicesDisplayArea.removeChild(choicesDisplayArea.firstChild);

    }

}

function showQuestion(questionObject) {

    questionDisplayArea.textContent = questionObject.question;

    for(let i = 0; i < questionObject.choices.length; i++){

        const button = document.createElement("button");

        button.textContent = questionObject.choices[i];

        button.setAttribute("data-correctanswer", questionObject.correctAnswer);

        button.addEventListener("click", checkAnswer);

        choicesDisplayArea.appendChild(button);

    }

}

function checkAnswer(event) {

    const correctSound = document.getElementById("correctSound");

    const wrongSound = document.getElementById("wrongSound");

    const clickedBtn = event.target;

    if(clickedBtn.textContent === clickedBtn.dataset.correctanswer){

        score++;

        validationDisplayArea.innerHTML = "<hr><br>Correct!";

        correctSound.play();

    }
    else{

        timer -= 10;

        validationDisplayArea.innerHTML = "<hr><br>Wrong!";

        wrongSound.play();

    }

    currentQuestionIndex++;

    setNextQuestion();

}

function disableClick (event){

    event.preventDefault();

}