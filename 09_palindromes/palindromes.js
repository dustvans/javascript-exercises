const palindromes = function (string) {
    const oldString = string.toLowerCase().replace(/[\s,.!?]/g, "");

    const splitString = oldString.split("");
    const reverseString = splitString.slice().reverse();
    const newString = reverseString.join("");

    return oldString === newString;

};

// Do not edit below this line
module.exports = palindromes;
