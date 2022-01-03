---
title: "L287 Find the Duplicate Number"
excerpt: "String Array problem"

categories:
  - Algorithm
tags:
  - leetcodes
toc: true
toc_sticky: true
last_modified_at: 2022-01-02T16:00:00Z
---

# Find the Duplicate Number problem 

[Find the Duplicate Number leetcode](https://leetcode.com/problems/find-the-duplicate-number/)

## solution
```
class Solution {
    public int findDuplicate(int[] nums) {
        
        // Find the intersection point of the two runners.
        int tortoise = nums[0];
        int hare = nums[0];
        
        do {
            tortoise = nums[tortoise];
            hare = nums[nums[hare]];
        } while (tortoise != hare);

        // Find the "entrance" to the cycle.
        tortoise = nums[0];
        
        while (tortoise != hare) {
            tortoise = nums[tortoise];
            hare = nums[hare];
        }

        return hare;
    }
}
```
For this problem, we to solve the problem with constant space constraint, we have to use the tortoise and hare method. This will run the loop until we have a matching value. We then use exit loop to find the matching duplicate value.
The key is to treat the array value as link nodes.

O(n) time | O(1) space