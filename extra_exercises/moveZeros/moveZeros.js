module.exports = function moveZeros(ints) {
  let nonZeroIdx = 0;
  for (let i = 0; i < ints.length; i++) {
    if (ints[i] !== 0) {
      ints[nonZeroIdx] = ints[i];
      nonZeroIdx++;
    }
  }
  for (let i = nonZeroIdx; i < ints.length; i++) {
    ints[i] = 0;
  }
};
