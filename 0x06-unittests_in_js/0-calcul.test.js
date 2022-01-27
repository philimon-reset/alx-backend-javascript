const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
  it('checking if numbers round', function() {
    assert.equal(calculateNumber(1, 3), 4);
  });
  it('checking if numbers round 2nd round', function() {
    assert.equal(calculateNumber(1, 3.7), 5);
  });
  it('checking if numbers round 3rd round', function() {
    assert.equal(calculateNumber(1.2, 3.7), 5);
  });
  it('checking if numbers round 4th round', function() {
    assert.equal(calculateNumber(1.5, 3.7), 6);
  });
  it('checking negative return', function() {
    assert.equal(calculateNumber(-1.3, -3.7), -5);
  });
});
