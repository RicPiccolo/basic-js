const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
    let seasons = ['spring', 'summer', 'autumn', 'winter'];
    let currentSeason = '';
    if (!(date instanceof Date) && date || (date - new Date()) === 0) {
        throw new Error()
    } else if (date === undefined) {
        currentSeason = 'Unable to determine the time of year!';
    } else {
        switch (date.getMonth().toString()) {
            case '11':
            case '0':
            case '1':
                currentSeason = seasons[3];
                break;
            case '2':
            case '3':
            case '4':
                currentSeason = seasons[0];
                break;
            case '5':
            case '6':
            case '7':
                currentSeason = seasons[1];
                break;
            case '8':
            case '9':
            case '10':
                currentSeason = seasons[2];
                break;
        }
    }
    return currentSeason;
};
