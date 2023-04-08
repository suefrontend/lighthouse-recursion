function sum(fromN, toN) {
  if (fromN === toN) {
    return toN;
  }

  return fromN + sum(fromN + 1, toN);
}

console.log(sum(3, 7));
// 3 + 4 + 5 + 6 + 7 and output 25.

module.exports = sum;
