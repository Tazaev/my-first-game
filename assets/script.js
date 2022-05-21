//lets put all variables here
var timeleft = 60;
var timerID;

var initialsField = document.getElementById("player-name");
var restartButton = document.getElementById("restart-btn");
var scoreField = document.getElementById("player-score");
var scores = JSON.parse(localStorage.getItem("scores")) || [];
var timerEl = document.getElementById("timer");
var startButton = document.getElementById("sta-btn");
var nextButton = document.getElementById("next-btn");
var questionContainerEl = document.getElementById("que-container");
var startContainerEl = document.getElementById("container");
var questionEl = document.getElementById("question");
var answerButtonsEl = document.getElementById("ans-buttons");
var checkAnswerEl = document.getElementById("confirm-ans");
var viewHighScores = document.getElementById("highscore-link");
var submitButton = document.getElementById("submit-btn");
var clearScoreButton = document.getElementById("clear-btn");

var shuffledQuestions, currentQuestionIndex;


//start game event listener
startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
    currentQuestionIndex++
    setNextQuestion()
});

// timer function for when quiz starts
function timeTick() {
    timeLeft--;
    timerEl.textContent = "Time: " + timeLeft;
    if (timeLeft <= 0) {
        saveScore();
    }
}
// function for starting the quiz
function startGame() {
    timerID = setInterval(timeTick, 1000);
    startContainerEl.classList.add("hide");
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerEl.classList.remove("hide");

    // Timer will start as soon as start button is clicked
    timeTick();
    setNextQuestion();
};