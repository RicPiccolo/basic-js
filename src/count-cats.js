const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backYard) {
    let res = 0;
    backYard.flat().forEach(elem => {
            if (elem === "^^") {
                ++res;
            }
        }
    )
    return res
}
