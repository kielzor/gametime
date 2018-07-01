const { assert } = require('chai');
const Head = require('../lib/Head.js');

describe('Head', function () {

  it('should move', function() {
    const head = new Head(50, 50, 'rgb(250, 0, 0)', 1, 1);

    head.move();

    assert.equal(head.x, 56);

    head.move();

    assert.equal(head.y, 62);
  })

  it('should have properties', function () {
    const head = new Head(50, 50, 'rgb(250, 0, 0)', 1, 1);
    const expectedObj = {
      x: 50,
      y: 50,
      color: 'rgb(250, 0, 0)',
      dx: 1,
      dy: 1,
      dxv: 6,
      dyv: 6,
      height: 20,
      width: 20,
    };
    assert.deepEqual(head, expectedObj);
  });
})
