let quizContent = ["StartQuiz", "q1", "q2", "q3", "q4", "q5", "q6", "q7"];

let q1a1 = document.querySelector("#q1a1");
let q1a2 = document.querySelector("#q1a2");
let q1a3 = document.querySelector("#q1a3");
let q1a4 = document.querySelector("#q1a4");

let q2a1 = document.querySelector("#q2a1");
let q2a2 = document.querySelector("#q2a2");
let q2a3 = document.querySelector("#q2a3");
let q2a4 = document.querySelector("#q2a4");

let q3a1 = document.querySelector("#q3a1");
let q3a2 = document.querySelector("#q3a2");
let q3a3 = document.querySelector("#q3a3");
let q3a4 = document.querySelector("#q3a4");

let q4a1 = document.querySelector("#q4a1");
let q4a2 = document.querySelector("#q4a2");
let q4a3 = document.querySelector("#q4a3");
let q4a4 = document.querySelector("#q4a4");

let q5a1 = document.querySelector("#q5a1");
let q5a2 = document.querySelector("#q5a2");
let q5a3 = document.querySelector("#q5a3");
let q5a4 = document.querySelector("#q5a4");

let shstartquiz = document.querySelector("#shstartquiz");
let shq1 = document.querySelector("#shq1");
let shq2 = document.querySelector("#shq2");
let shq3 = document.querySelector("#shq3");
let shq4 = document.querySelector("#shq4");
let shq5 = document.querySelector("#shq5");
let shq6 = document.querySelector("#shq6");
let shq7 = document.querySelector("#shq7");
let cssreset = document.querySelector("#reset");

//-------------------------------------START Show Hide Test
shstartquiz.addEventListener("click", function () {
  UpdateCssHidden("StartQuiz");
});

// cssreset.addEventListener("click", showAllcssHidden());










shstartquiz.addEventListener("click", function () {
  console.log("start quiz");
});
//------------------------------------------Q1 Start
q1a1.addEventListener("click", function () {
  // event.stopPropagation();
  console.log("q1a1");
  UpdateQuizArea("q1a1");
});
q1a2.addEventListener("click", function () {
  // event.stopPropagation();
  console.log("q1a2");
  UpdateQuizArea("q1a2");
});
q1a3.addEventListener("click", function () {
  // event.stopPropagation();
  console.log("q1a3");
  UpdateQuizArea("q1a3");
});
q1a4.addEventListener("click", function () {
  // event.stopPropagation();
  console.log("q1a4");
  UpdateQuizArea("q1a4");
});
//-----------------------------------------Q1 END

//-----------------------------------------Q2 Start
q2a1.addEventListener("click", function () {
  // event.stopPropagation();
  console.log("q2a1");
  UpdateQuizArea("q2a1");
});
q2a2.addEventListener("click", function () {
  // event.stopPropagation();
  console.log("q2a2");
  UpdateQuizArea("q2a2");
});
q2a3.addEventListener("click", function () {
  // event.stopPropagation();
  console.log("q2a3");
  UpdateQuizArea("q2a3");
});
q2a4.addEventListener("click", function () {
  // event.stopPropagation();
  console.log("q2a4");
  UpdateQuizArea("q2a4");
});
//-----------------------------------------Q2 END

//-----------------------------------------Q3 Start
q3a1.addEventListener("click", function () {
  // event.stopPropagation();
  console.log("q3a1");
  UpdateQuizArea("q3a1");
});
q3a2.addEventListener("click", function () {
  // event.stopPropagation();
  console.log("q3a2");
  UpdateQuizArea("q3a2");
});
q3a3.addEventListener("click", function () {
  // event.stopPropagation();
  console.log("q3a3");
  UpdateQuizArea("q3a3");
});
q3a4.addEventListener("click", function () {
  // event.stopPropagation();
  console.log("q3a4");
  UpdateQuizArea("q3a4");
});
//-----------------------------------------Q3 END

//-----------------------------------------Q4 Start
q4a1.addEventListener("click", function () {
  // event.stopPropagation();
  console.log("q4a1");
  UpdateQuizArea("q4a1");
});
q4a2.addEventListener("click", function () {
  // event.stopPropagation();
  console.log("q4a2");
  UpdateQuizArea("q4a2");
});
q4a3.addEventListener("click", function () {
  // event.stopPropagation();
  console.log("q4a3");
  UpdateQuizArea("q4a3");
});
q4a4.addEventListener("click", function () {
  // event.stopPropagation();
  console.log("q4a4");
  UpdateQuizArea("q4a4");
});
//-----------------------------------------Q4 END

//-----------------------------------------Q5 Start
q5a1.addEventListener("click", function () {
  // event.stopPropagation();
  console.log("q5a1");
  UpdateQuizArea("q5a1");
});
q5a2.addEventListener("click", function () {
  // event.stopPropagation();
  console.log("q5a2");
  UpdateQuizArea("q5a2");
});
q5a3.addEventListener("click", function () {
  // event.stopPropagation();
  console.log("q5a3");
  UpdateQuizArea("q5a3");
});
q5a4.addEventListener("click", function () {
  // event.stopPropagation();
  console.log("q5a4");
  UpdateQuizArea("q5a4");
});
//-----------------------------------------Q5 END








function showAllcssHidden() { //resets the css display to block from none
  for (i = 0; i < quizContent.length; i++) {
    document.getElementById(quizContent[i]).style.block = block;
  }
}

function hideALLcss() {
  for (i = 0; i < quizContent.length; i++) {
    document.getElementById(quizContent[i]).style.block = none;
  }
}


function UpdateCssHidden(preSubmit) {//hides all but next element in array
  hideALLcss();
  let t; //array position of variable passed
  for (i = 0; i < quizContent.length; i++) {//finds array position of variable passed
    if (quizContent[i] == preSubmit) {
      t = i;
    }
  }
  if( (t+1)==quizContent.length){ //if laste element in array
    document.getElementById(quizContent[0]).style.block = block;
  }else if( t < quizContent.length){
    t++;
    document.getElementById(quizContent[t]).style.block = block;
  }
};









function UpdateQuizArea(buttonID) {//currently logs which if statement it is in from button click
  if (buttonID.substr(0, 2) == "q1") {
    //fcall prevAnswer = answer(buttonID)return correct wrong, increment,

    console.log("Update " + buttonID.substr(0, 4));
  } else if (buttonID.substr(0, 2) == "q2") {
    console.log("Update " + buttonID.substr(0, 4));
  } else if (buttonID.substr(0, 2) == "q3") {
    console.log("Update " + buttonID.substr(0, 4));
  } else if (buttonID.substr(0, 2) == "q4") {
    console.log("Update " + buttonID.substr(0, 4));
  } else if (buttonID.substr(0, 2) == "q5") {
    console.log("Update " + buttonID.substr(0, 4));
  } else {
    console.log("Update " + buttonID.substr(0, 4));
  };


}


let QuizQuestions = {
  // obj array : [ 0 answer choose , 1 correct answer, 2 # of buttons(questions), 3 question text, 4 h #,5 Subtext, 6 h #, 7 A1, 8 A2, 9 A3, 10 A4]
  Q0: [0, 0, 1, "Coding Quiz Challenge", "h1", "Try to answer the following code-related questions within the time \n limit. Keep in mind that incorrect answers will penalize your scoretime \n by ten seconds!", "h6"],
  q2: [0, 9, 4, "Commonly used data types DO NOT include:", "h2", "subtext", "h6", " 1. strings ", " 2. boolean ", " 3. alerts ", " 4. numbers "],
  Q2: [0, 9, 4, "The condition in an if/else statement is enclosed within _____.", "h2", "subtext", "h6", " 1. quotes ", " 2. curly brackets ", " 3. parentheses ", " 4. square brackets "],
  Q3: [0, 10, 4, "Arrays in JavaScript can be used to store ______.", "h2", "subtext", "h6", " 1. numbers and strings ", " 2. other arrays ", " 3. bookmarks ", " 4. all of the above "],
  Q4: [0, 9, 4, "String values must be enclosed within_____ when being assigned to variables.", "h2", "subtext", "h6", " 1. commas ", " 2. curly brackets ", " 3. quotes ", " 4. parentheses "],
  Q5: [0, 10, 4, "A very useful tool used during development and debugging for printing content to the debugger is: ", "h2", "subtext", "h6", " 1. JavaScript ", " 2. terminal / bash ", " 3. for loops ", " 4. console.log "],
  Q6: [0, 0, 0, "All done!", "h2", "Your final score is ", "."]

};


// function UpdateQuizQuestionsData {

//     let 
// }

/* <script>
function myFunction() {
  document.getElementById("panel").style.display = "block";
}
</script> */