const quizQ = [
  {
    question: 'Which of the following languages functions primarily in a web browser?',
    a: 'Javascript',
    b: 'Python',
    c: 'Java',
    d: 'Ruby',
    answer: 'Javascript'
  },
  {
    question: 'What does NaN stand for in Javascript?',
    a: 'Not Applicable',
    b: 'Not a Node',
    c: 'Not a Number',
    d: 'Insert New Line',
    answer: 'Not a Number'
  },
  {
    question: 'Which of the following is not a Javascript data type?',
    a: 'Boolean',
    b: 'Integer',
    c: 'Symbol',
    d: 'String',
    answer: 'Integer'
  },
  {
    question: 'In Javascript, what is a block of statement?',
    a: 'Conditional block',
    b: 'Block that combines a number of statements into a single compound statement',
    c: 'Both conditional block and a single statement',
    d: 'Block that contains a single statement',
    answer: 'Block that combines a number of statements into a single compound statement'
  },
  {
    question: 'The "function" and "var" are known as:',
    a: 'Keywords',
    b: 'Data types',
    c: 'Declaration statements',
    d: 'Prototypes',
    answer: 'Declaration statements'
  },
  {
    question: 'Which of the following variables takes precedence over the others if the names are the same?',
    a: 'Global variable',
    b: 'The local element',
    c: 'Both of the above',
    d: 'None of the above',
    answer: 'The local element'
  },
  {
    question: 'Which one of the following is the corect way for calling the Javascript code?',
    a: 'Preprocessor',
    b: 'Triggering Event',
    c: 'RMI',
    d: 'Fuction/Method',
    answer: 'Fuction/Method'
  },
  {
    question: "In Javascript, which one of the following is not considered an error?",
    a: 'Syntax error',
    b: 'Missing of semicolons',
    c: 'Division by zero',
    d: 'Missing of bracket',
    answer: 'Division by zero'
  },
  {
    question: "Which of the following given functions of the Number Object formats a number with a different number of digits to the right of the decimal?",
    a: 'toExponential()',
    b: 'toFixed()',
    c: 'toPrecision()',
    d: 'toLocaleString()',
    answer: 'toFixed()'
  },
  {question: "Which of the following number object functions returns the value of the number?",
    a: 'toString()',
    b: 'valueOf()',
    c: 'toPrecision()',
    d: 'toLocaleString()',
    answer: 'valueOf()'
  },
]
const startBtn = document.getElementById('start_btn')
const instructions = document.getElementById('instructions')
const quizContainerEl = document.getElementById('quiz_container')
const questions = document.getElementById('questions')
const answerEls = document.querySelectorAll('.answer')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')

startBtn.addEventListener('click', startGame)
startBtn.addEventListener('click', startTimer)

let currentQ = 0
let score = 0



var total_seconds = 60*2;
var c_minutes = parseInt(total_seconds/60);
var c_seconds = parseInt(total_seconds%60);

function startTimer() {
  setInterval(function (){
    document.getElementById("timer").innerHTML
    ='Time Left: ' + c_minutes + ' minutes ' + c_seconds + ' seconds ';
    if(total_seconds <=0){
      setTimeout('document.quiz.submit()', 1);
    } else {
     total_seconds = total_seconds -1;
      c_minutes = parseInt(total_seconds/60);
      c_seconds = parseInt(total_seconds%60);

    }
  }, 1000);
}

function startGame(){
  instructions.classList.add('hidden')
  quizContainerEl.classList.remove('hidden')
  currentQ = 0
  score = 0
  
  nextQuestion()

}

function nextQuestion(){
  const quizData = quizQ[currentQ]

  questions.innerText = quizData.question
  a_text.innerText = quizData.a
  b_text.innerText = quizData.b
  c_text.innerText = quizData.c
  d_text.innerText = quizData.d

}