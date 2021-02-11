const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    if (!Array.isArray(members)) {
        return false
    } else {
        let arrName = [];
        members.map(x => {
            if (typeof (x) === "string") {
                arrName.push(x.trim()[0].toUpperCase())
            }
        })
        return arrName.sort().join('').trim()
    }
}
