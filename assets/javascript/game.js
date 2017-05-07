//sample words
var word = "hello";

// splitting the string into an array
var letters = word.split("");

//getting all the letters from the dom.
var one = document.getElementById("letter1");
var two = document.getElementById("letter2");
var three = document.getElementById("letter3");
var four = document.getElementById("letter4");
var five = document.getElementById("letter5");

//creating the counter
var counter = 0;

// hang man draw
var hanger = 0;

//empty array
var checkAlphabets = [];

// array of other alphabets
var otherAlphabets = ["a", "b", "c", "d", "f", "g", "i", "j", "k", "m", "n", "p", "q", "r", "s",
  "t", "u", "v", "w", "x", "y", "z"];

//key functions to check for word "hello"
document.onkeyup = function(key) {
  if (key.key === "h") {
    one.innerHTML = "H";
    // one.style.backgroundColor = "yellow";
    checkWin();
  }
  if (key.key === "e") {
    two.innerHTML = "E";
    // two.style.backgroundColor = "yellow";
    checkWin();
  }
  if (key.key === "l") {
    three.innerHTML = "L";
    four.innerHTML = "L";
    // three.style.backgroundColor = "yellow";
    // four.style.backgroundColor = "yellow";
    checkWin();
  }
  if (key.key === "o") {
    five.innerHTML = "O";
    // five.style.backgroundColor = "yellow";
    checkWin();
  }
  //-----working logic!
  // else if(key.key === "a" ||key.key === "b" ||key.key === "c" ||key.key === "d"
  // ||key.key === "f" ||key.key === "g" ||key.key === "i" ||key.key === "j"
  // ||key.key === "k"||key.key === "m"||key.key === "n"||key.key === "p"
  // ||key.key === "q"||key.key === "r"||key.key === "s"||key.key === "t"
  // ||key.key === "u"||key.key === "v"||key.key === "w"||key.key === "x"
  // ||key.key === "y"||key.key === "z"){
  //   console.log(counter);
  //   counter++;
  //   checkLose();
  // }


  //for loop that iterates through the otherAlphabets array
  for (var j = 0; j < otherAlphabets.length; j++) {
    //checks if the key pressed is a part of the otherAlphabets
    if (key.key === otherAlphabets[j]) {

      //if it is then splice it out and store it in alph
      var alph = otherAlphabets.splice(j, 1);
      //push alph into the checkAlphabets array
      checkAlphabets.push(alph[0]);

      console.log(checkAlphabets);

//----------- this line is supposed to console.log that I already entered a specific alphabet
      // //for loop to iterate through checkAlphabets
      // for (var k = 0; k < checkAlphabets.length; k++) {
      //  //compares spliced value to the checkAlphabets array
      //   if (checkAlphabets[k] == alph) {
      //     console.log("You already entered this alphabet:" + alph);
      //   }
      // }
      counter++;
      checkLose();
    }
  }
}

function checkLose() {
  if (counter == 1) {
    hang1();
  }
  if (counter == 2) {
    hang2();
  }
  if (counter == 3) {
    hang3();
  }
  if (counter == 4) {
    hang4();
  }
  if (counter == 5) {
    hang5();
  }
  if (counter == 6) {
    hang6();
  }
  if (counter == 7) {
    hang7();
  }
  if (counter == 8) {
    hang8();
  }

}

function checkWin() {
  if (one.innerHTML == "H" && two.innerHTML == "E" &&
    three.innerHTML == "L" && four.innerHTML == "L" && five.innerHTML == "O") {
    var arr = [one, two, three, four, five];
    for (var i = 0; i < arr.length; i++) {
      arr[i].style.backgroundColor = "yellow";
    }
    winText();
  }
}
//canvas element for stick figure
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

function hang1() {
  //hangone--- first line
  ctx.moveTo(0, 100);
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
  ctx.font = "50px Arial";
  ctx.fillText("You Lose", 300, 250);
}

function winText() {
  //writing you lose
  ctx.font = "50px Arial";
  ctx.fillText("You Win!", 300, 250);
}
