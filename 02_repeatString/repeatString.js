const repeatString = function(string, numTimes) {

    if (numTimes < 0) {
        return "ERROR";
    }

    if (numTimes == 0) {
        return '';
    }

    let result = string;
    for (let index = 1; index < numTimes; index++) {
        result = result + string;       
    }

    return result;
};

// Do not edit below this line
module.exports = repeatString;
