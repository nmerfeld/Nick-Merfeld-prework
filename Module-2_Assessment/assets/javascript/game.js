/* jshint esversion: 6 */

const words = ["REFEREE", "BASKET", "OFFENSE", "DEFENSE", "COACH", "STEAL", "BLOCK", "DRIBBLE", "CORNER", "BACKBOARD", "ASSIST", "OVERTIME", "TRAVELLING", "TURNOVER"]

var guessesLeft = 12;
var numWins = 0;
var lettersGuessed = [];
var gameOver = false;
var currWord; // word being solved for
var lettersLeft = false; // boolean flag for word not solved
// while(!gameOver){


var win = new Audio("./assets/images/tada.mp3");

function display(){
  document.getElementById("numWins").innerText = numWins;
  lettersLeft = false;
  // create current word representation based on guessed letters
  var wordString = "";
  for(var i = 0; i < currWord.length; i++){
    if(lettersGuessed.includes(currWord[i])){
      wordString += currWord[i] + " ";
    }
    else{
      wordString += "_ ";
      lettersLeft = true;
    }
  }
  console.log("wordString = ", wordString);
  document.getElementById("currWord").innerText = wordString;
  document.getElementById("guessesLeft").innerText = guessesLeft;

  var letters = "";
  for(var i = 0; i < lettersGuessed.length; i++){
    letters += lettersGuessed[i] + " ";
  }

  document.getElementById("lettersGuessed").innerText = letters;

}

document.onkeydown = function(event){
  // make sure guess is a letter by ASCII value
  if((event.which >= 65) && event.which <= 90){
    makeGuess(event.key.toUpperCase());
    display();
    checkGameStatus();
  }

  if(gameOver){
    console.log("key game over");
    reset();
    display();
  }

}

// letter is upper case
function makeGuess(letter){
  if(!gameOver){
    if(!lettersGuessed.includes(letter)){ // new letter being guessed
      if(!currWord.includes(letter)){
        guessesLeft--;
      }
      lettersGuessed.push(letter);
    }
  }

  // else{
  //   console.log("game over");
  //   reset();
  // }
}

function reset(){
  guessesLeft = 12;
  lettersGuessed = [];
  console.log("letters guessed reset length", lettersGuessed.length);
  lettersLeft = false;
  gameOver = false;

  currWord = words[Math.floor(Math.random() * words.length)];
  console.log("currWord is", currWord);
}

function checkGameStatus(){

  // check for win
  if(lettersLeft == false){
    console.log("WIN");
    gameOver = true;
    win.play();
    numWins++;
  }

  // check for loss
  if(guessesLeft <= 0){
    console.log("LOSS");
    gameOver = true;
  }


}
