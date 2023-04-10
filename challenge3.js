const generateNumberOrLetter = () => {
  const random = Math.random();
  if (random < 0.5) {
    return Math.floor(Math.random() * 10);
  }
  // Uses char code to generate a random letter, example: 97 = a, 98 = b, 99 = c, etc.
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

const generateId = (length) => {
  let id = "";
  for (let i = 0; i < length; i++) {
    if (i % 4 === 0 && i !== 0) id += "-";
    id += generateNumberOrLetter();
  }

  return id;
};

console.log(generateId(16));
