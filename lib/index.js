var GamePiece = require('./GamePiece.js');
var Head = require('./Head.js');
var Fruit = require('./Fruit.js');


var canvas = document.querySelector('#game');
var context = canvas.getContext('2d');

requestAnimationFrame(gameLoop);

window.addEventListener('keydown', changeDirection);

// var firstBlock = new GamePiece(100, 50, 10, 10, 'rgb(0, 250, 0)', 0, 5, 0, 5);
var head = new Head(50, 50, 'rgb(0, 250, 0)', 0, 0);
var fruit = new Fruit();


var isGameOver = false;
var blocks = [head];
var fruits = [fruit];

function animate() {
  
  fruits.forEach(function(fruit){
    fruit.draw(context);
  })
  
  blocks.forEach(function (block, i) {
    block.draw(context);
    block.move();
    
  
    blocks.forEach(function (block2, j) {
      if (i !== j && block.isCollidingWith(block2)) {
        block.dx = 0;
        block2.dx = 0;
        isGameOver = true;
      } else if (block2.x > 797 || block2.x === 0 || block2.y > 647 || block2.y === -2.5) {
        isGameOver = true;
      }
    })
  });
}

function gameLoop () {
  context.clearRect(0, 0, canvas.width, canvas.height); 

  if (isGameOver) {
    return alert('game over');

  } else {
    animate();
  }

  requestAnimationFrame(gameLoop);
}



function changeDirection(e) {
  if (e.keyCode === 38) {
    head.dy = -1;
    head.dx = 0;
  } else if (e.keyCode === 39) {
    head.dx = 1;
    head.dy = 0
  } else if (e.keyCode === 40) {
    head.dy = 1;
    head.dx = 0;
  } else if (e.keyCode === 37) {
    head.dx = -1;
    head.dy = 0;
  }
}