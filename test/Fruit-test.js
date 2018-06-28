const { assert } = require('chai');
const Fruit = require('../lib/Fruit.js');

describe('fruit', function() {

  it('should have properties', function () {
    const fruit = new Fruit(50,50,'rgb(0, 250, 0)');
    const apple = {
      x: 50,
      y: 50,
      color: 'rgb(0, 250, 0)'
    }
    assert.deepEqual(fruit,apple);
  })

  
})