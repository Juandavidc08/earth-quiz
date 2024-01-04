// main variables of the quiz

const startButton = document.getElementById('start')
const questionContainer = document.getElementById('question-cont');

startButton.addEventListener('click', startGame);


// function basics structure of the quiz

function startGame() {

// console log to check if its ready
console.log('start game');

// change the start buton to questions
 startButton.classList.add('hide');
 questionContainer.classList.remove('hide');
}

function nextQuestion() {

}

function selectAnswer(){

}