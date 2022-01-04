---
title: "L238 Product of Array Except Self"
excerpt: "String Array problem"

categories:
  - Algorithm
tags:
  - leetcodes
toc: true
toc_sticky: true
last_modified_at: 2022-01-02T16:00:00Z
---

# Product of Array Except Self problem 

[Product of Array Except Self leetcode](https://leetcode.com/problems/product-of-array-except-self/)

## solution

```
class Solution {
    public int[] productExceptSelf(int[] nums) {
		int[] answer = new int[nums.length]; 
		int[] left = new int[nums.length]; 
		
		int leftProduct = 1;
		for(int i=0;i<nums.length;i++){
			left[i] = leftProduct;
			leftProduct *= nums[i];
		}
		int rightProduct = 1;
		for(int i=nums.length-1;0<=i;i--){
			answer[i] = left[i] * rightProduct;
			rightProduct *= nums[i];
		}
    return answer;
    }
}
```
For this problem, we can create a two arrays to first multiply the values in a left order fashion then, in the right order fashion. This will give us the final array with the values multiplied without the current index. This will have a complexity of O(n) time and O(n) space.

```
class Solution {
    public int[] productExceptSelf(int[] nums) {
        int product = 1;
        int countZero = 0;
        for(int i=0;i<nums.length;i++){
            if(nums[i]==0) countZero ++;
            else product*=nums[i];
        }
        for(int i=0;i<nums.length;i++){
            if(nums[i]==0 && countZero == 1) nums[i] = product;
            else if(countZero>0) nums[i] = 0;
            else nums[i] = product/nums[i];
        }
        return nums;
    }
}
```
We can improve the method by learning the pattern of the output. The final values always follows a pattern. If there are more than 2 zeros, then the values will all be 0. If there is only 1 zero, then only the index with 0 value will be a non zero value. 
We can improve the method by learning the pattern of the output. The final values always follows a pattern. If there are more than 2 zeros, then the values will all be 0. If there is only 1 zero, then only the index with 0 value will be a non zero value. 
O(n) time | O(1) space
