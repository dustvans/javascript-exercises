const removeFromArray = function(array, ...Remove) {

    for (const remove of Remove) {
        for (let index = 0; index < array.length; index++)
            if (array[index] === remove) {
                array.splice(index, 1);
            }
    }

    return array;

};

// Do not edit below this line
module.exports = removeFromArray;
