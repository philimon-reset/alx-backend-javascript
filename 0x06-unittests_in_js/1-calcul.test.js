const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function() {
  describe('SUM', function() {
    it('checking if numbers round', function() {
      assert.equal(calculateNumber('SUM', 1, 3), 4);
    });
    it('checking if numbers round 2nd round', function() {
      assert.equal(calculateNumber('SUM', 1, 3.7), 5);
    });
    it('checking if numbers round 3rd round', function() {
      assert.equal(calculateNumber('SUM', 1.2, 3.7), 5);
    });
    it('checking if numbers round 4th round', function() {
      assert.equal(calculateNumber('SUM', 1.5, 3.7), 6);
    });
    it('checking if numbers round 5th round', function() {
      assert.equal(calculateNumber('SUM', 1.4, 4.5), 6);
    });
    it('checking negative return', function() {
      assert.equal(calculateNumber('SUM', -1.3, -3.7), -5);
    });
  });
  describe('SUBTRACT', function() {
    it('checking if numbers round', function() {
      assert.equal(calculateNumber('SUBTRACT', 1, 3), -2);
    });
    it('checking if numbers round 2nd round', function() {
      assert.equal(calculateNumber('SUBTRACT', 1, 3.7), -3);
    });
    it('checking if numbers round 3rd round', function() {
      assert.equal(calculateNumber('SUBTRACT', 6.2, 3.7), 2);
    });
    it('checking if numbers round 4th round', function() {
      assert.equal(calculateNumber('SUBTRACT', 5.5, 3.7), 2);
    });
    it('checking if numbers round 5th round', function() {
      assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });
    it('checking negative return', function() {
      assert.equal(calculateNumber('SUBTRACT', -1.3, -3.7), 3);
    });
  });
  describe('DIVIDE', function() {
    it('checking if numbers round', function() {
      assert.equal(calculateNumber('DIVIDE', 3, 1), 3);
    });
    it('checking if numbers round 2nd round', function() {
      assert.equal(calculateNumber('DIVIDE', 4, 3.7), 1);
    });
    it('checking if numbers round 3rd round', function() {
      assert.equal(calculateNumber('DIVIDE', 2.2, 0.7), 2);
    });
    it('checking if numbers round 4th round', function() {
      assert.equal(calculateNumber('DIVIDE', 15, 2.7), 5);
    });
    it('checking if numbers round 5th round', function() {
      assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });
    it('checking negative return', function() {
      assert.equal(calculateNumber('DIVIDE', -1.3, 0), 'Error');
    });
  });
});
