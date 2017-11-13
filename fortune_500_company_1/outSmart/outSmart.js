/**
 * The first prompt that was handed to me in hind-sight was a very simple variation of the
 * popular interview question, FIZZBUZZ. Regretfully, I ran out of time, but I had a very 
 * clear idea of what I wanted to do that if given just a minute more, I would have solved
 * the problem.
 * 
 * PROMPT:
 * given an input of a positive integer n, and two single digit integers p and q,
 * render a sequence of integers seperated by commas decrementing from n til 1,
 * with the following constraints:
 * (1) if integer in the sequence is divisible by p or q print in sequence the word "OUT"
 * instead of the integer
 * (2) if the decimal representation of the number in sequence contained either p or q,
 * render the word "SMART" instead of the integer
 * (3) if conditions 1 AND 2 are met, render OUTTHINK instead of the integer
 */

function renderOutSmartSequence(n, p, q) {
  let integer = processInt(n, p, q);
  if (integer === "INVALID") return "INVALID INTEGER RECEIVED";
  if (n === 1) return integer;
  return integer + ", " + renderOutSmartSequence(n - 1, p, q);
}

function processInt(n, p, q) {
  if (!areValidIntegers(n, p, q)) return "INVALID";
  let output = "";
  const int = new Integer(n);

  if (int.isDivisibleBy(p) || int.isDivisibleBy(q)) {
    output += "OUT";
  }
  if (int.decimalContains(p) || int.decimalContains(q)) {
    output += "SMART";
  }
  if (output.length === 0) return n.toString();
  return output;
}

function areValidIntegers(...ints) {
  return ints.every(int => typeof int === "number");
}

function Integer(x) {
  this.isDivisibleBy = function(y) {
    return x % y === 0;
  };
  this.decimalContains = function(y) {
    let stringInt = x.toString();
    for (let i = 0; i < stringInt.length; i++) {
      if (stringInt[i] === y.toString()) return true;
    }
    return false;
  };
}

module.exports = {
  renderOutSmartSequence,
  areValidIntegers,
  processInt,
  Integer
};
