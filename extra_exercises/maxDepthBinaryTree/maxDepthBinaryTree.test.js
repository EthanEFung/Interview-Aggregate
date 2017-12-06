const maxDepthBinaryTree = require("./maxDepthBinaryTree");
describe("maxDepthBinaryTree", () => {
  it("should return a number", () => {
    const sample = {
      val: "hello",
      left: {
        val: "darkness",
        left: { val: "my", left: null, right: null },
        right: { val: "old", left: null, right: null }
      },
      right: {
        val: "friend",
        left: null,
        right: null
      }
    };

    const test = maxDepthBinaryTree(sample);
    expect(typeof test).toEqual("number");
  });

  it("should return the number of nodes along the longest path of the root to a leaf", () => {
    const sample = {
      val: "hello",
      left: {
        val: "darkness",
        left: { val: "my", left: null, right: null },
        right: { val: "old", left: null, right: null }
      },
      right: { val: "friend", left: null, right: null }
    };

    const test = maxDepthBinaryTree(sample);
    expect(test).toEqual(3);
  });
});
