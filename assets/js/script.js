

// Shuffle question so everytime the quiz have diferent order
let shuffleQuestions, currentQuestionIndex 

//Start and Next buttons
const startButton = document.getElementById('start');
const questionContainer = document.getElementById('question-cont');

const questionElement = document.getElementById('question');
const answerButtonsElements = document.getElementById('answer-btns');

startButton.addEventListener('click', startGame);


// function basics structure of the quiz

function startGame() {

// console log to check if its ready
console.log('start game');

// change the start buton to questions
 startButton.classList.add('hide');
 // Sort all questions functions randomly with a completly ramdom array thanks to mathrandom method -.5
 shuffleQuestions = questions.sort(() => Math.random() - 1);
 // current questoy array
 currentQuestionIndex = 0;
 questionContainer.classList.remove('hide');
 nextQuestion();
}

function nextQuestion() {
    showQuestion(shuffleQuestions[currentQuestionIndex]);

}

//Show question
function showQuestion(question){
    questionElement.innerText = question.question;
    //see answers and determine qhich one is correct
    question.answer.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        //show the answers in the container
        button.addEventListener('click',selectAnswer);
        answerButtonsElements.appendChild(button);
    })
}

function selectAnswer(){

}

// questions of the quiz
const questions = [
    {
        question: 'How old is the Earth?',
        answers: [
            { text: '4.54 billion years old', correct: true },
            { text: '10 billion years old', correct: false },
            { text: '1.71 billion years old', correct: false },
            { text: '3.96 billion years old', correct: false }
        ]
    }
];