var Head = require('./Head.js');
var Fruit = require('./Fruit.js');

var head = new Head(400, 300, 'rgb(0, 250, 0)', 0, 0);
var fruit = new Fruit();

var canvas = document.querySelector('#game');
var context = canvas.getContext('2d');
var isGameOver = false;
var blocks = [head];
var fruits = [fruit];
var score = 0;
var scoreValue = document.querySelector('.score');
var leaderboard = JSON.parse(localStorage.getItem('score')) || []; 
var scoreOutput = document.querySelector('.scoreboard');


populateLeaderboard(leaderboard,scoreOutput);

requestAnimationFrame(gameLoop);

window.addEventListener('keydown', changeDirection);


function gameLoop () {
  setTimeout(function() {
  context.clearRect(0, 0, canvas.width, canvas.height); 

  if (isGameOver) {
    alert('game over');

    sendScoreToStorage(leaderboard);

    populateLeaderboard(leaderboard,scoreOutput);
    return;

  } else {
    animate();
  }

  requestAnimationFrame(gameLoop);
}, 100);
}

function isCollidingWith(object) {
  return !(
    blocks[0].x + blocks[0].width < object.x ||
    blocks[0].y + blocks[0].height < object.y ||
    blocks[0].x > object.x + object.width || 
    blocks[0].y > object.y + object.height
  );
}

function animate() {
  blocks.unshift(new Head(head.x, head.y, 'rgb(0, 250, 0)', 0, 0));
  blocks.pop();
  head.move();
  
  fruits.forEach(function(fruit){
    fruit.draw(context);
  })
  
  blocks.forEach(function (block) {
    block.draw(context);
    
  
    blocks.forEach(function (block) {
      if (blocks[0].x !== blocks[0].x && blocks[0].y !== blocks[0].y && isCollidingWith(blocks)) {
        isGameOver = true;
      } else if (block.x > 797 || block.x === 0 || block.y > 647 || block.y === -2.5) {
        isGameOver = true;
      } else if (isCollidingWith(fruit)) {
        fruit.x = Math.floor(Math.random() * (800 - 0) / 20) * 20 + 0;
        fruit.y = Math.floor(Math.random() * (600 - 0) / 20) * 20 + 0;
        score++;
        scoreValue.innerText = score;
        growSnake(block);
      }
    })
  });
}

function growSnake(block) {
  if (head.dy === 1) {
    blocks.push(new Head(block.x, block.y - 20, 'rgb(0, 250, 0)', 0, 0));
    blocks.push(new Head(block.x, block.y - 40, 'rgb(0, 250, 0)', 0, 0));
    } else if (head.dy === -1) {
      blocks.push(new Head(block.x, block.y + 20, 'rgb(0, 250, 0)', 0, 0));
      blocks.push(new Head(block.x, block.y + 40, 'rgb(0, 250, 0)', 0, 0));
    } else if (head.dx === 1) {
      blocks.push(new Head(block.x - 20, block.y, 'rgb(0, 250, 0)', 0, 0));
      blocks.push(new Head(block.x - 40, block.y, 'rgb(0, 250, 0)', 0, 0));
    } else if (head.dx === -1) {
      blocks.push(new Head(block.x + 20, block.y, 'rgb(0, 250, 0)', 0, 0));
      blocks.push(new Head(block.x + 40, block.y, 'rgb(0, 250, 0)', 0, 0));
    }
}

function changeDirection(e) {
  if (e.keyCode === 38 && head.dy !== 1) {
    head.dy = -1;
    head.dx = 0;
  } else if (e.keyCode === 39 && head.dx !== -1) {
    head.dx = 1;
    head.dy = 0
  } else if (e.keyCode === 40 && head.dy !== -1) {
    head.dy = 1;
    head.dx = 0;
  } else if (e.keyCode === 37 && head.dx !== 1) {
    head.dx = -1;
    head.dy = 0;
  }
}

function sendScoreToStorage(leaderboard) {
  var userScore = {
    score,
    initials: 'TIM'
  }
  
  leaderboard.push(userScore);
  var sortLeader = leaderboard.sort((a, b) => b.score > a.score)
  localStorage.setItem('score', JSON.stringify(sortLeader));
}


function populateLeaderboard(scores, scoreBoard){
  var orderedScore = scores.sort((a, b) => b.score > a.score);
  
  scoreBoard.innerHTML = orderedScore.map((scores) => {
    return `
      <li class ="score-display">${scores.score}</li>
    `
  })
 }

