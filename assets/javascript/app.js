var questions = [
  {
    question: "What is Superman's greatest weakness?",
    answerOne: "Blue cheese",
    answerTwo: "Kryptonite",
    answerThree: "Gambling",
    answerFour: "Lois Lane",
    correct: "Lois Lane",
  },
  {
    question: "What is Dick Grayson's secret identity?",
    answerOne: "Martian Manhunter",
    answerTwo: "Green Arrow",
    answerThree: "Nightwing",
    answerFour: "Aquaman",
    correct: "Nightwing",
  },
  {
    question: "What year did Spider-man make his debut?",
    answerOne: "1951",
    answerTwo: "1962",
    answerThree: "1973",
    answerFour: "1949",
    correct: "1962",
  },
  {
    question: "Batman has a son and his name is...?",
    answerOne: "Alfred",
    answerTwo: "Robin",
    answerThree: "Bruce",
    answerFour: "Damian",
    correct: "Damian"
  },
  {
    question: "Which hero goes by the name Arthur Curry?",
    answerOne: "Captain America",
    answerTwo: "The Green Lantern",
    answerThree: "Aquaman",
    answerFour: "Cyborg",
    correct: "Aquaman"
  },
  {
    question: "How many Infinity Stones are there?",
    answerOne: "4",
    answerTwo: "6",
    answerThree: "3",
    answerFour: "5",
    correct: "6"
  },
  {
    question: "Which hero goes by the name Arthur Curry?",
    answerOne: "Captain America",
    answerTwo: "The Green Lantern",
    answerThree: "Aquaman",
    answerFour: "Cyborg",
    correct: "Aquaman"
  }
];

function askEach() {
  for (i = 0; i < questions.length; i++){
    console.log(questions[i].question);
    console.log(`Answer: ${questions[i].correct}`);
  }
}

askEach();
