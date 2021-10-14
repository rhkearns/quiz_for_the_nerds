/*-------------------- Constants------------------------*/

// sound for clicks
// sound for passing/failing quiz
// objects for each quiz
// object for each question with answer choices 

import { hpQuestions } from "../data/hp.js";


/*---------------------- Variables --------------------*/

// Create variables for number of questions, number answered, number answered correctly

let category, score

/*----------------- Cached Element References ---------*/

// Cached elements: question message; muliple choices 1-5; categories?; 
// categories
const titleEl = document.querySelector("#title")
const messageEl = document.querySelector("#message")
const catButtons = document.querySelector("#category-cards")

console.log(messageEl);

/*---------------- Event Listeners -------------------*/

// clicks on categories and answers
catButtons.addEventListener('click', chooseCategory)

// extra 1: hover over on categories and answers
// extra 2: click on pause button
// toggle: light and dark mode
// replay quiz


/*------------------- Functions ---------------------*/

// init to landing page
init ()

function init (){
   titleEl.innerText = "Nerd Quiz"
   messageEl.innerText = "Test Your Nerd Knowledge"
}
// render to quiz page
// render to result page
// check answer
// change between questions
// totaling results
// extra: shuffle questions
// extra: random quiz
// extra: difficulties

function chooseCategory(evt){
   category = evt.target.id
   renderQuiz(category)
}

function renderQuiz () {

}

function renderGuess(evt) {

}

function renderResult () {

}

function nextQuestion () {

}

function checkAnswer(ans) {

}