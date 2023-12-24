const fibonacci = function(index) {
    if (index == 0) {
        return 0;
    }

    if (index < 0) {
        return "OOPS"
    }

    let num = 1;
    let fibArray = [1, 1, 2];
    for (let i = 2; i < index; i++) {
        num = (fibArray[i] + fibArray[i - 1]);
        fibArray.push(num);
    }

    return fibArray[index - 1];

};

// Do not edit below this line
module.exports = fibonacci;
