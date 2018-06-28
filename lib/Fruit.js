var GamePiece = require('./GamePiece');

module.exports = class Fruit extends GamePiece {
  constructor(x,y,color){
    super(x,y,color);
    this.x = Math.floor(Math.floor(Math.random(1)*600));
    this.y = Math.floor(Math.floor(Math.random(1)*650));
    this.color = 'rgb(250, 0, 0)';
   
  
  }
}