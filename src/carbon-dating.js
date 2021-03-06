const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
// ¯\_(ツ)_/¯
    if (typeof (sampleActivity) !== "string" || +sampleActivity > 15 || +sampleActivity < 0 || isNaN(typeof (sampleActivity))) {
        return false;
    } else {
        let k = 0.693 / HALF_LIFE_PERIOD;
        return Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / k);
    }
};
