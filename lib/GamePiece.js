module.exports = class GamePiece {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.height = 18;
    this.width = 18;
  }

  draw(ctx) {
    const { x, y, height, width, color } = this;

    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
  }

  move () {
    if (this.x < 782 && this.x > 0 && this.y < 642 && this.y > 0) {
      this.x += this.dx * this.dxv;
      this.y += this.dy * this.dyv;
    }
  }

  isCollidingWith(object) {
    return (
      this.x === object.x &&
      this.y === object.y 
    )
  }
}