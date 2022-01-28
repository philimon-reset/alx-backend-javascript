const Utils = require('./utils');

function sendPaymentRequestToApi(totalAmount, totalShipping) {
  console.log(`The total is: ${Utils.calculateNumber(totalAmount, totalShipping)}`);
}

module.exports = sendPaymentRequestToApi;
