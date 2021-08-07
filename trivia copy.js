"use strict"

const $ = selector => document.querySelector(selector);

const questions = [["How would Groot answer this question?","By saying something profound, probably","I am Groot","I am Groot"], 
                    ["How many Infinity Stones are there?","6", "9", "6"],
                    ["What allows transportation between Asgard and Earth in Thor?","The Tri-Ice","The Bi-Frost","The Bi-Frost"],
                    ["What video game is Thor playing in Avengers: Endgame?","My Little Pony: Friendship Is Magic","Fortnite","Fortnite"],
                    ["What is Peter Parker’s aunt’s name?","May","October","May"],
                    ["What is Thor the God of?","Hammers","Thunder","Thunder"],
                    ["What hero does Nick Fury’s pager contact?", "Captain Marvel","Pager, lol", "Captain Marvel"],
                    ["Which character can’t pick up Thor’s hammer?","Captain America","Loki","Loki"],
                    ["Which famous actor appears as Loki in Thor: Ragnarok?","Matt Damon","Seriously, it's Matt Damon. Look it up.","Matt Damon"],
                    ["Star-Lord listens to music on a disc-man.", "True","False","False"]];                  

let answer1 = $(".SectionAnswerOptions").querySelector("#answer1");
            $("#SectionAnswerOptions").querySelector("#answer1").nextElementSibling.textContent
let answer2 = $(".SectionAnswerOptions").querySelector("#answer2");

let score = 0;

let questionNumber = 1;

let randomIndex;
let currentQuestion;
console.log("current question in main body: ", currentQuestion);

const getQuestion = () => {
    let randomIndex = Math.floor(Math.random() * (questions.length - 1));
    let currentQuestion = questions[randomIndex];
    console.log(currentQuestion);
    return currentQuestion;
}

const getScore = () => {
    console.log("Current Question in getScore: ", currentQuestion);
    if ( answer1.checked == true && answer2.checked == false ) {
        if ( answer1.nextElementSibling.textContent == currentQuestion[3]) {
            console.log("Answer 1 Correct");
            console.log("Supposed right answer: ", currentQuestion[3]);
            score = score + 1;
            console.log(score)
        }
        else if (answer1.nextElementSibling.textContent != currentQuestion[3] ) {
            console.log("Score Unchanged in if")
            console.log("Supposed right answer: ", currentQuestion[3]);
            console.log("answer1.nextElementSibling.textContent: ", answer1.nextElementSibling.textContent);
        }
    }
    else if ( answer2.checked == true && answer1.checked == false ) {
        if ( answer2.nextElementSibling.textContent == currentQuestion[3] ) {
            console.log("Answer 2 Correct");
            console.log("Supposed right answer: ", currentQuestion[3]);
            score = score + 1;
            console.log(score)
        }
        else if (answer2.nextElementSibling.textContent != currentQuestion[3] ) {
            console.log("Score Unchanged in else if")
            console.log("Supposed right answer: ", currentQuestion[3]);
            console.log("answer2.nextElementSibling.textContent: ", answer1.nextElementSibling.textContent);
        }
    }
    else {
        console.log("broken")
    }
    console.log("\n\nSCORE: ", score);
}

const results = () => {
    let percentage = (score / 10) * 100;
    $("#SectionTop").querySelector("h1").textContent = `Congratulations! You scored ${percentage} %!`;
}

const getUserAnswer = () => {
    pass;
}

const displayQuestionsAnswers = () => {

    randomIndex = Math.floor(Math.random() * (questions.length - 1));
    currentQuestion = questions[randomIndex];

    console.log("Current Question in displayQuestionsAnswers: ", currentQuestion);
    if ( questions.length > 0 ) {
        $("#SectionTop").querySelector("h1").textContent = currentQuestion[0];
        $("#SectionAnswerOptions").querySelector("#answer1").nextElementSibling.textContent = currentQuestion[1];
        $("#SectionAnswerOptions").querySelector("#answer2").nextElementSibling.textContent = currentQuestion[2];
        questions.splice((randomIndex), 1);
        console.log("RandomIndex: ", randomIndex);
        console.log(questions);
        $(".SectionBottom").querySelector("p").value = "Question Number: ", questionNumber, " of 10";
        questionNumber++
    }
    else {
        results();
    }
}  

const nextQuestion = () => {
    getScore();
    $("#SectionTop").querySelector("h1").textContent = "";
    $("#SectionAnswerOptions").querySelector("#answer1").nextElementSibling.textContent = "";
    $("#SectionAnswerOptions").querySelector("#answer2").nextElementSibling.textContent = "";
    displayQuestionsAnswers();
}

document.addEventListener("DOMContentLoaded", () => {
	//add event handlers
    displayQuestionsAnswers();
    $(".submit").addEventListener("click", nextQuestion);
	//$("#name").focus();
	//$("#add").addEventListener("click", addScore);
	//$("#display_results").addEventListener("click", displayResults);
	//$("#display_scores").addEventListener("click", displayScores);
});
    