const add = function(num1, num2) {
  return num1 + num2;
	
};

const subtract = function(num1, num2) {
  return num1 - num2;
	
};

const sum = function(array) {
  return array.reduce((total, currentItem) => {
    return total + currentItem;
  }, 0);
	
};

const multiply = function(array) {
  return array.reduce((total, currentItem) => {
    return total * currentItem;
  }, 1);

};

const power = function(num, pow) {
  const arr = [];
  for(let i = 0; i < pow; i++){
    arr.push(num);
  }
  return arr.reduce((total, currentItem) => {
    return total * currentItem;
  }, 1);
	
};

const factorial = function(num) {
  const arr = [];
  for(let i = 0; i < num; i++)
  {
    arr.push(num - i);
  }
  return arr.reduce((total, currentItem) => {
    return total * currentItem;
  }, 1);
	
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
