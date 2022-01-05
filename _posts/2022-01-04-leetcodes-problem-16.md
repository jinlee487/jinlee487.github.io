---
title: "L581 Shortest Unsorted Continuous Subarray"
excerpt: "String Array problem"

categories:
  - Algorithm
tags:
  - leetcodes
toc: true
toc_sticky: true
last_modified_at: 2022-01-04T16:00:00Z
---

# Shortest Unsorted Continuous Subarray problem 

[Shortest Unsorted Continuous Subarray leetcode](https://leetcode.com/problems/shortest-unsorted-continuous-subarray/)

## solution

```
class Solution {
    public int findUnsortedSubarray(int[] nums) {
        if(nums.length == 1) return 0;
        int maximum = Integer.MIN_VALUE;
        int minimum = Integer.MAX_VALUE;
        for(int i=0;i<nums.length;i++){
            int n = nums[i];
            if(check(n,i,nums)){
                maximum = Math.max(maximum, n);
                minimum = Math.min(minimum, n);
            }
        }
        if(minimum == Integer.MAX_VALUE) return 0;
        int start = 0;
        int end = nums.length-1;
        while(minimum >= nums[start]) start ++;
        while(maximum <= nums[end]) end --;
        // System.out.println(minimum + " " + maximum + " " + start + " " + end);
        return end - start + 1;
    }
    public boolean check(int num, int i, int[] nums){
        if (i==0) return num > nums[i+1];
		if (i == nums.length -1) return num < nums[i-1];
		return num > nums[i+1] || num < nums[i-1];
    }
}
```
For this problem, we iterate the array and compare until we find the smallest and the largest number we have to swap. We  can then iterate through the loop again until we find the start and end index to find the length of our sort.
