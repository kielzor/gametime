var GamePiece = require('./GamePiece.js');

var canvas = document.querySelector('#game');
var context = canvas.getContext('2d');

context.fillStyle = "rgba(0, 255, 255, 1)";
context.fillRect(50, 50, 10, 10);

requestAnimationFrame(gameLoop);

window.addEventListener('keydown', changeDirection);

var firstBlock = new GamePiece(100, 50, 10, 10, 'rgb(0, 250, 0)', 0, 0);
// var secondBlock = new GamePiece(150, 75, 10, 10, 'rgb(0, 0, 200)', 1);
// var thirdBlock = new GamePiece(15, 50, 10,10, 'rgb(0, 200,0)', 1);

var isGameOver = false;
var blocks = [firstBlock]

function animate() {
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



function changeDirection(e, block1) {
  if (e.keyCode === 38) {
    firstBlock.dy = -1;
    firstBlock.dx = 0;
  } else if (e.keyCode === 39) {
    firstBlock.dx = 1;
    firstBlock.dy = 0;
  } else if (e.keyCode === 40) {
    firstBlock.dy = 1;
    firstBlock.dx = 0;
  } else if (e.keyCode === 37) {
    firstBlock.dx = -1;
    firstBlock.dy = 0;
  }
}