const { assert } = require('chai');
const Fruit = require('../lib/Fruit.js');

describe('Fruit', function () {
  it('should be a function', function () {
    assert.isFunction(Fruit);
  })
  it('should instantiate a piece of fruit', function(){
    var fruit = new Fruit();
    assert.isObject(fruit);
  })
  it('should have a color of red', function() {
    var fruit = new Fruit();
    assert.equal(fruit.color, 'rgb(250, 0, 0)');
  })
})
