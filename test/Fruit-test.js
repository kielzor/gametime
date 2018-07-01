const { assert } = require('chai');
const Fruit = require('../lib/Fruit.js');

describe('Fruit', function () {

  it('should have properties', function () {
    var fruit = new Fruit();
    var apple = {
      x: fruit.x >= 0 && fruit.x <= 800,
      y: fruit.y >= 0 && fruit.y <= 600,
      color: 'rgb(250, 0, 0)',
      height: 20,
      width: 20
    };
    assert.deepEqual(fruit, apple);
  })
})