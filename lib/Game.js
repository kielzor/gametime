var Head = require('./Head.js');
var Fruit = require('./Fruit.js');

var canvas = document.querySelector('#game');
var context = canvas.getContext('2d');

module.exports = class Game {
  constructor() {
    this.isGameOver = false;
    this.score = 0;
    this.scoreValue = document.querySelector('.score');
    this.head = new Head(61, 41, 'rgb(0, 250, 0)', 0, 0);
    this.fruit = new Fruit;
    this.blocks = [];
  }
  
  createSnake() { 
    this.blocks.push(this.head)
  }

  animate() {
    this.blocks.forEach(block => {
      block.draw(context);
    })
    this.head.move();
    this.blocks.unshift(new Head(this.head.x, this.head.y, 'rgb(0, 250, 0)', 0, 0));
    this.blocks.pop();
    

    this.fruit.draw(context);
  
  }

  hitFruit() {
        if (this.head.isCollidingWith(this.fruit)) {
        this.fruit.x = Math.floor(Math.random() * (800 - 0) / 20) * 20 + 1;
        this.fruit.y = Math.floor(Math.random() * (600 - 0) / 20) * 20 + 1;
        this.score++;
        console.log(this.score);
        this.growSnake();
      console.log('hi');
      }
  }

  hitTail() {
    this.blocks.forEach(block => {
    if (block.x !== block.x && block.y !== block.y && block.isCollidingWith(block)) {
      this.isGameOver = true;
    }
    })
  }

  wallCrash() {
    this.blocks.forEach(block => {
      if (block.x > 782 || block.x < .5 || block.y > 642 || block.y < .5) {
        this.isGameOver = true;
      }
    })
  }



  growSnake() {
    this.blocks.push(new Head);
    this.blocks.push(new Head);
    // this.blocks.push(new Head(this.blocks[0].x , this.blocks[0].y, 'rgb(0, 250, 0)', 0, 0))
  }
}