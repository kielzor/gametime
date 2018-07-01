var GamePiece = require('./GamePiece');

module.exports = class Fruit extends GamePiece {
  constructor(x,y,color){
    super(x,y,color);
    this.x = this.findRandomSpace(0, 800, 20);
    this.y = this.findRandomSpace(0, 600, 20);
    this.color = 'rgb(250, 0, 0)';
  }


  findRandomSpace(min, max, inc) {
    return Math.floor(Math.random() * (max - min) / inc) * inc + 1;
  }
}