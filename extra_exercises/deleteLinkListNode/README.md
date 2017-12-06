## Prompt

Write a function to delete a node (except the tail) in a singly linked list,
given only access to that node.

Supposed the linked list is 1 -> 2 -> 3 -> 4 and you are given the third node
with value 3, the linked list should become 1 -> 2 -> 4 after calling your
function.

## Requirements

* Input: {} Linked List Node
* Output: only modify the LL, no return value necessary

## Strategy

Utilize the the inheirent attribute of Linked List nodes to reassign the
specified node to be the the node it is linked to.

### Justification of strategy

Since we are only given the node in the linked list and not the linked list, we
cannot access the previous node.

## Define test cases

## Implementation skeleton

* reassign the value of the node to be the next node's value
* reassign the link of the node to be the next node's link

## Actual implementation

https://repl.it/@Ethanefung/BrownDecisiveNewfoundlanddog

## Execute test cases

## Big-O Analysis

The algoritm is constant time. Because we are directly handed the reference to
the particular node, we haven't visited any other nodes other than the one
specified.

## Optimization (if applicable)
