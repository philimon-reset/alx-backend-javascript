function calculateNumber(a, b, type) {
  if (type === 'SUM') {
    return Math.round(a) + Math.round(b);
  }
  if (type === 'SUBTRACT') {
    return Math.round(a) / Math.round(b);
  }
  if (type === 'DIVIDE') {
    if (Math.round(b) === 0) {
      return 'Error';
    }
    return Math.round(a) / Math.round(b);
  }
  return 0;
}

module.exports = calculateNumber;
