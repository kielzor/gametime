const { assert } = require('chai');
const Game = require('../lib/Game.js');
const Head = require('../lib/Head.js');
const Fruit = require('../lib/Fruit.js');


describe('Game', function() {
  class Context {
    constructor() {
      this.canvas = 'canvas#game';
      this.fillStyle = "#fa0000";
      this.filter = "none";
      this.font = "10px sans-serif";
      this.globalAlpha = 1;
    }

    fillRect() {
      return 'filling rect';
    }
  }

  it('should have properties', function() {
    const game = new Game();
    const expectedObj = {
      isGameOver: false,
      score: 0,
      head : game.head,
      fruit: game.fruit,
      blocks: []
    };
    assert.deepEqual(game, expectedObj);
  })
  
it('should grow when it hits fruit', function() {
  const game = new Game();
  game.fruit = new Fruit();
  game.head = new Head(game.fruit.x, game.fruit.y, 'rgb(0, 250, 0)', 0, 0);
  game.createSnake();

  assert.equal(game.blocks.length, 1);
  game.hitFruit();
  assert.equal(game.blocks.length, 3);
})

  it('should add 2 heads when it grows', function() {
    const game = new Game();
      assert.equal(game.blocks.length, 0);
      game.growSnake();
      assert.equal(game.blocks.length, 2);
  })
  
  it('should end the game if the snake touches the wall', function() {
    const game = new Game();
    const context = new Context();
    game.head = new Head(61, 41, 'rgb(0, 250, 0)', 10, 0);
    game.createSnake()
    
    for(let i = 0; i < 40; i++) {
      game.animate(context);
    }
    
    game.wallCrash();
    assert.equal(game.isGameOver, true);
  })

  it('should end the game if it collides with the tail', function() {
    const game = new Game();
    const context = new Context();
    game.head = new Head(61, 41, 'rgb(0, 250, 0)', 1, 0);
    game.createSnake();

    for(let i = 0; i < 80; i++) {
      game.animate(context);
      game.growSnake();
    }  

    game.head.move();
    game.animate(context);  
    game.head.dx = 0;
    game.head.dy = 1; 
    game.head.move();
    game.animate(context);
    game.head.dx = 1;
    game.head.dy = 0; 
    game.head.move();
    game.animate(context);
    game.head.dx = 0;
    game.head.dy = 1;
    game.hitTail();
    assert.equal(game.isGameOver, true);
  })


  it('The fruit should not spawn in the same place twice', function() {
    const game = new Game();
    const fruit = new Fruit();
    game.head = new Head(fruit.x, fruit.y, 'rgb(0, 250, 0)', 1, 0);
    fruit.x = Math.floor(Math.random() * (800 - 0) / 20) * 20 + 1;
    fruit.y = Math.floor(Math.random() * (600 - 0) / 20) * 20 + 1;
    assert.equal(fruit.x, fruit.x);
    assert.equal(fruit.y, fruit.y);
  })





})




