var questions = [
  {
    question: "What is Superman's greatest weakness?",
    answers: ["Blue cheese", "Kryptonite", "Gambling", "Lois Lane"],
    correct: "Lois Lane",
  },
  {
    question: "What is Dick Grayson's secret identity?",
    answers: ["Martian Manhunter", "Green Arrow", "Nightwing", "Aquaman"],
    correct: "Nightwing",
  },
  {
    question: "What year did Spider-man make his debut?",
    answers: ["1951", "1962", "1973", "1949"],
    correct: "1962",
  },
  {
    question: "Batman has a son and his name is...?",
    answers: ["Alfred", "Robin", "Bruce", "Damian"],
    correct: "Damian"
  },
  {
    question: "Which hero goes by the name Arthur Curry?",
    answers: ["Captain America", "The Green Lantern", "Aquaman", "Cyborg"],
    correct: "Aquaman"
  },
  {
    question: "How many Infinity Stones are there?",
    answers: ["4", "6", "3", "5"],
    correct: "6"
  },
  {
    question: "What is the home land of Wonder Woman?",
    answers: ["Captain America", "The Green Lantern", "Aquaman", "Cyborg"],
    correct: "Aquaman"
  }
];
var counter = -1;



// When the user clicks begin -- display first question and answers
// Run the function on the click
  $("#begin").on("click", function(){
    // Increase the question counter by one
      counter++;
      // Replace the #question h1 with the new question
      $("#question").text(`${questions[counter].question}`);
      // log out the question for debugging purposes
      console.log(questions[counter].question);
      // loop through the four answers to be able to print them on the page
      for (i = 0; i < 4; i++){
      // log the answers for debugging
      console.log(`Answer: ${questions[counter].answers[i]}`);
      // print the four answers to the page as buttons
      $("#begin").css("display", "none");
      $(".buttons").append(`<button>${questions[counter].answers[i]}</button>`);
    }
    });




// function askEach() {
//   for (i = 0; i < questions.length; i++){
//     console.log(questions[i].question);
//     console.log(`Answer: ${questions[i].correct}`);
//   }
// }

// askEach();
