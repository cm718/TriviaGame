var questions = [
  {
    question: "What is Superman's greatest weakness?",
    answers: ["Blue cheese", "Kryptonite", "Gambling", "Lois Lane"],
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
    question: "Which hero goes by the name Arthur Curry?",
    answers: ["Captain America", "The Green Lantern", "Aquaman", "Cyborg"],
    correct: "Aquaman",
    gif: "https://media.giphy.com/media/qBvHZHgiUmWBi/giphy.gif"
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
    gif: "https://66.media.tumblr.com/00c9adcfd99addcac8b619e8762fbe8a/tumblr_ork6ay6joK1uyyw3jo1_500.gif"
  },
  {
    question: "What is the name of Thor's hammer?",
    answers: ["Molaris", "Mjolnir", "Majorin", "Marjory"],
    correct: "Mjolnir",
    gif: "https://i.gifer.com/3T4w.gif"
  }
];
var counter = -1;
var clicked;
var correctAnswers = 0;
var wrongAnswers = 0;

// check if the answer they pick is correct and go to answer page
function checkAnswer() {
  // set the clicked variable to the text of the button for checking purposes
  clicked = $(this).text();
  console.log(clicked);
  if (clicked === questions[counter].correct) {
    // if their choice was correct display "correct"
    $("#question").text(`Correct! The correct answer is: ${clicked}`)
    correctAnswers++;
    console.log(`Right: ${correctAnswers}`);
    console.log(`Wrong: ${wrongAnswers}`);
    // Check if their choice was wrong
  } else if (clicked !== questions[counter].correct) {
    // Replace the h1 text with "False..."
    $("#question").text(`False! The correct answer is: ${questions[counter].correct}`)
    wrongAnswers++;
    console.log(`Right: ${correctAnswers}`);
    console.log(`Wrong: ${wrongAnswers}`);
  }
  // Remove the buttons or gif from the page
  $(".buttons").empty();
  // Show the gif related to the item in the object
  $(".buttons").append(`<img src="${questions[counter].gif}" alt="gif">`);
  // Increase the counter to prepare for the next page
  if (counter < 7){
    console.log('in if');
    counter++;
    console.log(counter);
    // Set a 10 second timer before going to the next question
    setTimeout(newQuestions, 1000);
  } else {
    console.log('in else');

    endGame();
  }

}

// Run this function when the game is over
function endGame(){
  $(".buttons").empty();
  // Display their total correct answers
  $("#question").text(`Call the Justice League...`);
  $(".buttons").append(`<h2>You got ${correctAnswers} right!</h2>`)
  $(".buttons").append(`<h2>You got ${wrongAnswers} wrong!</h2>`)
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
  // When you click on one of the buttons run the checkAnswer function
  $("button").on("click", checkAnswer);
}


// When the user clicks begin -- display first question and answers
// Run the function on the click
$("#begin").on("click", function() {
  $(".buttons").empty();
  // Increase the question counter by one
  counter++;
  clicked = $(this).text();
  console.log(clicked);
  console.log(counter);
  // Start a 10 second timer

  // Display the timer on the page

newQuestions();

});



// else display "false"
//
// display "the correct answer is: answer"
//
// display a related gif from the object
