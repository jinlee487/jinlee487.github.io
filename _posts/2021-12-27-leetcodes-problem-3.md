---
title: "squares-of-a-sorted-array Leetcodes problem L977"
excerpt: "String Array problem"

categories:
  - Algorithm
tags:
  - leetcodes
toc: true
toc_sticky: true
last_modified_at: 2021-12-27T16:00:00Z
---

# is-subsequence problem 

[https://leetcode.com/problems/squares-of-a-sorted-array/](https://leetcode.com/problems/squares-of-a-sorted-array/)

## naive solution
```
class Solution {
  public int[] sortedSquares(int[] nums) {
      for(int i=0;i<nums.length;i++){
          nums[i] = nums[i]*nums[i];
      }
      Arrays.sort(nums);
      return nums;
  }
}
```
For this problem, we can simply square root the value then sort it. However this is a naive solution and we end up with time complexity of nlog(n). 

## improved solution
```
class Solution {
    public int[] sortedSquares(int[] nums) {
        int[] answer = new int[nums.length];
        int smallerIdx = 0;
        int largerIdx = nums.length-1;
        for(int i=nums.length-1;0<=i;i--){
            int smallerValue = nums[smallerIdx];
            int largerValue = nums[largerIdx];
            if(Math.abs(smallerValue) > Math.abs(largerValue)){
                answer[i] = smallerValue*smallerValue;
                smallerIdx ++;
            } else {
                answer[i] = largerValue*largerValue;
                largerIdx --;
            }
        }
        return answer;
    }
}
```
We can improve this solution by placing the values in order as we square the values. Since the values are preordered already, we know that the biggest squared value is either going to be the far right or the far left. We compare the two left and right points then place the bigger value. This would give us a time complexity of O(n) time and O(n) space