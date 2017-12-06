## Prompt

Write a function to delete a node (except the tail) in a singly linked list,
given only access to that node.

Supposed the linked list is 1 -> 2 -> 3 -> 4 and you are given the third node
with value 3, the linked list should become 1 -> 2 -> 4 after calling your
function.

## Requirements

Input: a node that exists in an LL Output: nothing returned, just modify the LL
in place

## Strategy

Have a pointer for the current node and another for the next node and reassign
the current node to be the next node in the case that the value of the current
node is equivalent to the specified node.

### Justification of strategy

## Define test cases

1 - the function should operate on one LL and not use extra memory 2 - the
function should visit every node in the LL 3 - the function

## Implementation skeleton

## Actual implementation

## Execute test cases

## Big-O Analysis

## Optimization (if applicable)
