const clrBtn = document.getElementById('clear');

function retrieveScores(){

    const scores = JSON.parse(localStorage.getItem('scores')) || [];

    return scores;

}

function displayScores (){
    
    const scoresDisplayArea = document.getElementById('highscores');

    scoresDisplayArea.innerHTML = "";

    const scores = retrieveScores();

    for (let i = 0; i < scores.length; i++) {

        const scoreItem = document.createElement("li");

        scoreItem.textContent = `${scores[i].initials}: ${scores[i].score}`;

        scoresDisplayArea.appendChild(scoreItem);

    }

}

displayScores();

clrBtn.addEventListener('click',function (){

    localStorage.clear();

    displayScores();

});