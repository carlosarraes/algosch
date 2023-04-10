const testArray = [1, 0, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const a = 10;
const b = 2;
const c = 0;

const calc = {
  add: (arr) => arr.reduce((a, b) => a + b, 0),
  multiply: (arr) => arr.reduce((a, b) => a * b, 1),
  minus: (arr) => arr.reduce((a, b) => a - b, 0),
  divide: (a, b) => {
    if (b === 0) {
      return "Can't divide by 0";
    }
    return a / b;
  },
};

console.log(calc.add(testArray));
console.log(calc.multiply(testArray));
console.log(calc.minus(testArray));
console.log(calc.divide(a, b));
console.log(calc.divide(a, c));
