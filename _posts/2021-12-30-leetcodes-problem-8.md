---
title: "move-zeroes leetcode problem L283"
excerpt: "String Array problem"

categories:
  - Algorithm
tags:
  - leetcodes
toc: true
toc_sticky: true
last_modified_at: 2021-12-30T16:00:00Z
---

# 3sum problem 

[3sum leetcode](https://leetcode.com/problems/move-zeroes/)

## solution
```
class Solution {
    public void moveZeroes(int[] nums) {
        int idx = 0;
        for(int i=0;i<nums.length;i++){
            if(nums[i]!=0) nums[idx++] = nums[i]; 
        }
        for(int i=idx;i<nums.length;i++){
            nums[i] = 0;
        }
        return;
    }
}
```
For this problem, 

we can loop through the arrayand move swap all the non 0 numbers in nums array to the idx position. We can then change the values to zero starting from the last of the idx value. 
This will be a complexity of O(n) time | O(1) space