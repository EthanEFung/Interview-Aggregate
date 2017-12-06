## Requirements

Given an array nums, write a function to move all 0's to the end of it while
maintaining the relative order of the non-zero elements.

For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums
should be [1, 3, 12, 0, 0].

* I: [] collection of integers
* O: Nothing is returned, only modify the integers of the collection
* C: You must do this in-place without copying the array. Minimize operations
* E:

## Strategy

Using one pointer, find the index where a non-zero integer should go. Run a loop
and assume that the first non-zero should be at index zero, and increment the
pointer once a non-zero integer is found to find the next.

Once the loop that evaluates all non-zero positions in the array ends, another
loop should pick up where the non-zero idx left off and should reassign each of
the remaining numbers to zero.

### Justification of strategy

Since we need to maintain the order of the non-zero integers, it is safe to
assume that all non-zeros will be indexed next to each other. With this in mind
we can assume that the second non-zero will be indexed next the first, the third
next to the second, so on and so forth until all the numbers in the collection
are evaluated.

## Define test cases

## Implementation skeleton

* 1: set a non-zero index pointer to the first position in the array (0)
* 2: run a loop
* 2a: if the number being evaluated is non-zero, assign the number to the
  non-zero pointer position
* 3: run a second loop that begins where the pointer left off
* 3a: reassign remaining positions in the array to contain zero

## Actual implementation

https://github.com/EthanEFung/Interview-Aggregate/blob/master/extra_exercises/moveZeros/moveZeros.js

## Execute test cases

## Big-O Analysis

This algorithm runs two loops sequentially. The first loop is O(n), the second
is worse case O(n), and best case is never run. Together the worst case is
O(2n), the best case is O(n), but in either case Big-O still remains linear.

## Optimization (if applicable)
