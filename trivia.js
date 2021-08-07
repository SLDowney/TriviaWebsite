"use strict"

const $ = selector => document.querySelector(selector);

const questions = [["How would Groot answer this question?","By saying something profound, probably","I am Groot","I am Groot"], 
                    ["How many Infinity Stones are there?","6", "9", "6"],
                    ["What allows transportation between Asgard and Earth in Thor?","The Tri-Ice","The Bi-Frost","The Bi-Frost"],
                    ["What video game is Thor playing in Avengers: Endgame?","My Little Pony: Friendship Is Magic","Fortnite","Fortnite"],
                    ["What is Peter Parker’s aunt’s name?","May","October","May"],
                    ["What is Thor the God of?","Hammers","Thunder","Hammers"],
                    ["What hero does Nick Fury’s pager contact?", "Captain Marvel","Pager, lol", "Captain Marvel"],
                    ["Which character can’t pick up Thor’s hammer?","Captain America","Loki","Loki"],
                    ["Which famous actor appears as Loki in Thor: Ragnarok?","Matt Damon","Seriously, it's Matt Damon. Look it up.","Matt Damon"],
                    ["Star-Lord listens to music on a disc-man.", "True","False","False"]];                  

let answer1 = $(".SectionAnswerOptions").querySelector("#answer1");
let answer2 = $(".SectionAnswerOptions").querySelector("#answer2");

let score = 0;
let score1 = 0;
let score2 = 0;

const results = () => {
    const getAnswer = document.querySelectorAll('input[name="answer"]');
    console.log(getAnswer);

    for ( let answer in getAnswer ) {
        if ( $(".SectionAnswerOptions").querySelector("#answer1").checked ) {
            console.log("Answer 1 checked");
            score1 = score1 + 1;
            console.log(score1)

        }
        else if ( $(".SectionAnswerOptions").querySelector("#answer2").checked ) {
            console.log("Answer 2 checked");
            score2 = score2 + 1;
            console.log(score2)
        }
        else {
            console.log("broken")
        }
    }
    console.log("\n\nOVERALL SCORE: ", score);
}

const displayQuestionsAnswers = () => {
    let valid = true;
    let removed;
    let randomIndex;

    randomIndex = Math.floor(Math.random() * (questions.length - 1));
    $("#SectionTop").querySelector("h1").textContent = questions[randomIndex][0];
    $("#SectionAnswerOptions").querySelector("#answer1").nextElementSibling.textContent = questions[randomIndex][1];
    $("#SectionAnswerOptions").querySelector("#answer2").nextElementSibling.textContent = questions[randomIndex][2];
    questions.splice((randomIndex), 1);
    console.log(randomIndex);
    console.log(questions);


    // if ( valid == true ) {
    //     randomIndex = Math.floor(Math.random() * (questions.length - 1));
    //     console.log("RandomIndex in 1: ", randomIndex);
    //     console.log("questions[randomIndex]: ", questions[randomIndex][0]);
    //     $("#SectionTop1").querySelector("h1").textContent = questions[randomIndex][0];
    //     $("#SectionAnswerOptions1").querySelector("#answer1").nextElementSibling.textContent = questions[randomIndex][1];
    //     $("#SectionAnswerOptions1").querySelector("#answer2").nextElementSibling.textContent = questions[randomIndex][2];
    //     console.log("Answer1: ", questions[randomIndex][1]);
    //     console.log("Answer2: ", questions[randomIndex][2]);
    //     removed = questions.splice((randomIndex), 1);
    //     console.log("Removed number is", removed);
    //     console.log("Questions: ", questions);
    //     console.log(" ");
    // }

    // if ( valid == true ) {
    //     randomIndex = Math.floor(Math.random() * (questions.length - 1));
    //     console.log("RandomIndex in 2: ", randomIndex);
    //     console.log("questions[randomIndex]: ", questions[randomIndex][0]);;
    //     $("#SectionTop2").querySelector("h1").textContent = questions[randomIndex][0];
    //     $("#SectionAnswerOptions2").querySelector("#answer1").nextElementSibling.textContent = questions[randomIndex][1];
    //     $("#SectionAnswerOptions2").querySelector("#answer2").nextElementSibling.textContent = questions[randomIndex][2];
    //     console.log("Answer1: ", questions[randomIndex][1]);
    //     console.log("Answer2: ", questions[randomIndex][2]);
    //     removed = questions.splice((randomIndex), 1);
    //     console.log("Removed number is", removed);
    //     console.log("Questions: ", questions);
    //     console.log(" ");
    // }
        
    // if ( valid == true ) {
    //     randomIndex = Math.floor(Math.random() * (questions.length - 1));
    //     console.log("RandomIndex in 3: ", randomIndex);
    //     console.log("questions[randomIndex]: ", questions[randomIndex][0]);
    //     $("#SectionTop3").querySelector("h1").textContent = questions[randomIndex][0];
    //     $("#SectionAnswerOptions3").querySelector("#answer1").nextElementSibling.textContent = questions[randomIndex][1];
    //     $("#SectionAnswerOptions3").querySelector("#answer2").nextElementSibling.textContent = questions[randomIndex][2];
    //     console.log("Answer1: ", questions[randomIndex][1]);
    //     console.log("Answer2: ", questions[randomIndex][2]);
    //     removed = questions.splice((randomIndex), 1);
    //     console.log("Removed number is", removed);
    //     console.log("Questions: ", questions);
    //     console.log(" ");
    // }

    // if ( valid == true ) {
    //     randomIndex = Math.floor(Math.random() * (questions.length - 1));
    //     console.log("RandomIndex in 4: ", randomIndex);
    //     console.log("questions[randomIndex]: ", questions[randomIndex][0]);
    //     $("#SectionTop4").querySelector("h1").textContent = questions[randomIndex][0];
    //     $("#SectionAnswerOptions4").querySelector("#answer1").nextElementSibling.textContent = questions[randomIndex][1];
    //     $("#SectionAnswerOptions4").querySelector("#answer2").nextElementSibling.textContent = questions[randomIndex][2];
    //     console.log("Answer1: ", questions[randomIndex][1]);
    //     console.log("Answer2: ", questions[randomIndex][2]);
    //     removed = questions.splice((randomIndex), 1);
    //     console.log("Removed number is", removed);
    //     console.log("Questions: ", questions);
    //     console.log(" ");
    // }

    // if ( valid == true ) {
    //     randomIndex = Math.floor(Math.random() * (questions.length - 1));
    //     console.log("RandomIndex in 5: ", randomIndex);
    //     console.log("questions[randomIndex]: ", questions[randomIndex][0]);
    //     $("#SectionTop5").querySelector("h1").textContent = questions[randomIndex][0];
    //     $("#SectionAnswerOptions5").querySelector("#answer1").nextElementSibling.textContent = questions[randomIndex][1];
    //     $("#SectionAnswerOptions5").querySelector("#answer2").nextElementSibling.textContent = questions[randomIndex][2];
    //     console.log("Answer1: ", questions[randomIndex][1]);
    //     console.log("Answer2: ", questions[randomIndex][2]);
    //     removed = questions.splice((randomIndex), 1);
    //     console.log("Removed number is", removed);
    //     console.log("Questions: ", questions);
    //     console.log(" ");
    // }

    // if ( valid == true ) {
    //     randomIndex = Math.floor(Math.random() * (questions.length - 1));
    //     console.log("RandomIndex in 6: ", randomIndex);
    //     console.log("questions[randomIndex]: ", questions[randomIndex][0]);
    //     $("#SectionTop6").querySelector("h1").textContent = questions[randomIndex][0];
    //     $("#SectionAnswerOptions6").querySelector("#answer1").nextElementSibling.textContent = questions[randomIndex][1];
    //     $("#SectionAnswerOptions6").querySelector("#answer2").nextElementSibling.textContent = questions[randomIndex][2];
    //     console.log("Answer1: ", questions[randomIndex][1]);
    //     console.log("Answer2: ", questions[randomIndex][2]);
    //     removed = questions.splice((randomIndex), 1);
    //     console.log("Removed number is", removed);
    //     console.log("Questions: ", questions);
    //     console.log(" ");
    // }

    // if ( valid == true ) {
    //     randomIndex = Math.floor(Math.random() * (questions.length - 1));
    //     console.log("RandomIndex in 7: ", randomIndex);
    //     console.log("questions[randomIndex]: ", questions[randomIndex][0]);
    //     $("#SectionTop7").querySelector("h1").textContent = questions[randomIndex][0];
    //     $("#SectionAnswerOptions7").querySelector("#answer1").nextElementSibling.textContent = questions[randomIndex][1];
    //     $("#SectionAnswerOptions7").querySelector("#answer2").nextElementSibling.textContent = questions[randomIndex][2];
    //     console.log("Answer1: ", questions[randomIndex][1]);
    //     console.log("Answer2: ", questions[randomIndex][2]);
    //     removed = questions.splice((randomIndex), 1);
    //     console.log("Removed number is", removed);
    //     console.log("Questions: ", questions);
    //     console.log(" ");
    // }

    // if ( valid == true ) {
    //     randomIndex = Math.floor(Math.random() * (questions.length - 1));
    //     console.log("RandomIndex in 8: ", randomIndex);
    //     console.log("questions[randomIndex]: ", questions[randomIndex][0]);
    //     $("#SectionTop8").querySelector("h1").textContent = questions[randomIndex][0];
    //     $("#SectionAnswerOptions8").querySelector("#answer1").nextElementSibling.textContent = questions[randomIndex][1];
    //     $("#SectionAnswerOptions8").querySelector("#answer2").nextElementSibling.textContent = questions[randomIndex][2];
    //     console.log("Answer1: ", questions[randomIndex][1]);
    //     console.log("Answer2: ", questions[randomIndex][2]);
    //     removed = questions.splice((randomIndex), 1);
    //     console.log("Removed number is", removed);
    //     console.log("Questions: ", questions);
    //     console.log(" ");
    // }

    // if ( valid == true ) {
    //     randomIndex = Math.floor(Math.random() * (questions.length - 1));
    //     console.log("RandomIndex in 9: ", randomIndex);
    //     console.log("questions[randomIndex]: ", questions[randomIndex][0]);
    //     $("#SectionTop9").querySelector("h1").textContent = questions[randomIndex][0];
    //     $("#SectionAnswerOptions9").querySelector("#answer1").nextElementSibling.textContent = questions[randomIndex][1];
    //     $("#SectionAnswerOptions9").querySelector("#answer2").nextElementSibling.textContent = questions[randomIndex][2];
    //     console.log("Answer1: ", questions[randomIndex][1]);
    //     console.log("Answer2: ", questions[randomIndex][2]);
    //     removed = questions.splice((randomIndex), 1);
    //     console.log("Removed number is", removed);
    //     console.log("Questions: ", questions);
    //     console.log(" ");
    // }

    // if ( valid == true ) {
    //     randomIndex = Math.floor(Math.random() * (questions.length - 1));
    //     //while ( questions.indexOf(randomIndex) == -1) {
    //     //   randomIndex = Math.floor(Math.random() * (questions.length - 1));
    //     //}
    //     console.log("RandomIndex in 10: ", randomIndex);
    //     console.log("questions[randomIndex]: ", questions[randomIndex][0]);
    //     $("#SectionTop10").querySelector("h1").textContent = questions[randomIndex][0];
    //     $("#SectionAnswerOptions10").querySelector("#answer1").nextElementSibling.textContent = questions[randomIndex][1];
    //     $("#SectionAnswerOptions10").querySelector("#answer2").nextElementSibling.textContent = questions[randomIndex][2];
    //     console.log("Answer1: ", questions[randomIndex][1]);
    //     console.log("Answer2: ", questions[randomIndex][2]);
    //     removed = questions.splice((randomIndex), 1);
    //     console.log("Removed number is", removed);
    //     console.log("Questions: ", questions);
    //     console.log(" ");
    // }
}  

document.addEventListener("DOMContentLoaded", () => {
	//add event handlers
    displayQuestionsAnswers();
    $(".submit").addEventListener("click", results);
	//$("#name").focus();
	//$("#add").addEventListener("click", addScore);
	//$("#display_results").addEventListener("click", displayResults);
	//$("#display_scores").addEventListener("click", displayScores);
});
    