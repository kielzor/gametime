var Game = require('./Game.js');
var canvas = document.querySelector('#game');
var context = canvas.getContext('2d');
var leaderboard = JSON.parse(localStorage.getItem('score')) || []; 
var scoreOutput = document.querySelector('.scoreboard');
var newGame = new Game();
var difficulty = 100;
var score = newGame.score; 

populateLeaderboard(leaderboard, scoreOutput);
newGame.createSnake();
requestAnimationFrame(frameRate);

window.addEventListener('keydown', changeDirection);

function frameRate() {
  setTimeout(gameLoop, difficulty)
}

function gameLoop () {
    context.clearRect(0, 0, canvas.width, canvas.height); 
    if (newGame.isGameOver) {
      alert('game over');     
      sendScoreToStorage(leaderboard);
      populateLeaderboard(leaderboard, scoreOutput);
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

function sendScoreToStorage(leaderboard) {
  var score = newGame.score;
  var userScore = {
    score,
    initials: 'TIM'
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
      <li class ="score-display">${scores.score}</li>
    `
  })
}







