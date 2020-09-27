//Questions

var questions = [{

    text: "How do you select a DOM element in javascript?",
    answers: ["document.querySelector('id_name')", "document.questionSelector('id name')"],
    correctAnswer: "document.querySelector('id_name')"
}, 
{   text: "What does HTML stand for?",
    answers: ["Hyper Text Miricle Language", "Hyper Text Markup Language", "Heading Type Markup Language", "Hyper Text Markdown Language"],
    correctAnswer: "Hyper Text Markup Language" 
},

 {  text: "Commonly used data types do not include:",
    answers: ["Strings", "Booleans", "Alerts", "Numbers"],
    correctAnswer: "Alerts"
 },

 {  text: "Arrays in JavaScript can be used to store:",
    answers: ["Numbers and Strings", "Other arrays", "Booleans", "All of the above"], 
    correctAnswer: "All of the above"
},

 {   text: "A useful tool used during developement and debugging for printing content to the debugger is:",
     answers: ["JavaScript", "Terminal/Bash", "For Loops", "Console"],
     correctAnswer: "Console"

   },
    {  text: "External stylesheets are stored in what type of files?",
     answers: ["HTML", "PHP", "CSS", "XML"],
     correctAnswer: "CSS"
}]


var buttonOne = document.querySelector("#buttonOne")
var buttonTwo = document.querySelector("#buttonTwo")
var buttonThree = document.querySelector("#buttonThree")
var buttonFour = document.querySelector("#buttonFour")


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
    //please write out the rest of the buttons on your own
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
//Button

//timer

//questions

//answers

//end game

var string = "strings"

var number = 9

var float = 9.2323

var numberAsAstring = "9"

var array = ["1", "2", "3", "4", "5"]

var object = {
    taxes: "you owe too much",
    fn: function (thing) {
        console.log(thing)
    },
    object: {
        string: string
    }
}

function spaghettiMachine(dough) {
    dough = dough + 1
    return dough
}

var basket = spaghettiMachine(float)

console.log(number)

spaghettiMachine(number)

console.log(number)

console.log(object.taxes)

console.log(array)

for (i = 0; i < array.length; i++) {
    array[i] = array[i] + array[i]
}

console.log(array)