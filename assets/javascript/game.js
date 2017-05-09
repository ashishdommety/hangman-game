//getting the level text
var levelInfo = document.getElementById("level");
//getting the div that contains the blanks in order to append values
var blank = document.getElementById("blanks");
//getting the guesses remaining
var guess = document.getElementById('guess');
//getting space for wrong letters entered
var wrongLetters = document.getElementById('wrongLetters');

level = 1;
//sample words
var words = ["hello", "greetings", "namaste"];

// to check the word number
var wordNo = 0;

//counter for each time a letter is wrongly guessed
var counter = 0;

//creates blanks for any word in the array
function createBlanks() {
  wrongLetters.innerHTML = "";
  blank.innerHTML = "";
  var counter = 0;
  for (var i = 0; i < words[wordNo].length; i++) {
    var div = document.createElement("div");
    div.innerHTML = "_";
    div.className = "letter";
    blank.appendChild(div);
  }
}

createBlanks();

//sound effects
var winSound = new Audio();
winSound.src = "assets/sounds/winSound.mp3";

var loseSound = new Audio();
loseSound.src = "assets/sounds/loseSound.flac";

var rightLetter = new Audio();
rightLetter.src = "assets/sounds/rightLetterSound.mp3";

var wrongLetter = new Audio();
wrongLetter.src = "assets/sounds/wrongLetterSound.mp3";

var finalWin = new Audio();
finalWin.src = "assets/sounds/finalWin.wav";

//HELLO
function wordIsHello() {
  document.onkeyup = function(press) {
    // debugger;
    if (press.key === words[wordNo].charAt(0)) {
      var pos = words[wordNo].indexOf("h");
      rightLetter.currentTime = 0;
      rightLetter.play();
      // console.log(pos);
      document.getElementsByClassName("letter")[pos].innerHTML = press.key;
      checkHello();
    } else if (press.key === words[wordNo].charAt(1)) {
      var pos = words[wordNo].indexOf("e");
      rightLetter.currentTime = 0;
      rightLetter.play();
      // console.log(pos);
      document.getElementsByClassName("letter")[pos].innerHTML = press.key;
      checkHello();
    } else if (press.key === words[wordNo].charAt(2)) {
      var pos = words[wordNo].indexOf("l");
      rightLetter.currentTime = 0;
      rightLetter.play();
      // console.log(pos);
      document.getElementsByClassName("letter")[pos].innerHTML = press.key;
      document.getElementsByClassName("letter")[pos + 1].innerHTML = press.key;
    } else if (press.key === words[wordNo].charAt(4)) {
      var pos = words[wordNo].indexOf("o");
      rightLetter.currentTime = 0;
      rightLetter.play();
      // console.log(pos);
      document.getElementsByClassName("letter")[pos].innerHTML = press.key;
      checkHello();
    } else {
      wrongLetter.currentTime = 0;
      wrongLetter.play();
      var p = document.createElement("p");
      p.innerHTML = press.key;
      p.className = "wrong";
      wrongLetters.appendChild(p);
      counter++;
      checkLose();
    }
  }
}

//GREETINGS
function wordIsGreetings() {
  document.onkeyup = function(press) {
    if (press.key === words[wordNo].charAt(0)) {
      var pos = words[wordNo].indexOf("g");
      rightLetter.currentTime = 0;
      rightLetter.play();
      // console.log(pos);
      document.getElementsByClassName("letter")[pos].innerHTML = press.key;
      document.getElementsByClassName("letter")[pos + 7].innerHTML = press.key;
      checkGreetings();
    } else if (press.key === words[wordNo].charAt(1)) {
      var pos = words[wordNo].indexOf("r");
      rightLetter.currentTime = 0;
      rightLetter.play();
      // console.log(pos);
      document.getElementsByClassName("letter")[pos].innerHTML = press.key;
      checkGreetings();
    } else if (press.key === words[wordNo].charAt(2)) {
      var pos = words[wordNo].indexOf("e");
      rightLetter.currentTime = 0;
      rightLetter.play();
      // console.log(pos);
      document.getElementsByClassName("letter")[pos].innerHTML = press.key;
      document.getElementsByClassName("letter")[pos + 1].innerHTML = press.key;
      checkGreetings();
    } else if (press.key === words[wordNo].charAt(4)) {
      var pos = words[wordNo].indexOf("t");
      rightLetter.currentTime = 0;
      rightLetter.play();
      // console.log(pos);
      document.getElementsByClassName("letter")[pos].innerHTML = press.key;
      checkGreetings();
    } else if (press.key === words[wordNo].charAt(5)) {
      var pos = words[wordNo].indexOf("i");
      rightLetter.currentTime = 0;
      rightLetter.play();
      // console.log(pos);
      document.getElementsByClassName("letter")[pos].innerHTML = press.key;
      checkGreetings();
    } else if (press.key === words[wordNo].charAt(6)) {
      var pos = words[wordNo].indexOf("n");
      rightLetter.currentTime = 0;
      rightLetter.play();
      // console.log(pos);
      document.getElementsByClassName("letter")[pos].innerHTML = press.key;
      checkGreetings();
    } else if (press.key === words[wordNo].charAt(8)) {
      var pos = words[wordNo].indexOf("s");
      // console.log(pos);
      document.getElementsByClassName("letter")[pos].innerHTML = press.key;
      checkGreetings();
    } else {
      wrongLetter.currentTime = 0;
      wrongLetter.play();
      var p = document.createElement("p");
      p.innerHTML = press.key;
      p.className = "wrong";
      wrongLetters.appendChild(p);
      counter++;
      checkLose();
    }
  }
}

//NAMASTE
function wordIsNamaste(){
  document.onkeyup = function(press){
    if (press.key === words[wordNo].charAt(0)) {
      var pos = words[wordNo].indexOf("n");
      rightLetter.currentTime = 0;
      rightLetter.play();
      // console.log(pos);
      document.getElementsByClassName("letter")[pos].innerHTML = press.key;
      checkNamaste();
    }
    else if (press.key === words[wordNo].charAt(1)) {
      var pos = words[wordNo].indexOf("a");
      rightLetter.currentTime = 0;
      rightLetter.play();
      // console.log(pos);
      document.getElementsByClassName("letter")[pos].innerHTML = press.key;
      document.getElementsByClassName("letter")[pos+2].innerHTML = press.key;
      checkNamaste();
    }
    else if (press.key === words[wordNo].charAt(2)) {
      var pos = words[wordNo].indexOf("m");
      rightLetter.currentTime = 0;
      rightLetter.play();
      // console.log(pos);
      document.getElementsByClassName("letter")[pos].innerHTML = press.key;
      checkNamaste();
    }
    else if (press.key === words[wordNo].charAt(4)) {
      var pos = words[wordNo].indexOf("s");
      // console.log(pos);
      document.getElementsByClassName("letter")[pos].innerHTML = press.key;
      checkNamaste();
    }
    else if (press.key === words[wordNo].charAt(5)) {
      var pos = words[wordNo].indexOf("t");
      rightLetter.currentTime = 0;
      rightLetter.play();
      // console.log(pos);
      document.getElementsByClassName("letter")[pos].innerHTML = press.key;
      checkNamaste();
    }
    else if (press.key === words[wordNo].charAt(6)) {
      var pos = words[wordNo].indexOf("e");
      rightLetter.currentTime = 0;
      rightLetter.play();
      // console.log(pos);
      document.getElementsByClassName("letter")[pos].innerHTML = press.key;
      checkNamaste();
    }
    else{
      wrongLetter.currentTime = 0;
      wrongLetter.play();
      var p = document.createElement("p");
      p.innerHTML = press.key;
      p.className = "wrong";
      wrongLetters.appendChild(p);
      counter++;
      checkLose();
    }
  }
}

//this is the starting
if (level == 1) {
  wordIsHello();
}

//check level
function checkLevel() {
  if (level == 2) {
    winSound.currentTime = 0;
    winSound.play();
    guess.innerHTML = 8;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    wordIsGreetings();
  }
  if (level == 3) {
    winSound.currentTime = 0;
    winSound.play();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    wordIsNamaste();
  }
}

function checkHello() {
  if (document.getElementsByClassName("letter")[0].innerHTML == "h" &&
    document.getElementsByClassName("letter")[1].innerHTML == "e" &&
    document.getElementsByClassName("letter")[2].innerHTML == "l" &&
    document.getElementsByClassName("letter")[4].innerHTML == "o") {

    level++;
    levelInfo.innerHTML = level;
    // checkLevel();
    wordNo++;
    createBlanks();
    // console.log("next level!");
    alert("Hello!");
    counter = 0;
    console.log(counter);
    checkLevel();
    console.log(level);
  }
}
function checkGreetings() {
  if (document.getElementsByClassName("letter")[0].innerHTML == "g" &&
    document.getElementsByClassName("letter")[1].innerHTML == "r" &&
    document.getElementsByClassName("letter")[2].innerHTML == "e" &&
    document.getElementsByClassName("letter")[4].innerHTML == "t" &&
    document.getElementsByClassName("letter")[5].innerHTML == "i" &&
    document.getElementsByClassName("letter")[6].innerHTML == "n" &&
    document.getElementsByClassName("letter")[8].innerHTML == "s"
  ){
    level++;
    levelInfo.innerHTML = level;
    // checkLevel();
    wordNo++;
    createBlanks();
    // console.log("next level!");
    alert("Greetings!");
    counter = 0;
    console.log(counter);
    checkLevel();
    console.log(level);
  }
}
function checkNamaste(){
  if (document.getElementsByClassName("letter")[0].innerHTML == "n" &&
    document.getElementsByClassName("letter")[1].innerHTML == "a" &&
    document.getElementsByClassName("letter")[2].innerHTML == "m" &&
    document.getElementsByClassName("letter")[4].innerHTML == "s" &&
    document.getElementsByClassName("letter")[5].innerHTML == "t" &&
    document.getElementsByClassName("letter")[6].innerHTML == "e"
  ) {
    // winSound.currentTime = 0;
    // winSound.play();
    finalWin.currentTime = 0;
    finalWin.play();
    levelInfo.innerHTML = "Congratulations! You won!";
    // checkLevel();
    wordNo++;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    winText();
    createBlanks();
    // console.log("next level!");
    alert("Namaste!");
    counter = 0;
    console.log(counter);
    checkLevel();
    console.log(level);
  }
}

function checkLose() {
  if (counter == 1) {
    guess.innerHTML = 8 - counter;
    hang1();
  }
  if (counter == 2) {
    guess.innerHTML = 8 - counter;
    hang2();
  }
  if (counter == 3) {
    guess.innerHTML = 8 - counter;
    hang3();
  }
  if (counter == 4) {
    guess.innerHTML = 8 - counter;
    hang4();
  }
  if (counter == 5) {
    guess.innerHTML = 8 - counter;
    hang5();
  }
  if (counter == 6) {
    guess.innerHTML = 8 - counter;
    hang6();
  }
  if (counter == 7) {
    guess.innerHTML = 8 - counter;
    hang7();
  }
  if (counter == 8) {
    guess.innerHTML = 8 - counter;
    hang8();
    guess.style.color = "red";
    loseSound.currentTime = 0;
    loseSound.play();
  }
}

//canvas element for stick figure
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

function hang1() {
  //hangone--- first line
  ctx.moveTo(100, 100);
  ctx.lineTo(250, 100);
  ctx.stroke();
}

function hang2() {
  //hangtwo-- second line
  ctx.lineTo(250, 150);
  ctx.stroke();
}

function hang3() {
  //hangthree--- head
  ctx.beginPath();
  ctx.arc(250, 180, 30, 0, 2 * Math.PI);
  ctx.stroke();
}

function hang4() {
  //hang four--- body
  ctx.moveTo(250, 210);
  ctx.lineTo(250, 300);
  ctx.stroke();

}

function hang5() {
  //hang five--- leg right
  ctx.lineTo(300, 350);
  ctx.stroke();
}

function hang6() {
  //hang six --- leg left
  ctx.moveTo(250, 300);
  ctx.lineTo(200, 350);
  ctx.stroke();
}

function hang7() {
  //hang seven -- right arm
  ctx.moveTo(250, 225);
  ctx.lineTo(300, 270);
  ctx.stroke();
}

function hang8() {
  //hang eight-- left arm
  ctx.moveTo(250, 225);
  ctx.lineTo(200, 270);
  ctx.stroke();
  //writing you lose
  ctx.font = "30px Arial";
  ctx.fillText("You Lose", 300, 250);
  levelInfo.innerHTML = "Don't give up! Hit the refresh button to try again!";
}

//celebration text on the canvas
function winText() {
  var celebration = ["Hooray!", "Yipee!", "Awesome!", "Great Job!"];
  var win = Math.floor(Math.random() * celebration.length);
  ctx.font = "50px Arial";
  ctx.fillText(celebration[win], 200, 250);
}
