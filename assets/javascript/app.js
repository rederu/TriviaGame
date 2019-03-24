var pos = 0;
var question;
var userChoice;
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var optA, optB, optC, optD, rAnswer, explan;
var time1 = 16;
var intervalTime1;
const questionAudio = new Audio ("./assets/audio/Oracle_Secret.wav");
const totalAudio = new Audio ("./assets/audio/Oracle_Fanfare.wav");
const wrongAudio = new Audio ("./assets/audio/Oracle_Error.wav");
const rightAudio = new Audio("./assets/audio/Oracle_Item.wav");

var questions = [
    ["Question 1", "Nayru is the Goddess  of...","Power", "Wisdom", "Courage","Creation", "B"],
    ["Question 2", "For which reason Yeto goes to Zora's Domain?", "Searching for a girlfriend", "To take a shower", "To search for Reekfish", "To search for a warmer place", "C"],
    ["Question 3", "Ghirahim is the sword and servant of...", "Demise", "Ganondorf", "Batreaux", "Impa", "A"],
    ["Question 4", "Where is the Thunder Dragon Lanayru located?", "Sandship", "Lanayru Mining Facility", "Silent Realm", "Lanayru Gorge", "D"],
    ["Question 5", "With the infused power of the Four Elements the White Sword transforms into...", "The Four Sword", "The Master Sword", "Phantom Sword", "Biggoron's Sword", "A"],
    ["Question 6", "Which one is the song Link learns from Malon?", "Song of Storms", "Epona's Song", "Scarecrow's Song", "Sun's Song", "B"],
    ["Question 7", "Magical conductor's baton given to Link by the King of the Red Lions...", "Skull Kid's Horn", "Horse Grass", "Howling Stone", "Wind Waker", "D"],
    ["Question 8", "Which one is the wish Linebeck asks to the Ocean King?", "To be rich", "To travel to another dimension", "To get back his ship", "To be immortal", "C"],
    ["Question 9", "What is the name of the old man that guides Link in  A Link to the Past?", " Sahasrahla", "Gaepora", "Osfala", "Aginah", "A"],
    ["Question 10", "Name of the tribe that have served the Royal Family of Hyrule since the age of creation", "Zora Tribe", "Hylian Tribe", "Sheikah Tribe", "Ninja Tribe", "C"]
];

var explanations = ["Nayru is the Goddess of Wisdom, a recurring character in The Legend of Zelda franchise.",
                    "In The Legend of Zelda: Twilight Princess, Yeto traveled from Snowpeak to Zora's Domain searching for Reekfish in order to make a soup to cure his wife, Yeta.",
                    "Ghirahim is one of the main antagonists in The Legend of Zelda: Skyward Sword. He is the sword and servant of Demise. ",
                    "The Lanayru Gorge is a location from The Legend of Zelda: Skyward Sword. Located to the south of Lanayru Desert, it is the dwelling place of Lanayru.",
                    "The White Sword is the reforged Picori Blade. As soon as the power of the Four Elements is infused into the sword, it  becomes the sacred Four Sword, the strongest sword in The Legend of Zelda: The Minish Cap.",
                    "Malon teaches Link 'Epona's Song' after he finds her father and makes him flee back to Lon Lon Ranch in The Legend of Zelda: Ocarina of Time.",
                    "The Wind Waker is an item from The Legend of Zelda: The Wind Waker. It is a conductor's baton that Link uses to invoke several powers of nature by conducting disembodied voices.",
                    "In The Legend of Zelda: Phantom Hourglass when Oshus asked for Linebeck's wish he states his one wish is to fix his boat which was destroyed in the final battle. ",
                    "Throughout his adventure, Link can find Telepathic Tiles on the walls of dungeons that allows Sahasrahla to telepathically contact Link and give him advice.",
                    "The Sheikah are a recurring race in the Legend of Zelda series. The Sheikah are an ancient clan of ninja-like warriors sworn to protect the Royal Family of Hyrule, even after death."];
//Function will display the question in the left container
function displayQuestion() {
    $(".leftContainer").show();
    $(".rightContainer").show();
    $(".container").show();
    $(".startGame").hide();
    $(".showResults").hide();
    //If we reach the last position in questions array, it will show the results
    if (pos >= questions.length) {
        showResults();

    } else {
        //But, meanthile, this code is the one that will show the questions, the options, it will assign a value to each question and it will show the Time Left counter on the right container
        question = questions[pos][0];
        questionText = questions[pos][1];
        optA = questions[pos][2];
        optB = questions[pos][3];
        optC = questions[pos][4];
        optD = questions[pos][5];
        rAnswer = questions[pos][6];
        explan = explanations[pos];
        //Display questions
        questionAudio.play();
        $(".questions").html("<h3>" + question + "</h3>");
        $(".questions").append("<h4>" + questionText + "</h4>");
        $(".answers").html("<div class='choices choice1 ' value='A'> a) " + optA + "</div><br>");
        $(".choice1").val("A");
        $(".answers").append("<div class='choices choice2  'value='B'> b) " + optB + "</div><br>");
        $(".choice2").val("B");
        $(".answers").append("<div class='choices choice3  'value='C'> c) " + optC + "</div><br>");
        $(".choice3").val("C");
        $(".answers").append("<div class='choices choice4  'value='D'> d) " + optD + "</div><br>");
        $(".choice4").val("D");
        $(".answersContainer").hide();
        $(".timeContainer").show();
        //Calls the function to start the countdown
        timetoAnswer();
        //Calls rightAnswer function
        isRightAnswer();

    }
};

function isRightAnswer() {
    //When the user clicks on any of the choices
    $(".choices").click(function () {
        //Timer will stop
        stop();
        //We add the value of the choice to userChoice  value
        userChoice = (this.value);
        //If the option chosen by the user is the right answer...
        if (userChoice == rAnswer) {
            //This line will avoid the user can select another answer...
            $('.choices').off('click');
            //Calls the function related to the right answer that will be displayed on the right container
            rightAns();
        } else {
            $('.choices').off('click');
            //If it was no the right answer, it will call the function that shows "Oops!"" and the right answer.
            wrongAns();
        }
        //We will reset time every time the user choses an option
        resetTime();
        //And will add +1 to the position of the questions array in order to get the next question
        pos++;
        //Next question will appear after 6 seconds
        setTimeout(displayQuestion, 6000);
    });
};


 //Main
$(document).ready(function () {
    $(".container").hide();
    startGame();
});


function timetoAnswer() {
    intervalTime1 = setInterval(countDown, 1000);

};

function countDown() {
    time1--;
    $(".time-left").html("<h1>" + time1 + "</h1>");
    if (time1 === 0) {
        $('.choices').off('click');
        stop();
        unAns();
        resetTime();
        pos++;
        setTimeout(displayQuestion, 6000);
    }
}

function stop() {

    clearInterval(intervalTime1);
}

function resetTime() {
    time1 = 16;
}


function rightAns() {
    correct++;
    rightAudio.play();
    $(".isAnswer").html("<h2>That's Right!!</h2>");
    showAnswer();
};

function wrongAns() {
    incorrect++;
    wrongAudio.play();
    $(".isAnswer").html("<h2>Oops!!</h2>");
    showAnswer();
};

function unAns() {
    unanswered++;
    wrongAudio.play();
    $(".isAnswer").html("<h2>Time's Up!!</h2>");
    showAnswer();
    
}

function showResults() {
    $(".showResults").show();
    $(".leftContainer").hide();
    $(".rightContainer").hide();
    $(".triviaResults").show();
    totalAudio.play();
    $(".triviaResults").html("<h2>Your Results: </h2><br>")
    $(".triviaResults").append("<h3> Correct answers: " + correct + "</h3><br>")
    $(".triviaResults").append("<h3>Wrong answers: " + incorrect + "</h3><br>");
    if (unanswered >= 1) {
        $(".triviaResults").append("<h3>Unanswered questions: " + unanswered + "</h3><br>");
    }
    $(".restartGame").click(restartGame);

}

function startGame(){
    $(".showResults").hide();
    $(".startGame").click(displayQuestion);
}

function restartGame(){
    $(".showResults").hide();
    $(".triviaResults").hide();
    correct = 0;
    incorrect = 0;
    unanswered = 0;
    pos = 0;
    displayQuestion();
}

function hideTimer(){
    $(".timeContainer").hide();
};

function showAnswer(){
    hideTimer();
    $(".answersContainer").show();
    $(".correctAnswer").html("<br><h4> The right answer is " + rAnswer + "</h4><br>");
    $(".correctAnswer").append("<p>" + explan + "</p>");
}