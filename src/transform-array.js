const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    // throw new CustomError('Not implemented');
    let res = [];
    let arrayLength = arr.length;
    let i = 0;
    if ((arr[i] === '--discard-prev') || (arr[i] === '--double-prev')) {
        i++;
    }
    if ((arr[arrayLength - 1] === '--discard-next') || (arr[arrayLength - 1] === '--double-next')) {
        arrayLength--;
    }

    while (i < arrayLength) {
        switch (arr[i]) {
            case '--discard-next':
                i += 2;
                if ((arr[i] === '--discard-prev') || (arr[i] === '--double-prev')) {
                    i++;
                }
                break;

            case '--discard-prev':
                res.pop();
                i++;
                break;

            case '--double-next':
                i++;
                res.push(arr[i]);
                break;

            case '--double-prev':
                res.push(arr[i - 1]);
                i++;
                break;

            default:
                res.push(arr[i]);
                i++;
                break;
        }
    }
    return res;
};
