// questions of the quiz
const questions = [
    {
    question: 'How old is the Earth?'
    answers: [
        { text: '4.54 billion years old', correct : true },
        { text: '10 billion years old', correct : false },
        { text: '1.71 billion years old', correct : false },
        {text: '3.96 billion years old', correct: false}
    ]
    }
]

// Shuffle question so everytime the quiz have diferent order
const shuffleQuestions, currentQuestionIndex 

//Start and Next buttons
const startButton = document.getElementById('start')
const questionContainer = document.getElementById('question-cont');

startButton.addEventListener('click', startGame);


// function basics structure of the quiz

function startGame() {

// console log to check if its ready
console.log('start game');

// change the start buton to questions
 startButton.classList.add('hide');
 // Sort all questions functions randomly with a completly ramdom array thanks to mathrandom method -.5
 shuffleQuestions = questions.sort(() => Math.random() - 1)
 // current questoy array
 currentQuestionIndex = 0;
 questionContainer.classList.remove('hide');
 nextQuestion();
}

function nextQuestion() {
    showQuestion(shuffleQuestions[currentQuestionIndex]);

}


function selectAnswer(){

}