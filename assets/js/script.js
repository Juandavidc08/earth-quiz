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

// Shuffle question so everytime the quiz have diferent order
let shuffleQuestions, currentQuestionIndex 

//Start and Next buttons
const startButton = document.getElementById('start');
const nextButton = document.getElementById('next');
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
 shuffleQuestions = questions.sort(() => Math.random() - .5);
 // current questoy array
 currentQuestionIndex = 0;
 questionContainer.classList.remove('hide');
 nextQuestion();
}

function nextQuestion() {
    resetState();
    showQuestion(shuffleQuestions[currentQuestionIndex]);

}

//Function to reset everything in the container back to default everytime there is a new question
function resetState(){
    nextButton.classList.add('hide');
    //loop all children for answer buttons elements
    while (answerButtonsElements.firstChild){
        answerButtonsElements.removeChild(answerButtonsElements.firstChild);
    }

}
//Show question
function showQuestion(question){
    questionElement.innerText = question.question;
    //see answers and determine qhich one is correct
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        //show the answers in the container
        button.addEventListener('click',selectAnswer);
        answerButtonsElements.appendChild(button);
    })
}

//Selected button function creates the interaction of colors dependig on answers
function selectAnswer(e){
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct)
    //check on everybutton to get the correct
    Array.from(answerButtonsElements.children).forEach(button =>{
        setStatusClass(button, button.dataset.correct)
    })
    //show again next button to continue the quiz
    nextButton.classList.remove('hide');
    }

//Set status if he answer is correct or not 
function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('incorrect');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('incorrect');
}

