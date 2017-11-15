const {
  renderOutSmartSequence,
  areValidIntegers,
  processInteger,
  Integer
} = require("./outSmart.js");

describe("outSmart sequence function", function() {
  it("should accept an integer as its argument", function() {
    let actual = renderOutSmartSequence(10, 4, 3);
    let expected = "10, OUT, OUT, 7, OUT, 5, OUTSMART, OUTSMART, 2, 1";

    expect(actual).toEqual(expected);
  });

  it("should break if anything other than integers passed in as arguments", function() {
    let actual = renderOutSmartSequence(13, "hi", 3);
    let expected = "INVALID INTEGER RECEIVED";

    expect(actual).toEqual(expected);
  });
});

describe("areValidIntegers function", function() {
  it("should validate the type of data is a number", function() {
    let actual = areValidIntegers(1, 2, 3, 4, 5);
    expect(actual).toBeTruthy();
  });

  it("should validate the type of data is not a number", function() {
    let actual = areValidIntegers(1, 2, {}, 4, 5);
    expect(actual).toBeFalsy();
  });
});

describe("processInt function", function() {
  it("should render OUT if n is divisible by p or q", function() {
    let actual = processInteger(15, 3, 7);
    let expected = "OUT";
    expect(actual).toBe(expected);
  });

  it("should render SMART if decimal representation contains p or q", function() {
    let actual = processInteger(17, 3, 7);
    let expected = "SMART";
    expect(actual).toBe(expected);
  });

  it("should render OUTSMART if conditions 1 and 2 are both met", function() {
    let actual = processInteger(17, 1, 7);
    let expected = "OUTSMART";
    expect(actual).toBe(expected);
  });
});

describe("Integer constructor", function() {
  it("should check if int is divisible by another int", function() {
    const three = new Integer(3);
    let actual = three.isDivisibleBy(1);
    expect(actual).toBeTruthy();
  });

  it("should check if int decimal representation contains another int", function() {
    const ten = new Integer(10);
    let actual = ten.decimalContains(0);
    expect(actual).toBeTruthy();
  });

  it("should break if a number isnt passed in to integer constructor", function() {
    const nonInt = new Integer();
    let actual = nonInt.isDivisibleBy(1);
    expect(actual).toBeFalsy();
  });
});
