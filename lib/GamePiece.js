module.exports = class GamePiece {
  constructor(x, y, height, width, color, dx) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.color = color;
    this.dx = dx;   // direction: 1 === right, -1 === left
    this.dxv = 5; // velocity / speed
  }

  isCollidingWith(object) {
    return !(
      this.x + this.width < object.x ||
      this.y + this.height < object.y ||
      this.x > object.x + object.width || 
      this.y > object.y + object.height
    );
  }

  draw(ctx) {
    const { x, y, height, width, color } = this;

    ctx.fillStyle = color;
    ctx.fillRect(x, y, height, width);
  }
  
  move () {
    if (this.x < 806 && this.x > 0 && this.y < 656 && this.y > 0) {
    this.x += this.dx * this.dxv;
    // this.y += this.dx * this.dxv;
    }
  };


}