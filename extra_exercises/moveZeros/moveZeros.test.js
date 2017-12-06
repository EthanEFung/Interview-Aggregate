const moveZeros = require("./moveZeros");

describe("moveZeros", () => {
  it("should move zeros to the end", () => {
    const test = [1, 0, 3, 12, 0];
    moveZeros(test);

    const expected = [1, 3, 12, 0, 0];
    expect(test).toEqual(expected);
  });

  it("should maintain the order of non-zeros", () => {
    const test = [1, 0, 2, 3, 0, 4, 5];
    moveZeros(test);

    const expected = [1, 2, 3, 4, 5, 0, 0];
    expect(test).toEqual(expected);
  });

  it("should not utilize extra space", () => {});
});
