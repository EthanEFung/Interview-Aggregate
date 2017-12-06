/**
 *
 * @param {TreeNode} root
 * @return integer
 *
 * skeleton:
 * if the root is a leaf return the count
 * else compare the sum of the path of left and right nodes and return the greater sum
 */
function maxDepthBinaryTree(root) {
  if (!root) return 0;
  if (!root.left && !root.right) return 1;
  const leftSum = maxDepthBinaryTree(root.left);
  const rightSum = maxDepthBinaryTree(root.right);
  return Math.max(leftSum, rightSum) + 1;
}

module.exports = maxDepthBinaryTree;
