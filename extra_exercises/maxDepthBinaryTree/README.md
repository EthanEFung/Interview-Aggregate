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

if there is nothing to the left and right, the node is a leaf and therefore

### Justification of strategy

## Define test cases

## Implementation skeleton

* 1: check base cases
* 1a: not evaluating an existing node therefore return 0;
* 1b: evaluating a leaf (a node without a left or right) therefor return 1;
* 2: find the sums of the left and right;
* 3: return larger of the sums in step 2 and increment to count the current node

## Actual implementation

## Execute test cases

## Big-O Analysis

## Optimization (if applicable)
