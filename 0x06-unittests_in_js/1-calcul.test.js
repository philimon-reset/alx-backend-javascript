const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('checking if numbers round', () => {
    assert.equal(calculateNumber(1.5, 3.7), 6);
  });
  it('checking if numbers round 2nd round', () => {
    assert.equal(calculateNumber(0, 0), 0);
  });
  it('checking negative return', () => {
    assert.equal(calculateNumber(-1.3, -3.7), -5);
  });
});