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
    let image1 = "pictures/100.jpg";
    let percentage = (score / 10) * 100;
    const h3 = document.createElement("h3");
    const image = $(".SectionAnswerOptions").setAttribute("src", "pictures/100.jpg");

    let radioElem1 = $("#answer1");
    let radioElem2 = $("#answer2");
    radioElem1.remove();
    radioElem2.remove();
    $(".submit").style.display = "none";

    if ( percentage == 100 ) {
        $("h1").textContent = `AMAZING! ${percentage}% ?!`;
        h3.textContent = "What a SUPER FAN! You must know EVERY SUPERHERO and EVERY BACKSTORY! Have you ever done anything else in your life but live for the Marvel Universe?! You should probably go outside and meet some people...";
        $("h1").appendChild(h3);
        $(".SectionAnswerOptions").setAttribute("src", "pictures/100.jpg");
        $(".SectionAnswerOptions").style.backgroundImage = "url(pictures/100.jpg)";
        $(".SectionAnswerOptions").style.height = "340px";
    
    }
    else if ( percentage == 90 ) {
        $("h1").textContent = `Wicked! ${percentage}%`;
        h3.textContent = "Almost got every single one right! You must have clicked the wrong one by mistake, bet you're miffed, eh?";
        $("h1").appendChild(h3);
        $(".SectionAnswerOptions").setAttribute("src", "pictures/90.jpg");
        $(".SectionAnswerOptions").style.backgroundImage = "url(pictures/90.jpg)";
        $(".SectionAnswerOptions").style.height = "340px";
    }
    else if ( percentage == 80 ) {
        $("h1").textContent = `Wonderful! ${percentage}%`;
        h3.textContent = "You definitely know a thing or two about the Marvel Universe, and have definitely seen some movies! I mean, who hasn't?! There's so MANY of them!";
        $("h1").appendChild(h3);
        $(".SectionAnswerOptions").setAttribute("src", "pictures/80.jpg");
        $(".SectionAnswerOptions").style.backgroundImage = "url(pictures/80.jpg)";
        $(".SectionAnswerOptions").style.height = "340px";
    }
    else if ( percentage == 70 ) {
        $("h1").textContent = `Good job! ${percentage}%`;
        h3.textContent = "Passable knowledge, nothing to scoff at! Although I wouldn't brag to your friends about it...";
        $("h1").appendChild(h3);
        $(".SectionAnswerOptions").setAttribute("src", "pictures/70.jpg");
        $(".SectionAnswerOptions").style.backgroundImage = "url(pictures/70.jpg)";
        $(".SectionAnswerOptions").style.height = "340px";
    }
    else if ( percentage == 60 ) {
        $("h1").textContent = `! ${percentage}%`;
        h3.textContent = `What a SUPER FAN! You must know EVERY SUPERHERO and EVERY BACKSTORY! Have you ever done anything else in your life but live for the Marvel Universe?! <br> You should probably go outside and meet some people...`;
        $("h1").appendChild(h3);
        $(".SectionAnswerOptions").setAttribute("src", "pictures/60.jpg");
        $(".SectionAnswerOptions").style.backgroundImage = "url(pictures/60.jpg)";
        $(".SectionAnswerOptions").style.height = "340px";
    }
    else if ( percentage == 50 ) {
        $("h1").textContent = `Just Squeaked it: ${percentage}%`;
        h3.textContent = "At this point, you passed, but I'm not totally sure it's not just luck that you clicked the right answer by mistake somewhere, but you passed! Go you!";
        $("h1").appendChild(h3);
        $(".SectionAnswerOptions").setAttribute("src", "pictures/50.jpg");
        $(".SectionAnswerOptions").style.backgroundImage = "url(pictures/50.jpg)";
        $(".SectionAnswerOptions").style.height = "400px";
    }
    else if ( percentage < 50 ) {
        $("h1").textContent = `${percentage}%`;
        h3.textContent = "Well, the good thing is: this is just some online trivia game with no impact on real life. But I'd go Google some things if I were you.";
        $("h1").appendChild(h3);
        $(".SectionAnswerOptions").setAttribute("src", "pictures/less.jpg");
        $(".SectionAnswerOptions").style.backgroundImage = "url(pictures/less.jpg)";
        $(".SectionAnswerOptions").style.height = "340px";
    }
    
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
        $(".SectionBottom").querySelector("p").textContent = (`${questionNumber} of 10`);
        questionNumber++
    } 
    else { 
        $(".SectionBottom").querySelector("p").textContent = ""
        results();
    }
}  

const nextQuestion = () => {
    getScore();
    $("#SectionTop").querySelector("h1").textContent = "";
    $("#SectionAnswerOptions").querySelector("#answer1").nextElementSibling.textContent = "";
    $("#SectionAnswerOptions").querySelector("#answer2").nextElementSibling.textContent = "";
    let ele = document.getElementsByName("answer");
    for( let i = 0; i < ele.length; i++)
        ele[i].checked = false;
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
    