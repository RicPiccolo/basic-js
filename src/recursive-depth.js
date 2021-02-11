const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let depth = 0;
        let bottom = 1;
        arr.forEach(elem => {
            if (Array.isArray(elem)) {
                depth = this.calculateDepth(elem) + 1;
                if (depth > bottom) {
                    bottom = depth
                }
            }
        });
        return bottom
    }
}
