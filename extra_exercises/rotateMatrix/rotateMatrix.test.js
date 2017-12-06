const { rotateFour, rotateMatrix } = require("./rotateMatrix");

describe("rotateMatrix", function() {
  it("should rotate 90 degrees clockwise", function() {
    const actual = [
      ["a", "b", "c", "d"],
      ["e", "f", "g", "h"],
      ["i", "j", "k", "l"],
      ["m", "n", "o", "p"]
    ];
    rotateMatrix(testGrid);
    const expected = [
      ["d", "h", "l", "p"],
      ["c", "g", "k", "o"],
      ["b", "f", "j", "n"],
      ["a", "e", "i", "m"]
    ];
    expect(actual).toEqual(expected);
  });
});

describe("rotateFour", function() {
  const actual = [[1, 2], [3, 4]];
  rotateFour(actual, 1, 0);
  const expected = [[2, 4], [1, 3]];
  expect(actual.toEqual(expected));
});
