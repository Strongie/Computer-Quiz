// Define the variables
var timeLeft = document.getElementById("timer");

var introductionPage =document.querySelector("#introduction");
var instructionPage =document.querySelector("#instructions");
var startButton = document.querySelector("#start_quiz");

var questionPage =document.querySelector("#question_page");

var finalScore =document.querySelector("#final_score");
var showScore =document.querySelector("#show_score");
var initials =document.querySelector("#initials");
var submitButton =document.querySelector("#submit_button");

var highscore =document.querySelector("#high_score");
var scoreRecords =document.querySelector("#score_record");
var backButton =document.querySelector("#back_button");
var clearScore =document.querySelector("#clear_score");

// Define Questions, choices and answer as an array

var questions = [
    {
    question: "Questions 2: Commonly used data types DO NOT include:",
    choices: ["a. strings", "b. booleans", "c. alerts", "d. numbers"],
    answer: "c"
},
    
]


//other variables
var secondsLeft = 60;
var questionNumber = 0;
var totalScore = 0;

// set coundown on timer
function setTimer() {
var timerInterval = setInerval(function() {
    timer--;
    if (secondsLeft === 0) {
        clearInterval(timerInterval)
    }
},1000

}

// start the quiz


//Show questions


// answer buttons


//correct or wrong including sound


// enter initials


//submit button


// question count


// show highscore


//Go back button


//Clear highscore button


// local storage

// End Game