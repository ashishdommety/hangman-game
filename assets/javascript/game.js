//removed the keyword 'var' so that i could declare a global variable inside the function
function initGlobals() {
  //getting the level text
  levelInfo = document.getElementById("level");
  //getting the div that contains the blanks in order to append values
  blank = document.getElementById("blanks");
  //getting the guesses remaining
  guess = document.getElementById('guess');
  //getting space for wrong letters entered
  wrongLetters = document.getElementById('wrongLetters');

  //setting the level to one
  level = 1;

  //game words
  words = ["pencil", "chalkboard", "trigonometry"];

  // to run through each of the words in the list one by one. Each level the word number goes up by one
  wordNo = 0;

  //counter for each time a letter is wrongly guessed
  counter = 0;

  //empty array used later to compare letters entered and winning letters
  letters = [];

  //empty array for wrong letters
  wrongLetterArr = [];

  //canvas element for stick figure
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
}


//creates blanks for any word in the array
function createBlanks() {
  wrongLetters.innerHTML = "";
  blank.innerHTML = "";
  wrongLetterArr = [];
  //reseting the counter to zero
  counter = 0;
  for (var i = 0; i < words[wordNo].length; i++) {
    var div = document.createElement("div");
    div.innerHTML = "_";
    div.className = "letter";
    blank.appendChild(div);
  }
}


function setSounds() {
  //sound effects
  winSound = new Audio();
  winSound.src = "assets/sounds/winSound.mp3";

  loseSound = new Audio();
  loseSound.src = "assets/sounds/loseSound.flac";

  rightLetterSound = new Audio();
  rightLetterSound.src = "assets/sounds/rightLetterSound.mp3";

  wrongLetterSound = new Audio();
  wrongLetterSound.src = "assets/sounds/wrongLetterSound.mp3";

  finalWinSound = new Audio();
  finalWinSound.src = "assets/sounds/finalWin.wav";

  errorSound = new Audio();
  errorSound.src = "assets/sounds/errorSound.wav";
}

function fillBlanks(keyPressed, word){
  var pos = word.indexOf(keyPressed);
  if(pos >= 0){
    document.getElementsByClassName('letter')[pos].innerHTML = keyPressed;
    letters[pos] = keyPressed;
    var temp = word.replace(keyPressed,'$');
    //calling recursively to handle multiple letters
    fillBlanks(keyPressed, temp);
  }
  else {
    return;
  }
}

function gameBegin() {
  document.onkeyup = function(press) {
    if (words[wordNo].includes(press.key)) {
      //write a function that takes real word, finds instances recursively and assigns to correct position in value.
      var wordCopy = words[wordNo];
      fillBlanks(press.key, wordCopy);
      rightLetterSound.currentTime = 0;
      rightLetterSound.play();
      console.log(letters);
      checkWin();
    }
    else {
      if(wrongLetterArr.includes(press.key)){
        console.log("you've already entered that letter!");
        errorSound.currentTime = 0;
        errorSound.play();
      }
      else{
        wrongLetterArr.push(press.key);
        var p = document.createElement("p");
        p.innerHTML = press.key;
        p.className = "wrong";
        wrongLetters.appendChild(p);
        wrongLetterSound.currentTime = 0;
        wrongLetterSound.play();
        counter++;
        checkLose();
      }
    }
  }
}

//check level, with the highest level being 3
function checkLevel() {
  if (level < words.length) {
    winSound.currentTime = 0;
    winSound.play();
    guess.innerHTML = 8;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    gameBegin();
  } else {
    console.log("you've reached the final level!");
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
  if (jointLetters == words[wordNo]) {
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

//logic to check for a lose
function checkLose() {
  guess.innerHTML = 8 - counter;
  if (counter == 1) {
    //draw stick one
    ctx.moveTo(100, 100);
    ctx.lineTo(250, 100);
    ctx.stroke();
  }
  else if (counter == 2) {
    //draw noose
    ctx.lineTo(250, 150);
    ctx.stroke();
  }
  else if (counter == 3) {
    //draw head
    ctx.beginPath();
    ctx.arc(250, 180, 30, 0, 2 * Math.PI);
    ctx.stroke();
  }
  else if (counter == 4) {
    //draw body
    ctx.moveTo(250, 210);
    ctx.lineTo(250, 300);
    ctx.stroke();
  }
  else if (counter == 5) {
    //draw right leg
    ctx.lineTo(300, 350);
    ctx.stroke();
  }
  else if (counter == 6) {
    //draw left leg
    ctx.moveTo(250, 300);
    ctx.lineTo(200, 350);
    ctx.stroke();
  }
  else if (counter == 7) {
    //draw right arm
    ctx.moveTo(250, 225);
    ctx.lineTo(300, 270);
    ctx.stroke();
  }
  else if (counter == 8) {
    //draw left arm
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
// intialize the game
(function initialize() {
  initGlobals();
  createBlanks();
  setSounds();
  gameBegin();
})(); //--- IIFE - Immediately invoked function expression
