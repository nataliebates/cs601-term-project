/**
 * Fetches the quiz data JSON file and processes the response
 * @throws Error when the response is not ok 
 */
async function getQuizData() {
  await fetch("../documents/quiz.json")
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Unable to fetch the quiz data.");
      }
    })
    .then(data => {
      console.log(data);
      quizData = data.quiz;

      startButton.style.display = "none";
      quizCard.style.display = "flex";
      displayNextQuestion();
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

/**
 * Defines what elements should be updated when the user
 * chooses to reveal the quiz question's answer
 */
let displayAnswer = () => {
  // Display answer and hide "reveal" button
  quizAnswer.style.display = "block";
  revealAnswerButton.style.display = "none";

  // Check if there are more questions to display before displaying "Next question" button
  if (currentQuestionIndex < (quizData.length - 1)) {
    nextQuestionButton.style.display = "block";
  }
}

/**
 * Defines what elements should be updated when the user
 * chooses to start the quiz or go to the next quiz question
 */
let displayNextQuestion = () => {
  // Hide answer & "next" button and display "reveal" button
  quizAnswer.style.display = "none";
  nextQuestionButton.style.display = "none";
  revealAnswerButton.style.display = "block";

  // Set next question and answer to display
  currentQuestionIndex += 1;
  quizQuestion.innerHTML = quizData[currentQuestionIndex].question;
  quizAnswer.innerHTML = quizData[currentQuestionIndex].answer;
}


// Get elements that will need to be manipulated
let quizCard = document.getElementById("quiz-card");
let startButton = document.getElementById("start-quiz-button");
let quizQuestion = document.getElementById("quiz-question");
let quizAnswer = document.getElementById("quiz-answer");
let revealAnswerButton = document.getElementById("quiz-reveal");
let nextQuestionButton = document.getElementById("next-question");

// Add click event listeners to the buttons
startButton.addEventListener("click", getQuizData);
revealAnswerButton.addEventListener("click", displayAnswer);
nextQuestionButton.addEventListener("click", displayNextQuestion);

var quizData;
var currentQuestionIndex = -1;