var pos = 0;
var question;
var userChoice;
var correct;
var incorrect;
var optA, optB, optC, optD, rAnswer;

var questions = [
    ["Question 1", "Option 1", "Option 2", "Option 3", "Option 4", "C"],
    ["Question 2", "Option 21", "Option 22", "Option 23", "Option 24", "D"],
    ["Question 3", "Option 31", "Option 32", "Option 33", "Option 34", "A"],
    ["Question 4", "Option 41", "Option 42", "Option 43", "Option 44", "C"],
    ["Question 5", "Option 51", "Option 52", "Option 53", "Option 54", "D"],
    ["Question 6", "Option 61", "Option 62", "Option 63", "Option 64", "A"],
    ["Question 7", "Option 71", "Option 72", "Option 73", "Option 74", "B"],
    ["Question 8", "Option 81", "Option 82", "Option 83", "Option 84", "C"],
    ["Question 9", "Option 91", "Option 92", "Option 93", "Option 94", "A"],
    ["Question 10", "Option 101", "Option 102", "Option 103", "Option 104", "B"]
];


function displayQuestion() {
    /*if (pos >= questions.length) {
        $(".answer").text("<h3> Correct answers: " + correct + "<br>Wrong answers: " + incorrect + "<br>");
        pos = 0;
        correct = 0;
        incorrect = 0;
    }*/
    question = questions[pos][0];
    optA = questions[pos][1];
    optB = questions[pos][2];
    optC = questions[pos][3];
    optD = questions[pos][4];
    rAnswer = questions[pos][5];
    //Display questions
    $(".questions").html("<h3>" + question + "</h3>");
    $(".answers").html("<div class='choices choice1 ' value='A'>" + optA + "</div><br>");
    $(".choice1").val("A");
    $(".answers").append("<div class='choices choice2 'value='B'>" + optB + "</div><br>");
    $(".choice2").val("B");
    $(".answers").append("<div class='choices choice3 'value='C'>" + optC + "</div><br>");
    $(".choice3").val("C");
    $(".answers").append("<div class='choices choice4 'value='D'>" + optD + "</div><br>");
    $(".choice4").val("D");

    isRightAnswer();
};

function isRightAnswer(){
    $(".choices").click(function(){
    userChoice = (this.value);
    console.log(this.value);
    if (userChoice == rAnswer) {
        correct++;
        alert("Congratulations! The right answer is " + rAnswer);
    } else {
        incorrect++;
        alert("Wrong! The right answer is " + rAnswer);
    }
    pos++;
    displayQuestion();
    console.log(rAnswer);
    console.log(pos + $(".choice4").val());
});
};



$(document).ready(function () {

    displayQuestion();
    console.log(pos + rAnswer);
    
     /*$(".choices").click(isRightAnswer);*/
    /*$(".choices").click(function () {
        userChoice = (this.value);
        console.log(this.value);

    });*/
});


/*
function timetoAnswer(){

};*/