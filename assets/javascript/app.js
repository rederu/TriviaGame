var pos = 0;
var question;
var userChoice;
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var optA, optB, optC, optD, rAnswer;
var time1 = 21;
var intervalTime1;

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
    if (pos >= questions.length) {
        $(".questions").html("<h2>Your Results: <h2>")
        $(".answers").html("<h3> Correct answers: " + correct + "</h3><br>")
        $(".answers").append("<h3>Wrong answers: " + incorrect + "</h3><br>");
        $(".answers").append("<h3>Unanswered questions: " + unanswered + "</h3><br>");

    } else {
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
        $(".answersContainer").hide();
        timetoAnswer();
        isRightAnswer();

    }
};

function isRightAnswer() {
    $(".choices").click(function () {
        stop();
        userChoice = (this.value);
        console.log(this.text);
        console.log(this.value);
        console.log(pos);
        if (userChoice == rAnswer) {
            $('.choices').off('click');
            rightAns();
            /*correct++;
            $(".answersContainer").show();
            alert("Congratulations! The right answer is " + rAnswer);
            console.log(correct);*/
        } else {
            $('.choices').off('click');
            wrongAns();
            /*incorrect++;
            $(".answersContainer").show();
            alert("Wrong! The right answer is " + rAnswer);*/
            console.log(incorrect);
        }
        resetTime();
        pos++;
        setTimeout(displayQuestion, 5000);
        //displayQuestion();
        console.log(rAnswer);
        console.log(pos + $(".choice4").val());
    });
};



$(document).ready(function () {

    displayQuestion();
    console.log(pos + rAnswer);
});


function timetoAnswer() {
    intervalTime1 = setInterval(countDown, 1000);

};

function countDown() {
    time1--;
    $(".time-left").html("<h4>" + time1 + "</h4>");
    if (time1 === 0) {
        $('.choices').off('click');
        stop();
        unAns();
        resetTime();
        pos++;
        setTimeout(displayQuestion, 5000);
    }
}

function stop() {

    clearInterval(intervalTime1);
}

function resetTime() {
    time1 = 21;
}


function rightAns() {
    correct++;
    $(".answersContainer").show();
    $(".isAnswer").html("<h3>Congratulations!!</h3>");
    $(".correctAnswer").html("<br><h4> The right answer is:<br> " + rAnswer+ "</h4>");
};

function wrongAns() {
    incorrect++;
    $(".answersContainer").show();
    $(".isAnswer").html("<h3>Oops!!</h3>");
    $(".correctAnswer").html("<br><p> The right answer is:<br> " + rAnswer);
};

function unAns(){
    unanswered++;
    $(".answersContainer").show();
    $(".isAnswer").html("<h3>Time's Up!!</h3>");
    $(".correctAnswer").html("<br><p> The right answer is:<br> " + rAnswer);
}