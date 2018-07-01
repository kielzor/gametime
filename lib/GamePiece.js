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
}