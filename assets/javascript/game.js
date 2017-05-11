//getting the level text
var levelInfo = document.getElementById("level");
//getting the div that contains the blanks in order to append values
var blank = document.getElementById("blanks");
//getting the guesses remaining
var guess = document.getElementById('guess');
//getting space for wrong letters entered
var wrongLetters = document.getElementById('wrongLetters');

//setting the level to one
level = 1;

//game words (note:logic only works with words that don't have repeating letters)
var words = ["study", "pencil", "history"];

// to run through each of the words in the list one by one. Each level the word no goes up by one
var wordNo = 0;

//counter for each time a letter is wrongly guessed
var counter = 0;

//creates blanks for any word in the array
function createBlanks() {
  wrongLetters.innerHTML = "";
  blank.innerHTML = "";
  //reseting the counter to zero
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

//empty array used later to compare letters entered and winning letters
var letters = [];

function gameBegin() {
  document.onkeyup = function(press) {
    var pos = words[wordNo].indexOf(press.key);
    if (pos >= 0) {
      document.getElementsByClassName("letter")[pos].innerHTML = press.key;
      letters.push(press.key);
      rightLetter.currentTime = 0;
      rightLetter.play();
      console.log(letters);
      checkWin();
    }
    if (pos == -1) {
      var p = document.createElement("p");
      p.innerHTML = press.key;
      p.className = "wrong";
      wrongLetters.appendChild(p);
      wrongLetter.currentTime = 0;
      wrongLetter.play();
      counter++;
      checkLose();
    }
  }
}
//this is the starting
if (level == 1) {
  gameBegin();
}

//check level, with the highest level being 3
function checkLevel() {
  if (level < 4) {
    winSound.currentTime = 0;
    winSound.play();
    guess.innerHTML = 8;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    gameBegin();
  } else {
    console.log("you've reached level 4");
    finalWin.currentTime = 0;
    finalWin.play();
    //celebration text on canvas
    ctx.font = "50px Arial";
    ctx.fillText("Hooray!!", 200, 250);
    levelInfo.innerHTML = "You Won!";
  }
}

//logic to check for a win
function checkWin() {
  var jointLetters = letters.join("");
  var resultArray = [];
  for (var i = 0; i < words[wordNo].length; i++) {
    for (var j = 0; j < jointLetters.length; j++) {
      if (words[wordNo][i] == jointLetters[j]) {
        resultArray.push(words[wordNo][i]);
      }
    }
  }
  if (resultArray.join("") == words[wordNo]) {
    alert(words[wordNo]);
    level++;
    levelInfo.innerHTML = level;
    wordNo++;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    checkLevel();
    createBlanks();
    counter = 0;
    console.log("You've reached level : " + level);
    letters = [];
  }
}

//canvas element for stick figure
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

//logic to check for a lose
function checkLose() {
  if (counter == 1) {
    guess.innerHTML = 8 - counter;
    ctx.moveTo(100, 100);
    ctx.lineTo(250, 100);
    ctx.stroke();
  }
  if (counter == 2) {
    guess.innerHTML = 8 - counter;
    ctx.lineTo(250, 150);
    ctx.stroke();
  }
  if (counter == 3) {
    guess.innerHTML = 8 - counter;
    ctx.beginPath();
    ctx.arc(250, 180, 30, 0, 2 * Math.PI);
    ctx.stroke();
  }
  if (counter == 4) {
    guess.innerHTML = 8 - counter;
    ctx.moveTo(250, 210);
    ctx.lineTo(250, 300);
    ctx.stroke();
  }
  if (counter == 5) {
    guess.innerHTML = 8 - counter;
    ctx.lineTo(300, 350);
    ctx.stroke();
  }
  if (counter == 6) {
    guess.innerHTML = 8 - counter;
    ctx.moveTo(250, 300);
    ctx.lineTo(200, 350);
    ctx.stroke();
  }
  if (counter == 7) {
    guess.innerHTML = 8 - counter;
    ctx.moveTo(250, 225);
    ctx.lineTo(300, 270);
    ctx.stroke();
  }
  if (counter == 8) {
    guess.innerHTML = 8 - counter;
    ctx.moveTo(250, 225);
    ctx.lineTo(200, 270);
    ctx.stroke();
    //writing you lose
    ctx.font = "30px Arial";
    ctx.fillText("You Lose", 300, 250);
    levelInfo.innerHTML = "Don't give up! Hit the refresh button to try again!";
    //changing other effects on html page
    guess.style.color = "red";
    loseSound.currentTime = 0;
    loseSound.play();
  }
}
