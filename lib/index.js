var Game = require('./Game.js');
var canvas = document.querySelector('#game');
var context = canvas.getContext('2d');
var leaderboard = JSON.parse(localStorage.getItem('score')) || []; 
var scoreOutput = document.querySelector('.scoreboard');
var newGame = new Game();
var difficulty = 100;
var difficultyCounter = 1;
var upButton = document.querySelector('.up-button');
var downButton = document.querySelector('.down-button');
var difficultyDisplay = document.querySelector('.difficulty');

populateLeaderboard(leaderboard, scoreOutput);
newGame.createSnake();
requestAnimationFrame(frameRate);

upButton.addEventListener('click', increaseDifficulty);
downButton.addEventListener('click', decreaseDifficulty)
window.addEventListener('keydown', changeDirection);

function increaseDifficulty(e) {
  e.preventDefault();
  if (difficultyCounter < 4) {
  difficultyCounter++;
  }
  adjustDifficulty(difficultyCounter);
}

function decreaseDifficulty(e) {
  e.preventDefault();
  if (difficultyCounter > 1) {
    difficultyCounter--;
  }
  adjustDifficulty(difficultyCounter);
}

function adjustDifficulty(difficultyCounter) {
  if (difficultyCounter === 1) {
    difficultyDisplay.innerText = 'Easy';
    difficulty = 100;
  } else if (difficultyCounter === 2) {
    difficultyDisplay.innerText = 'Medium';
    difficulty = 70;
  } else if (difficultyCounter === 3) {
    difficultyDisplay.innerText = 'Hard';
    difficulty = 45;
  } else if (difficultyCounter === 4) {
    difficultyDisplay.innerText = 'Insane';
    difficulty = 20;
  }
}

function frameRate() {
  setTimeout(gameLoop, difficulty)
}

function gameLoop () {
    context.clearRect(0, 0, canvas.width, canvas.height); 
    if (newGame.isGameOver) {
      displayGameover();
      window.addEventListener('keydown', storeInitials);
     return;
    } else {
      newGame.wallCrash();
      newGame.hitFruit();
      newGame.hitTail();
      newGame.animate(context);
      document.querySelector('.score').innerText = newGame.score;
    }
    requestAnimationFrame(frameRate);
}

function changeDirection(e) {
  if (e.keyCode === 38 && newGame.head.dy !== 1) {
    newGame.head.dy = -1;
    newGame.head.dx = 0;
  } else if (e.keyCode === 39 && newGame.head.dx !== -1) {
    newGame.head.dx = 1;
    newGame.head.dy = 0
  } else if (e.keyCode === 40 && newGame.head.dy !== -1) {
    newGame.head.dy = 1;
    newGame.head.dx = 0;
  } else if (e.keyCode === 37 && newGame.head.dx !== 1) {
    newGame.head.dx = -1;
    newGame.head.dy = 0;
  }
}

function sendScoreToStorage(leaderboard, initials) {
  var score = newGame.score;
  
  if (initials === "") {
    initials = "???";
  }

  var userScore = {
    score,
    initials
  }

  
  leaderboard.push(userScore);
  var sortLeader = leaderboard.sort((a, b) => b.score > a.score);
  
  if (sortLeader.length > 10) {
    sortLeader.pop();
    var sortLeader = leaderboard.sort((a, b) => b.score > a.score);
  }
  
  localStorage.setItem('score', JSON.stringify(sortLeader));

}

function populateLeaderboard(scores, scoreBoard) {
  

  scoreBoard.innerHTML = scores.map((scores) => {
    return `
      <li class ="score-display"><p>${scores.score}</p><p>${scores.initials}</p></li>
    `
  })

}

  function displayGameover() {
    var endgameDisplay = document.querySelector('.endgame-display');
    endgameDisplay.innerHTML += 
      ` <div class="gameover-text font-gradient">GAME OVER!!!</div>
        <div class="initials-text font-gradient">ENTER YOUR INITIALS:</div>
        <input type="text" name="initials" class="initials-input" maxlength="3" style="text-transform:uppercase" placeholder="AAA">
       `
       window.addEventListener('keydown', storeInitials);
       
    }
  
  function storeInitials(e) {
    var userInitials = document.querySelector('.initials-input');
    var rawInitials = userInitials.value;
    var initials = rawInitials.toUpperCase();

    userInitials.focus();

    if (e.keyCode === 13) {
      sendScoreToStorage(leaderboard, initials);
      populateLeaderboard(leaderboard, scoreOutput);
      removeGameOver();
      newGame = new Game();
      newGame.createSnake();
      requestAnimationFrame(frameRate);    
      return;
    }

  }

  
  function removeGameOver() {
    var gameText = document.querySelector('.gameover-text');
    var intialsText = document.querySelector('.initials-text');
    var intialsInput = document.querySelector('.initials-input');

    gameText.remove();
    intialsText.remove();
    intialsInput.remove();
  }




