const { assert } = require('chai');
const GamePiece = require('../lib/GamePiece.js');

describe('GamePiece', function() {

  it('should be able to collide with other objects', function() {
    const gamePiece1 = new GamePiece(50, 50, 10, 10, 'rgb(250, 0, 0)', 1);
    const gamePiece2 = new GamePiece(50, 50, 10, 10, 'rgb(250, 0, 0)', 1);

    const isColliding = gamePiece1.isCollidingWith(gamePiece2);

    assert.isTrue(isColliding);
  })

  it('should be able to collide with other objects', function() {
    const gamePiece1 = new GamePiece(50, 50, 10, 10, 'rgb(250, 0, 0)', 1);
    const gamePiece2 = new GamePiece(80, 80, 10, 10, 'rgb(250, 0, 0)', 1);

    const isColliding = gamePiece1.isCollidingWith(gamePiece2);

    assert.isFalse(isColliding);
  })

  it('should have properties', function() {
    const gamePiece = new GamePiece(50, 50, 'rgb(250, 0, 0)');
    const expectedObj = {
      x: 50,
      y: 50,
      color: 'rgb(250, 0, 0)',
      height: 18,
      width: 18,
    };
    assert.deepEqual(gamePiece, expectedObj);
  });
})