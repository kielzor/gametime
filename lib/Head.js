var GamePiece = require('./GamePiece.js');

// window.addEventListener('keydown', changeDirection);

module.exports = class Head extends GamePiece {
  constructor(x, y, color, dx, dy) {
    super(x, y, color);
    this.dx = dx;   // direction: 1 === right, -1 === left
    this.dxv = 5; // velocity / speed
    this.dy = dy;
    this.dyv = 5;
  }
  
  move () {
    if (this.x < 806 && this.x > 0 && this.y < 656 && this.y > 0) {
    this.x += this.dx * this.dxv;
    this.y += this.dy * this.dyv;
    }
  };
}
  // function changeDirection(e) {
  //   if (e.keyCode === 38) {
  //     head.dy = -1;
  //     head.dx = 0;
  //     console.log(head.dy);
  //   } else if (e.keyCode === 39) {
  //     head.dx = 1;
  //     head.dy = 0;
  //   } else if (e.keyCode === 40) {
  //     head.dy = 1;
  //     head.dx = 0;
  //   } else if (e.keyCode === 37) {
  //     head.dx = -1;
  //     head.dy = 0;
  //   }
  // }
