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

  it('should have properties', function () {
    var fruit = new Fruit();
    var apple = {
      x: fruit.x,
      y: fruit.y,
      color: 'rgb(250, 0, 0)',
      height: 18,
      width: 18
    };
    assert.deepEqual(fruit, apple);
  })
})