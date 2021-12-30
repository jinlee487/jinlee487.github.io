---
title: "monotonic-array problem L896"
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

[3sum leetcode](https://leetcode.com/problems/monotonic-array/)

## solution
```
class Solution {
    public boolean isMonotonic(int[] nums) {

		if (nums.length <= 2) return true;
		var direction = nums[1] - nums[0];
		for (int i = 2; i < nums.length; i++) {
			if (direction == 0) {
				direction = nums[i] - nums[i-1];
				continue;
			}
			var difference = nums[i] - nums[i-1];
			if (direction > 0){
				if(difference < 0){
					return false;
				} 
			} else {
				if(difference > 0) {
					return false;	
				}
			}
		}
        return true;
    }
}
```
For this problem, 

we can loop through the array while keeping thrack of the difference. If the direction changes, we can return false.


Another solution we can make is the following 
```
class Solution {
    public boolean isMonotonic(int[] nums) {

		var isNonDecreasing = true;
		var isNonIncreasing = true;
		for (int i=1;i<nums.length;i++){
			if(nums[i] < nums[i-1]){
				isNonDecreasing = false; 
			}
			if(nums[i] > nums[i-1]){
				isNonIncreasing = false;
			}
		}
    return isNonDecreasing || isNonIncreasing;
    }
}
```
Both of the solution has a complexity of O(n) time | O(1) space