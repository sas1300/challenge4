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


var buttonOne = document.querySelector("#buttonOne")
var buttonTwo = document.querySelector("#buttonTwo")
var buttonThree = document.querySelector("#buttonThree")
var buttonFour = document.querySelector("#buttonFour")
var buttonFour = document.querySelector("#buttonFive")


var position = 0
score = 9


document.querySelector("#startButton").addEventListener("click", function (event) {
    event.preventDefault();
    console.log(event.target)
    document.querySelector("#header").classList.add("hide")
    //hide strartbutton
    document.querySelector("#questionBox").classList.remove("hide")
    questionUpdate();
})


function questionUpdate() {
    document.querySelector("#questionText").innerHTML = questions[position].text;
    document.querySelector("#buttonOne").innerText = questions[position].answers[0];
    document.querySelector("#buttonTwo").innerText = questions[position].answers[1];
    document.querySelector("#buttonThree").innerText = questions[position].answers[2];
    document.querySelector("#buttonFour").innerText = questions[position].answers[3];
    document.querySelector("#buttonFive").innerText = questions[position].answers[4];
    
    position++
}


function makeAnswerButtonWork(button) {
    button.addEventListener("click", function (event) {
        if (event.target.innerHTML == questions[position].correctAnswer) {
            score++
        }
        questionUpdate();
    })
}

makeAnswerButtonWork(buttonOne)
makeAnswerButtonWork(buttonTwo)
makeAnswerButtonWork(buttonThree)
makeAnswerButtonWork(buttonFour)
makeAnswerButtonWork(buttonFive)



//Button

//timer

//questions

//answers

//end game

