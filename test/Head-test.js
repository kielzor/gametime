const { assert } = require('chai');
const Head = require('../lib/Head.js');

describe('Head', function() {

  it('should move', function() {
    const head = new Head(50, 50, 'rgb(250, 0, 0)', 1, 1);

    head.move();

    assert.equal(head.x, 70);
    assert.equal(head.y, 70);
  })

  it('should have properties', function () {
    const head = new Head(50, 50, 'rgb(250, 0, 0)', 1, 1);
    const expectedObj = {
      x: 50,
      y: 50,
      color: 'rgb(250, 0, 0)',
      dx: 1,
      dy: 1,
      dxv: 20,
      dyv: 20,
      height: 18,
      width: 18,
    };
    assert.deepEqual(head, expectedObj);
  });
})
