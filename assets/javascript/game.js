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

  //getting the picture for the stick figure
  var pic = document.getElementById('pic');

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
  if (level <= words.length) {
    winSound.currentTime = 0;
    winSound.play();
    guess.innerHTML = 8;
    pic.src = 'assets/images/hangManImg/hang0.png';
    gameBegin();
  } else {
    console.log("you've reached the final level!");
    finalWinSound.currentTime = 0;
    finalWinSound.play();
    //celebration text
    levelInfo.innerHTML = "Congratulations! You've won!";
    levelInfo.style.color = 'green';
    //changing the final win picture
    pic.src = 'assets/images/hangManImg/hangWin.png';
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
    pic.src = 'assets/images/hangManImg/hang0.png';
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
    pic.src = 'assets/images/hangManImg/hang1.png';
  }
  else if (counter == 2) {
    //draw noose
    pic.src = 'assets/images/hangManImg/hang2.png';
  }
  else if (counter == 3) {
    //draw head
    pic.src = 'assets/images/hangManImg/hang3.png';
  }
  else if (counter == 4) {
    //draw body
    pic.src = 'assets/images/hangManImg/hang4.png';
  }
  else if (counter == 5) {
    //draw right leg
    pic.src = 'assets/images/hangManImg/hang5.png';
  }
  else if (counter == 6) {
    //draw left leg
    pic.src = 'assets/images/hangManImg/hang6.png';
  }
  else if (counter == 7) {
    //draw right arm
    pic.src = 'assets/images/hangManImg/hang7.png';
  }
  else if (counter == 8) {
    //draw left arm
    pic.src = 'assets/images/hangManImg/hang8.png';
    //changing other effects on html page
    guess.style.color = "red";
    //sound
    loseSound.currentTime = 0;
    loseSound.play();
    //level change
    levelInfo.innerHTML = 'You Lose.. Hit the refresh button to try again';
    levelInfo.style.color = 'red';
    blank.innerHTML = "";
  }
}
// intialize the game
(function initialize() {
  initGlobals();
  createBlanks();
  setSounds();
  gameBegin();
})(); //--- IIFE - Immediately invoked function expression
