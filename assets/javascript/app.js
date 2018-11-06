$(document).ready(function(){

var questions = [
  {
    question: "What is Superman's greatest weakness?",
    answers: ["Lois Lane", "Kryptonite", "Gambling", "Carbonite"],
    correct: "Lois Lane",
    gif: "https://media.giphy.com/media/r15bE8MAPG22s/source.gif"
  },
  {
    question: "What is Dick Grayson's secret identity?",
    answers: ["Martian Manhunter", "Green Arrow", "Nightwing", "Aquaman"],
    correct: "Nightwing",
    gif: "https://i.gifer.com/GYXl.gif"
  },
  {
    question: "What year did Spider-man make his debut?",
    answers: ["1951", "1962", "1973", "1949"],
    correct: "1962",
    gif: "https://media1.tenor.com/images/837072ca19e3c5cebea76e2693f3100d/tenor.gif?itemid=11796793"
  },
  {
    question: "Batman has a son and his name is...?",
    answers: ["Alfred", "Robin", "Bruce", "Damian"],
    correct: "Damian",
    gif: "https://media.tenor.com/images/74e029981aab2da0c51b2edaea618717/tenor.gif"
  },
  {
    question: "How many Infinity Stones are there?",
    answers: ["4", "6", "3", "5"],
    correct: "6",
    gif: "https://i.imgur.com/9LgtKgM.gif"
  },
  {
    question: "What is the name of Wonder Woman's home?",
    answers: ["Gotham City", "Metropolis", "New York City", "Themyscira"],
    correct: "Themyscira",
    gif: "https://media.giphy.com/media/26AHxw0Zd7QLrNDzy/giphy.gif"
  },
  {
    question: "What is the name of Thor's hammer?",
    answers: ["Molaris", "Mjolnir", "Majorin", "Marjory"],
    correct: "Mjolnir",
    gif: "https://i.gifer.com/3T4w.gif"
  },
  {
    question: "Which hero goes by the name Arthur Curry?",
    answers: ["Captain America", "The Green Lantern", "Aquaman", "Cyborg"],
    correct: "Aquaman",
    gif: "https://media.giphy.com/media/qBvHZHgiUmWBi/giphy.gif"
  }
];
var correctAnswers = 0;
var wrongAnswers = 0;
var timer;
var counter;

// function to call to reset the game
function resetGame(){
  $(".buttons").empty();
  counter = 0;
  correctAnswers = 0;
  wrongAnswers = 0;
  newQuestions();
}

function stopTimer(){
  clearTimeout(timer);
}

// check if the answer they pick is correct and go to answer page
function checkAnswer() {
  stopTimer();
  var clicked;
  // set the clicked variable to the text of the button for checking purposes
  clicked = $(this).text();
  if (clicked === questions[counter].correct) {
    // if their choice was correct display "correct"
    $("#question").text(`Correct! The answer was: ${clicked}`)
    correctAnswers++;
    // Check if their choice was wrong
  } else {
    // Replace the h1 text with "False..."
    $("#question").text(`Oops! The correct answer is: ${questions[counter].correct}`)
    wrongAnswers++;
  }
  // Remove the buttons or gif from the page
  $(".buttons").empty();
  // Show the gif related to the item in the object
  $(".buttons").append(`<img src="${questions[counter].gif}" alt="gif">`);
  // Increase the counter to prepare for the next page
  if (counter < 7){
    counter++;
    // Set a 5 second timer before going to the next question
    setTimeout(newQuestions, 3500);
  } else {
    setTimeout(endGame, 3500)
    endGame();
  }
}

// Run this function when the game is over
function endGame(){
  $(".buttons").empty();
  // If the user gets more than 6 correct show this
  if (correctAnswers > 6){
    $("#question").text(`Wow! I hear the Avengers are hiring.`);
    $(".buttons").append(`<img src="https://media.giphy.com/media/weOqNCGrxFEqI/giphy.gif">`)
  }
  // If the user gets 6 or less correct show this
  else if (correctAnswers < 7) {
    $("#question").text(`Ouch! Call the Justice League...`);
    $(".buttons").append(`<img src="https://gifimage.net/wp-content/uploads/2017/12/justice-league-gif-6.gif">`)
  }
  // Either way show number of correct answers
  $(".buttons").append(`<h2>You got ${correctAnswers} right!</h2>`);
  // Show the number of wrong answers
  $(".buttons").append(`<h2>You got ${wrongAnswers} wrong!</h2>`);
  // Show a button asking if they would like to play again
  $(".buttons").append(`<button id="begin">Play again?</button>`);
  // Add a click listener for the play again button
  $("#begin").on("click", resetGame);
}

// Function puts out new questions from the object
function newQuestions(){
  // Remove the buttons or gif from the page
  $(".buttons").empty();
  // Replace the #question h1 with the new question
  $("#question").text(`${questions[counter].question}`);
  // loop through the four answers to be able to print them on the page
  for (i = 0; i < 4; i++) {
    // print the four answers to the page as buttons
    $(".buttons").append(`<button>${questions[counter].answers[i]}</button>`);
  }
  // Set a 10 second timer
  timer = setTimeout(checkAnswer, 10000);

  // When you click on one of the buttons run the checkAnswer function
  $("button").on("click", checkAnswer);
}

// When the user clicks begin -- display first question and answers
$("#begin").on("click", resetGame);


});
