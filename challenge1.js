const data = ["a", 10, "b", "hola", 122, 15];

const threeWayData = (arr) => {
  const result = {
    letters: [],
    numbers: [],
    biggestNumber: 0,
  };

  arr.forEach((item) => {
    if (typeof item === "string" && item.length === 1) {
      result.letters.push(item);
    } else if (typeof item === "number") {
      result.numbers.push(item);
      if (item > result.biggestNumber) {
        result.biggestNumber = item;
      }
    }
  });

  return result;
};

console.log(threeWayData(data));
