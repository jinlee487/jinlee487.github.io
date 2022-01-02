---
title: "L845 Longest Mountain in Array"
excerpt: "String Array problem"

categories:
  - Algorithm
tags:
  - leetcodes
toc: true
toc_sticky: true
last_modified_at: 2022-01-01T16:00:00Z
---

# Longest Mountain in Array problem 

[Longest Mountain in Array leetcode](https://leetcode.com/problems/longest-mountain-in-array/)

## solution
```
class Solution {
    public int longestMountain(int[] array) {
        int answer = 0;
		for(int i=1;i<array.length-1;){
			boolean isPeak = array[i-1] < array[i] && array[i+1] < array[i];
			if(!isPeak){
				i += 1;
				continue;
			}
			int leftIdx = i - 2;
			while(leftIdx >= 0 && array[leftIdx] < array[leftIdx+1]) {
				leftIdx -= 1;
			}
			int rightIdx = i + 2;
			while(rightIdx < array.length && array[rightIdx] < array[rightIdx -1]){
				rightIdx += 1;
			}
			int currentLength = rightIdx - leftIdx -1;
			if(currentLength > answer){
				answer = currentLength;
			} 
			i = rightIdx;
		}
    return answer;
    }
}
```
For this problem, we can simply find the peaks in the array. When we find the peak, we can loop to the left and the right and find the length of the peak.
O(n) time | O(1) space