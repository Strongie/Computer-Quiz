// Define the variables
var timeLeft = document.getElementById("timer");

var introductionPage =document.querySelector("#introduction");
var instructionPage =document.querySelector("#instructions");
var startButton = document.querySelector("#start_quiz");

var questionPage =document.querySelector("#question_page");
var askQuestion =document.querySelector("#ask_question");
var answers =document.querySelector("#choices");

var answerButton1 =document.querySelector("#answer_button1");
var answerButton2 =document.querySelector("#answer_button2");
var answerButton3 =document.querySelector("#answer_button3");
var answerButton4 =document.querySelector("#answer_button4");


var finalScore =document.querySelector("#final_score");
var showScore =document.querySelector("#show_score");
var initials =document.querySelector("#initials");
var submitButton =document.querySelector("#submit_button");

var highScore =document.querySelector("#high_score");
var scoreRecords =document.querySelector("#score_record");
var backButton =document.querySelector("#back_button");
var clearScore =document.querySelector("#clear_score");

// Define Questions, choices and answer as an array

var questions = [
    
    {   question: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "c"
    },
    {
        question: "The conditions in an if / else statement is enclosed within ....?",
        choices: ["quotes", "curly brackets", "paranthesis", "square brackets"],
        answer: "b"
    },
    {
        question: "Arrays in Javascript can be used to store:",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "d"
    },
    {
        question: "String values must be enclosed within ......... when being assigned variables.",
        choices: ["commas", "curly brackets", "quotes", "paranthesis"],
        answer: "a"
    },
    
];


//other variables
var secondsLeft = 60;
var questionNumber = 0;
var totalScore = 0;
var questionCount = 0;


// Hide the cards
function hideCards() {
    introductionPage.setAttribute("hidden", true);
    questionPage.setAttribute("hidden", true);
    finalScore.setAttribute("hidden", true);
    highScore.setAttribute("hidden", true);
  }


// start the quiz

startButton.addEventListener("click", startQuiz);


function startQuiz() {
    timeLeft.textContent = "Time Left:" + secondsLeft + "seconds";
    
    setTimer();
    showQestion();
    
    };
    

// set countdown on timer
function setTimer() {
var timerInterval = setInterval(function() {
    secondsLeft --;
    timeLeft.textContent = "Time Left:" + secondsLeft + "seconds";
    if (secondsLeft <= 0) {
        clearInterval(timerInterval);
        timeLeft.textContent = "Time is up!";
    }
},1000);

};

//get question



//Show questions
function showQestion () {
 //   askQuestion.textContent = questions[n].question;
 //     answerButton1.textContent = questions[n].choices[0];
 //     answerButton2.textContent = questions[n].choices[1];
 //       answerButton3.textContent = questions[n].choices[2];
 //       answerButton4.textContent = questions[n].choices[3];
  //    questionNumber = n;
  var currentQuestion = questions[questionCount];
  askQuestion.textContent = currentQuestion.title;  
  
//  for ( var i = 0; i < currentQuestion.choices.length; i++ ) { 
//               var choice = currentQuestion.choices[i];
          askQuestion.textContent = currentQuestion.question; 
          answerButton1.textContent = currentQuestion.choices[0]
          answerButton2.textContent = currentQuestion.choices[1] 
          answerButton3.textContent = currentQuestion.choices[2]
          answerButton4.textContent = currentQuestion.choices[3]
  //      };

    }
// Check answer
    function checkAnswer() {


    }


//correct or wrong 


// enter initials


//submit button


// question count


// show highscore
//function showHighscore()

//Go back button


//Clear highscore button
//function clearHighscore ()


// local storage

// End Game
//function endGame()

// hide answer
//function hideAnswer()
