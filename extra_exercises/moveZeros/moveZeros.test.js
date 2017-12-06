const moveZeros = require("./moveZeros");

describe("moveZeros", () => {
  it("should move zeros to the end", () => {
    const test = [1, 0, 3, 12, 0];
    moveZeros(test);

    const expected = [1, 3, 12, 0, 0];
    expect(test).toEqual(expected);
  });

  it("should not utilize extra space", () => {});
});
