const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let results = {};
    results.turns = Math.pow(2, disksNumber) - 1;
    results.seconds = Math.floor((results.turns / turnsSpeed) * 3600);
    return results;
};
