function sum(fromN, toN) {
  // Sum all the values from fromN up to toN
  // base case - when reach toN
  let result = 0;

  if (fromN === toN) {
    result += fromN;
    return result;
  }
  result += fromN;

  fromN++;

  return result + sum(fromN, toN);
}

console.log(sum(3, 7));
// 3 + 4 + 5 + 6 + 7 and output 25.

module.exports = sum;
