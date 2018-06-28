module.exports = class GamePiece {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.height = 20;
    this.width = 20;
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
}