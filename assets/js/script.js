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
    },
{
    question: 'Which year the Earth Day was insituted?',
    answers: [
        { text: '1987', correct: false },
        { text: '1997', correct: false },
        { text: '1970', correct: true },
        { text: '1940', correct: false }
    ]
},
{
    question: 'Which is the largest continent?',
    answers: [
        { text: 'Asia', correct: true },
        { text: 'Africa', correct: false },
        { text: 'Europe', correct: false },
        { text: 'North-America', correct: false }
    ]
},
{
    question: 'Largest hot desert of the Earth?',
    answers: [
        { text: 'Patagonia', correct: false },
        { text: 'Sahara', correct: true },
        { text: 'Gobi', correct: false },
        { text: 'kalahari', correct: false }
    ]
},
{
    question: 'Biggest rainforest on Earth?',
    answers: [
        { text: 'Congo Rainforest', correct: false },
        { text: 'Australiasian Realm', correct: false },
        { text: 'Sundaland', correct: false },
        { text: 'Amazon Rainforest', correct: true }
    ]
},
{
    question: 'Which one is the biggest animal?',
    answers: [
        { text: 'Antarctic blue whales ', correct: true },
        { text: 'African Elephant', correct: false },
        { text: 'Colossal Squid', correct: false },
        { text: 'Whale Shark', correct: false }
    ]
}];

// Shuffle question so everytime the quiz have diferent order
let shuffleQuestions, currentQuestionIndex 

//Main variables 
const startButton = document.getElementById('start');
const nextButton = document.getElementById('next');
const questionContainer = document.getElementById('question-cont');
let correctAnswers = 0;
let incorrectAnswers= 0;
const correctElement = document.getElementById('score');
const incorrectElement = document.getElementById ('incorrect');

const questionElement = document.getElementById('question');
const answerButtonsElements = document.getElementById('answer-btns');

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () =>{
    currentQuestionIndex++;
    nextQuestion();
})


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

 //reset score()
 resetScore();

}

function nextQuestion() {
    resetState();
    showQuestion(shuffleQuestions[currentQuestionIndex]);

}
//Reset game function
function restarGame(){
    startButton.innerHTML ='Start';
    startButton.classList.remove('hide');
    resetScore();
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
// increment score depending on answer
    if(correct) {
        correctAnswers++;
    } else {
        incorrectAnswers++;
    }

    //update the score
    correctElement.textContent = correctAnswers;
    incorrectElement.textContent = incorrectAnswers;


    setStatusClass(document.body, correct);

    //check on everybutton to get the correct
    Array.from(answerButtonsElements.children).forEach(button =>{
        setStatusClass(button, button.dataset.correct)
    })
    //Check if there are anymore questions
    if(shuffleQuestions.length > currentQuestionIndex + 1){
    //show again next button to continue the quiz
    nextButton.classList.remove('hide');
    } else {
        //restart button if the quiz is finish
        startButton.innerHTML = 'Restart';
        startButton.classList.remove('hide');
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

}

function resetScore(){
    correctAnswers=0;
    incorrectAnswers=0;
    correctElement.textContent= correctAnswers;
    incorrectElement.textContent = incorrectAnswers;
    document.body.classList.remove('correct', 'incorrect');
}