const findAllSquares = n => {
  return n * n * (n + 1) * (n + 1) / 4;
};

console.log(findAllSquares(0));
console.log(findAllSquares(1));
console.log(findAllSquares(2));
console.log(findAllSquares(3));
console.log(findAllSquares(15));
