const { expect } = require('chai');
const { it, describe } = require('mocha');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('checking if numbers round', () => {
      expect(calculateNumber('SUM', 1, 3)).equal(4);
    });
    it('checking if numbers round 2nd round', () => {
      expect(calculateNumber('SUM', 1, 3.7)).equal(5);
    });
    it('checking if numbers round 3rd round', () => {
      expect(calculateNumber('SUM', 1.2, 3.7)).equal(5);
    });
    it('checking if numbers round 4th round', () => {
      expect(calculateNumber('SUM', 1.5, 3.7)).equal(6);
    });
    it('checking if numbers round 5th round', () => {
      expect(calculateNumber('SUM', 1.4, 4.5)).equal(6);
    });
    it('checking negative return', () => {
      expect(calculateNumber('SUM', -1.3, -3.7)).equal(-5);
    });
  });
  describe('SUBTRACT', () => {
    it('checking if numbers round', () => {
      expect(calculateNumber('SUBTRACT', 1, 3)).equal(-2);
    });
    it('checking if numbers round 2nd round', () => {
      expect(calculateNumber('SUBTRACT', 1, 3.7)).equal(-3);
    });
    it('checking if numbers round 3rd round', () => {
      expect(calculateNumber('SUBTRACT', 6.2, 3.7)).equal(2);
    });
    it('checking if numbers round 4th round', () => {
      expect(calculateNumber('SUBTRACT', 5.5, 3.7)).equal(2);
    });
    it('checking if numbers round 5th round', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).equal(-4);
    });
    it('checking negative return', () => {
      expect(calculateNumber('SUBTRACT', -1.3, -3.7)).equal(3);
    });
  });
  describe('DIVIDE', () => {
    it('checking if numbers round', () => {
      expect(calculateNumber('DIVIDE', 3, 1)).equal(3);
    });
    it('checking if numbers round 2nd round', () => {
      expect(calculateNumber('DIVIDE', 4, 3.7)).equal(1);
    });
    it('checking if numbers round 3rd round', () => {
      expect(calculateNumber('DIVIDE', 2.2, 0.7)).equal(2);
    });
    it('checking if numbers round 4th round', () => {
      expect(calculateNumber('DIVIDE', 15, 2.7)).equal(5);
    });
    it('checking if numbers round 5th round', () => {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).equal(0.2);
    });
    it('checking negative return', () => {
      expect(calculateNumber('DIVIDE', -1.3, 0)).equal('Error');
    });
  });
});
