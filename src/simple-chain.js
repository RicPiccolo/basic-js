const CustomError = require("../extensions/custom-error");

const chainMaker = {
    result: [],
    getLength() {
        return this.result.length
    },
    addLink(value) {
        this.result.push(value)
        return this
    },
    removeLink(position) {
        if (this.result[position - 1] === undefined || position < 0 || position > chainMaker.getLength() - 1) {
            this.result = [];
            throw CustomError('Incorrect position!')
        } else {
            this.result.splice(position - 1, 1)
            return this
        }
    },
    reverseChain() {
        this.result.reverse()
        return this
    },
    finishChain() {
        let finalChain = this.result.map(item => `( ${item} )`).join('~~');
        this.result = [];
        return finalChain
    }
};

module.exports = chainMaker;
