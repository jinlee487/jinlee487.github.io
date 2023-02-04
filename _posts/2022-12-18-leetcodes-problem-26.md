---
title: "L716 Max Stack"
excerpt: "Design question"

categories:
  - Algorithm
tags:
  - leetcodes
toc: true
toc_sticky: true
last_modified_at: 2022-12-18T16:00:00Z
---

# L716 Max Stack problem 

[L716 Max Stack leetcode](https://leetcode.com/problems/max-stack/description/)

## solution

```
/**
Input
["MaxStack", "push", "push", "push", "top", "popMax", "top", "peekMax", "pop", "top"]
[[], [5], [1], [5], [], [], [], [], [], []]
Output
[null, null, null, null, 5, 5, 1, 5, 1, 5]

Explanation
MaxStack stk = new MaxStack();
stk.push(5);   // [5] the top of the stack and the maximum number is 5.
stk.push(1);   // [5, 1] the top of the stack is 1, but the maximum is 5.
stk.push(5);   // [5, 1, 5] the top of the stack is 5, which is also the maximum, because it is the top most one.
stk.top();     // return 5, [5, 1, 5] the stack did not change.
stk.popMax();  // return 5, [5, 1] the stack is changed now, and the top is different from the max.
stk.top();     // return 1, [5, 1] the stack did not change.
stk.peekMax(); // return 5, [5, 1] the stack did not change.
stk.pop();     // return 1, [5] the top of the stack and the max element is now 5.
stk.top();     // return 5, [5] the stack did not change.
 */
from sortedcontainers import SortedList

class MaxStack:

    def __init__(self):
        self.stack = SortedList()
        self.values = SortedList()
        self.cnt = 0

    def push(self, x: int) -> None:
        self.stack.add((self.cnt, x))
        self.values.add((x, self.cnt))
        self.cnt += 1

    def pop(self) -> int:
        idx, val = self.stack.pop()
        self.values.remove((val, idx))
        return val

    def top(self) -> int:
        return self.stack[-1][1]

    def peekMax(self) -> int:
        return self.values[-1][0]

    def popMax(self) -> int:
        val, idx = self.values.pop()
        self.stack.remove((idx, val))
        return val
```

For this problem, we have to find a way to create a data structure class that can perform popmax in a O(log(n))

We can leverage a sortedList library

```
SortedList –
Sorted list is a sorted mutable sequence in which the values are maintained in sorted order.

Functions to add and remove elements:

add(value) : A function that takes one element as parameter and inserts it into the list by maintaining sorted order. Runtime Complexity: O(log(n))

update(iterable): A function that takes an iterable as input and updates the SortedList adding all the values from the iterable Runtime complexity: O(k*log(n)).

clear(): Remove all values from sorted list. Runtime complexity: O(n).

discard(value): Remove value from sorted list if it is a member. If value is not a member, do nothing. Runtime complexity: O(log(n)).
```




