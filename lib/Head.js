var GamePiece = require('./GamePiece.js');

module.exports = class Head extends GamePiece {
  constructor(x, y, color, dx, dy) {
    super(x, y, color);
    this.dx = dx;
    this.dxv = 20;
    this.dy = dy;
    this.dyv = 20;
  }
  
  move () {
    if (this.x < 782 && this.x > 0 && this.y < 642 && this.y > 0) {
      this.x += this.dx * this.dxv;
      this.y += this.dy * this.dyv;
    }
  }
}