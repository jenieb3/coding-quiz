//get query selectors by ids
var startBtn = document.querySelector("#start");
var questionContainer = document.querySelector("#questions");
var questionTitle = document.querySelector("#question-title");
var choices = document.querySelector("#choices");
var timer = document.querySelector("#time");
var feedback = document.querySelector("#feedback");
var endScreen = document.querySelector("#end-screen");
var finalScore = document.querySelector("#final-score");
var initialsInput = document.querySelector("#initials");
var submitBtn = document.querySelector("#submit");

var time = 30;
var currQuestion = 0;
var score = 0;
var correctAnswerSound = document.querySelector("#correct-answer");
var wrongAnswerSound = document.querySelector("#wrong-answer");

var questionsArray = [
    {
        question: '1. JavaScript is the programming language of the _____.',
        choices: ['Desktop', 'Mobile', 'Web', 'Server'],
        answer: 'Web',

    },
    {
        question: '2. Which type of JavaScript language is _____?',
        choices: ['Object-oriented', 'Object-based', 'Functional programming', 'All of the above'],
        answer: 'Object-based',
    },

    {
        question: '3. Which of the following statement(s) is true about the JavaScript?',
        choices: ['It is a scripting language used to make the website interactive', 'It is an advanced version of Java for Desktop and Mobile application development', 'It is a markup language of Java to develop the webpages', 'All of the above'],
        answer: 'It is a scripting language used to make the website interactive',

    },

    {
        question: '4. In which HTML element, we put the JavaScript code?',
        choices: ['javascript', 'js', 'script', 'css',],
        answer: 'script',

    },
    {
        question: '5. JavaScript code can be written in ____.',
        choices: ['JavaScript file (.js file)', 'HTML document directly', 'JavaScript file and in HTML document directly', 'In style sheets (.css file)'],
        answer: 'JavaScript file and in HTML document directly',
    }
]

function startTimer() {
    var interval = setInterval(function () {
        time--;
        timer.textContent = time;
        if (time < 0 || time == 0) {
            clearInterval(interval);
            endQuiz();
        }
    }, 1000);
}

//to show question
function showQuestion() {
    var currentQuestion = questionsArray[currQuestion];
    questionTitle.textContent = currentQuestion.question;
    choices.innerHTML = "";
    for (var i = 0; i < currentQuestion.choices.length; i++) {
        var choice = document.createElement("button");
        choice.textContent = currentQuestion.choices[i];
        choice.addEventListener("click", checkAnswer);
        choices.appendChild(choice);
    }
}
// to check answers
function checkAnswer(event) {
    var answer = event.target.textContent;
    if (answer === questionsArray[currQuestion].answer) {
        score++;
        feedback.textContent = "Correct!";
        if (answer === questionsArray[currQuestion].answer) {
            correctAnswerSound.play();
        }

        feedback.classList.remove("hide");
    } else {
        time -= 10;
        feedback.textContent = "Incorrect!";
        if (answer !== questionsArray[currQuestion].answer) {
            wrongAnswerSound.play();
        }

        feedback.classList.remove("hide");
    }
    currQuestion++;
    if (currQuestion === questionsArray.length) {
        endQuiz();
    } else {
        showQuestion();
    }
}
// to time the quiz


function endQuiz() {
    console.log('endQuiz function ran');
    questionContainer.classList.add("hide");
    finalScore.textContent = score;
    endScreen.classList.remove("hide");
}


submitBtn.addEventListener("click", function () {
    // Save the initials and score to local storage
    var initials = initialsInput.value;
    var highscores = JSON.parse(localStorage.getItem("highscores")) || [];
    highscores.push({ initials: initials, score: score });
    localStorage.setItem("highscores", JSON.stringify(highscores));
    document.location.href = 'index.html';
})

startBtn.addEventListener("click", function () {
    questionContainer.classList.remove("hide");
    startBtn.classList.add("hide");
    // show the first question
    showQuestion();
    // star the timer
    startTimer();


});




