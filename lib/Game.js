var Head = require('./Head.js');
var Fruit = require('./Fruit.js');

var head = new Head(61, 41, 'rgb(0, 250, 0)', 0, 0);
var fruit = new Fruit();

var canvas = document.querySelector('#game');
var context = canvas.getContext('2d');
var isGameOver = false;
var blocks = [head];
var fruits = [fruit];
var score = 0;
var scoreValue = document.querySelector('.score');


requestAnimationFrame(gameLoop);

window.addEventListener('keydown', changeDirection);


function gameLoop () {
  setTimeout(function() {
  context.clearRect(0, 0, canvas.width, canvas.height); 

  if (isGameOver) {
    gameOver()
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

function gameOver() {
  alert('game over');
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
    
  
    blocks.forEach(function (block, i) {
      if (block.x !== block.x && block.y !== block.y && isCollidingWith(blocks)) {
        isGameOver = true;
      } else if (block.x > 782 || block.x < .5 || block.y > 642 || block.y < .5) {
        isGameOver = true;
      } else if (isCollidingWith(fruit)) {
        fruit.x = Math.floor(Math.random() * (800 - 0) / 20) * 20 + 1;
        fruit.y = Math.floor(Math.random() * (600 - 0) / 20) * 20 + 1;
        score++;
        scoreValue.innerText = score;
        growSnake(block);
      }
    })
  });
}

function growSnake(block) {
  if (head.dy === 1) {
    blocks.push(new Head(block.x, block.y, 'rgb(0, 250, 0)', 0, 0));
    blocks.push(new Head(block.x, block.y , 'rgb(0, 250, 0)', 0, 0));
    } else if (head.dy === -1) {
      blocks.push(new Head(block.x, block.y, 'rgb(0, 250, 0)', 0, 0));
      blocks.push(new Head(block.x, block.y , 'rgb(0, 250, 0)', 0, 0));
    } else if (head.dx === 1) {
      blocks.push(new Head(block.x, block.y, 'rgb(0, 250, 0)', 0, 0));
      blocks.push(new Head(block.x , block.y, 'rgb(0, 250, 0)', 0, 0));
    } else if (head.dx === -1) {
      blocks.push(new Head(block.x, block.y, 'rgb(0, 250, 0)', 0, 0));
      blocks.push(new Head(block.x , block.y, 'rgb(0, 250, 0)', 0, 0));
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