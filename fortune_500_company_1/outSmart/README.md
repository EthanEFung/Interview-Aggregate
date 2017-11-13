# OUT SMART 
## PROMPT 
given an input of a positive integer n, and two single digit integers p and q,
render a sequence of integers seperated by commas decrementing from n til 1,
with the following constraints:
- if integer in the sequence is divisible by p or q print in sequence the word "OUT"
instead of the integer
- if the decimal representation of the number in sequence contained either p or q,
render the word "SMART" instead of the integer
- if conditions 1 AND 2 are met, render OUTTHINK instead of the integer

## IMPLEMENTED SOLUTION EXPLAINED
For this problem, my thought was to break this problem into two major sections
* The Recursive build of the sequence
* Processing each individual integer seperately

- The recursive build
Quite simply if we factor out the process that each integer undergoes,
what we are left with is a problem of building a decrementing sequence
from n to 1.  Because I was under time pressure, my main concern was
not confusing myself with complex algorithms.  Admittedly, I could
have just as easily solved this problem iteratively, but at the time
I reasoned that recursion was just as easy and required less boilerplate.

- Processing the integers
The solution logic for this prompt is similar to FIZZBUZZ in that one
easy solution is to check whether the integer satisfies one, none, or both 
conditions that are given in the prompt.  While specific conditions differed
in this coding challenge, the solution I implement is similar. I 
am create a result string that will print out in the case that
one, the other. If both conditions are met, the result string contains both
words because both conditions are met. Else I print out the number.