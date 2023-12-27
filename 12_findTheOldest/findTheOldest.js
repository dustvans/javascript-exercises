const findTheOldest = function(people) {
    
    let oldest = people[0];
    if ('yearOfDeath' in oldest) {
        oldest.age = oldest.yearOfDeath - oldest.yearOfBirth;
    }
    else {
        oldest.age = (new Date().getFullYear()) - oldest.yearOfBirth;
    }

    for (let index = 0; index < people.length; index++) {
        let temp = people[index];

        if ('yearOfDeath' in temp) {
            temp.age = temp.yearOfDeath - temp.yearOfBirth;
        }
        else {
            temp.age = (new Date().getFullYear()) - temp.yearOfBirth;
        }

        if (oldest.age < temp.age) {
            oldest = temp;
        }
    }

    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
