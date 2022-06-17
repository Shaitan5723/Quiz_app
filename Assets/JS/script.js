/* Array containing the questions for the quiz*/
const quizQ = [
  {
    question: 'Which of the following languages functions primarily in a web browser?',
    a: 'Javascript',
    b: 'Python',
    c: 'Java',
    d: 'Ruby',
    answer: 'A',
  },
  {
    question: 'What does NaN stand for in Javascript?',
    a: 'Not Applicable',
    b: 'Not a Node',
    c: 'Not a Number',
    d: 'Insert New Line',
    answer: 'C',
  },
  {
    question: 'Which of the following is not a Javascript data type?',
    a: 'Boolean',
    b: 'Integer',
    c: 'Symbol',
    d: 'String',
    answer: 'B',
  },
  {
    question: 'In Javascript, what is a block of statement?',
    a: 'Conditional block',
    b: 'Block that combines a number of statements into a single compound statement',
    c: 'Both conditional block and a single statement',
    d: 'Block that contains a single statement',
    answer: 'B',
  },
  {
    question: 'The "function" and "var" are known as:',
    a: 'Keywords',
    b: 'Data types',
    c: 'Declaration statements',
    d: 'Prototypes',
    answer: 'C',
  },
  {
    question: 'Which of the following variables takes precedence over the others if the names are the same?',
    a: 'Global variable',
    b: 'The local element',
    c: 'Both of the above',
    d: 'None of the above',
    answer: 'B',
  },
  {
    question: 'Which one of the following is the corect way for calling the Javascript code?',
    a: 'Preprocessor',
    b: 'Triggering Event',
    c: 'RMI',
    d: 'Fuction/Method',
    answer: 'D',
  },
  {
    question: "In Javascript, which one of the following is not considered an error?",
    a: 'Syntax error',
    b: 'Missing of semicolons',
    c: 'Division by zero',
    d: 'Missing of bracket',
    answer: 'C',
  },
  {
    question: "Which of the following given functions of the Number Object formats a number with a different number of digits to the right of the decimal?",
    a: 'toExponential()',
    b: 'toFixed()',
    c: 'toPrecision()',
    d: 'toLocaleString()',
    answer: 'B',
  },
  {question: "Which of the following number object functions returns the value of the number?",
    a: 'toString()',
    b: 'valueOf()',
    c: 'toPrecision()',
    d: 'toLocaleString()',
    answer: 'B',
  },
]
const startBtn = document.getElementById('start_btn')
const instructions = document.getElementById('instructions')
const quizContainerEl = document.getElementById('quiz_container')
const questions = document.getElementById('questions')
const answerEls = document.querySelectorAll('.answer')
const A = document.getElementById('A')
const B = document.getElementById('B')
const C = document.getElementById('C')
const D = document.getElementById('D')

/* starts the quiz and timer after the start button is clicked*/
startBtn.addEventListener('click', startGame)
startBtn.addEventListener('click', startTimer)

/* sets the current question and score to 0*/
let currentQ = 0
let score = 0

/* variables and function for the timer*/
var total_seconds = 60*5;
var c_minutes = parseInt(total_seconds/60);
var c_seconds = parseInt(total_seconds%60);

function startTimer() {
  setInterval(function (){
    document.getElementById("timer").innerHTML
    ='Time Left: ' + c_minutes + ' minutes ' + c_seconds + ' seconds ';
    if(total_seconds <=0){
      submitAnswer();
    } else {
     total_seconds = total_seconds -1;
      c_minutes = parseInt(total_seconds/60);
      c_seconds = parseInt(total_seconds%60);

    }
  }, 1000);
}

/* Starts the game*/
function startGame(){
  instructions.classList.add('hidden');
  quizContainerEl.classList.remove('hidden');
  currentQ = 0
  score = 0
  nextQuestion();
}

/* Displays the next question*/
function nextQuestion(){
  const quizData = quizQ[currentQ];
  questions.innerText = quizData.question;
  A.innerText = quizData.a;
  B.innerText = quizData.b;
  C.innerText = quizData.c;
  D.innerText = quizData.d;

 /*answerEls.addEventListener('click', selectAnswer)*/

  let answer = toString(selectAnswer());
  if(quizQ[currentQ].answer == answer && currentQ < 9){
    score++;
    currentQ++;
    nextQuestion()

  } else if (quizQ[currentQ].answer !== answer && currentQ < 9){
    total_seconds - 10;
    currentQ++;
    nextQuestion()

  } else if (currentQ > 9) { 
    localStorage.setItem('mostRecentScore', score)
    submitAnswer()
  }

}
/* Receives user input as a choice*/
function selectAnswer() {
 /* const selectedBtn = e.target
  const correct = selectedBtn.quizData.answer*/
  selectAnswer.preventDefault();
   
  A.addEventListener('click', selectA)
  B.addEventListener('click', selectB)
  C.addEventListener('click', selectC)
  D.addEventListener('click', selectD)

  if (selectA == true){
    return 'A'
  }
  else if (selectB == true){
    return 'B'
  }
  else if (selectC == true){
    return 'C'
  }
  else if (selectD == true){
    return 'D'
  } else {
    selectAnswer;
  }

}

function selectA() {
  return true;
}
function selectB() {
  return true;
}
function selectC() {
  return true;
}
function selectD() {
  return true;
}

/*The functions and variables below are used for the scoreboard/leaderboard*/
const mostRecentScore = localStorage.getItem('mostRecentScore')
const user = document.getElementById('user')
const saveScore = document.getElementById('saveScore')
const finalScore = document.getElementById('finalScore')
const scoreList = document.getElementById('scoreList')
const viewScoreBoard = document.getElementById('highScores')
const scoreBoard = document.getElementById('scoreBoard')
finalScore.innerText = mostRecentScore
const allScores = JSON.parse(localStorage.getItem('score'))
const MAX_SCORES = 5

viewScoreBoard.addEventListener('click', submitAnswer)

const scores = JSON.parse(localStorage.getItem('allScores'))

/*hides both the instruction and quiz containers and displays the scoreboard container*/
function submitAnswer(){
  quizContainerEl.classList.add('hidden');
  instructions.classList.add('hidden');
  scoreBoard.classList.remove('hidden');
}


user.addEventListener("keyup", () => {
});

/*Saves user's name and score*/
saveHighScore = e => {
  e.preventDefault();

  const score = {
    score: mostRecentScore,
    name: user.value
  };
  allScores.push(score);
  localStorage.setItem('allScores', JSON.stringify([]));

}

/*adds list of strings from local storage to leaderboard*/
scoreList.innerHTML = allScores.map (score => {
  return '<li> ${score.name} - ${score.score} </li>';
})
.join("");
