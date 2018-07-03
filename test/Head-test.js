const { assert } = require('chai');
const Head = require('../lib/Head.js');

describe('Head', function () {
  it('should be a function', function() {
    assert.isFunction(Head);
  })
  it('should instantiate a new head piece', function() {
    var head = new Head();
    assert.isObject(head);
  })
})
