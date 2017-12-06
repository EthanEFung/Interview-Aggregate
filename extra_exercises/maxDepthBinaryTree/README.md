## Prompt

Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root
node down to the farthest leaf node.

## Requirements

* I: @params {object} treeRoot
* O: @returns integer representing number of nodes on longest path
* C:
* E:

## Strategy

Conduct a depth first search and compare the length of the paths to the left and
to the right at every node.

If there is nothing to the left and right, the node is a leaf and therefore
counts as a part of the path

Every node counts as one unit in the path, therefore, always 1 to the sum of the
paths to the left and right.

### Justification of strategy

To perform processes on binary Search trees (generally) requires either a
breadth first or depth first search. Depth first search is more ideal since we
cannot determine the length of a path to the left or right until we have
determined that there are no more nodes to the left or right.

## Define test cases

https://github.com/EthanEFung/Interview-Aggregate/blob/master/extra_exercises/maxDepthBinaryTree/maxDepthBinaryTree.test.js

## Implementation skeleton

* 1: check base cases
* 1a: not evaluating an existing node therefore return 0;
* 1b: evaluating a leaf (a node without a left or right) therefore return 1;
* 2: find the sums of the left and right;
* 3: return larger of the sums in step 2 and increment to count the current node

## Actual implementation

https://github.com/EthanEFung/Interview-Aggregate/blob/master/extra_exercises/maxDepthBinaryTree/maxDepthBinaryTree.js

## Execute test cases

https://repl.it/@Ethanefung/TameYearlyRagfish

## Big-O Analysis

The algorithm must visit every node in the tree in order to return a sum. The
algorithm is O(n) time.

## Optimization (if applicable)
