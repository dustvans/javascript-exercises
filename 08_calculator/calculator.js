const add = function(x, y) {
  return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(nums) {
  return nums.reduce((total, num) => {
    return total + num;
  }, 0);
};

const multiply = function(nums) {
  return nums.reduce((product, num) => {
    return product * num;
  }, 1);
};

const power = function(a, b) {
  return a ** b;
};

const factorial = function(num) {
  if (num == 0) {
    return 1;
  }
  let factorial = num;
  for (let index = num; index > 1; index--) {
    factorial = factorial * (index - 1);
  }

  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
