const leapYears = function(year) {
    // divisible by 400
    if (year % 400 == 0) {
        return true
    }
    // divisible by 4 but not by 100
    if (year % 4 == 0) {
        if (year % 100 != 0) {
            return true;
        }
    }

    return false;
};

// Do not edit below this line
module.exports = leapYears;
