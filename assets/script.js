//Questions

var questions = [{

    text: "What does HTML stand for?",
    answers: ["1. Hyper Text Miricle Language", "2. Hyper Text Markup Language", "3. Heading Type Markup Language", "4. Hyper Text Markdown Language"],
    correctAnswer: "2. Hyper Text Markup Language" 
},

 {  text: "Commonly used data types do not include:",
    answers: ["1. Strings", "2. Booleans", "3. Alerts", "4. Numbers"],
    correctAnswer: "3. Alerts"
 },

 {  text: "Arrays in JavaScript can be used to store:",
    answers: ["1. Numbers and Strings", "2. Other arrays", "3. Booleans", "4. All of the above"], 
    correctAnswer: "4. All of the above"
},

 {   text: "A useful tool used during developement and debugging is:",
     answers: ["1. JavaScript", "2. Terminal/Bash", "3. For Loops", "4. Console"],
     correctAnswer: "4. Console"

   },
    {  text: "External stylesheets are stored in what type of files?",
     answers: ["1. HTML", "2. PHP", "3. CSS", "4. XML"],
     correctAnswer: "3. CSS"
}]

// answerbuttons
var answerOne = document.querySelector("#answerOne")
var answerTwo = document.querySelector("#answerTwo")
var answerThree = document.querySelector("#answerThree")
var answerFour = document.querySelector("#answerFour")


var position = 0
score = 9

//Make questions display
document.querySelector("#startButton").addEventListener("click", function (event) {
    event.preventDefault();
    console.log(event.target)
    document.querySelector("#header").classList.add("hide")
    //hide strartbutton
    document.querySelector("#questionBox").classList.remove("hide")
    questionUpdate();
})

//Make questions change
function questionUpdate() {
    document.querySelector("#questionText").innerHTML = questions[position].text;
    document.querySelector("#answerOne").innerText = questions[position].answers[0];
    document.querySelector("#answerTwo").innerText = questions[position].answers[1];
    document.querySelector("#answerThree").innerText = questions[position].answers[2];
    document.querySelector("#answerFour").innerText = questions[position].answers[3];
    
    position++
}

//Make button with correct answer work
function makeAnswerButtonWork(answer) {
    answer.addEventListener("click", function (event) {
        if (event.target.innerHTML == questions[position].correctAnswer) {
            score++
        }
        questionUpdate();
    })
}

makeAnswerButtonWork(answerOne)
makeAnswerButtonWork(answerTwo)
makeAnswerButtonWork(answerThree)
makeAnswerButtonWork(answerFour)




//questons
    //right ansewr
    //wrong answer
    //alert
    //
//running score

//timer
fumction Timer() {

}

    //Start timer

    //End timer

//answers

//end game

//user score

//Name and high score

//play again? or quit

