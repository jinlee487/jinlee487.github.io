---
title: "L128 Longest Consecutive Sequence"
excerpt: "String Array problem"

categories:
  - Algorithm
tags:
  - leetcodes
toc: true
toc_sticky: true
last_modified_at: 2022-01-05T16:00:00Z
---

# Longest Consecutive Sequence problem 

[Longest Consecutive Sequence leetcode](https://leetcode.com/problems/longest-consecutive-sequence/)

## solution

```
class Solution {
    public int longestConsecutive(int[] nums) {
        HashMap<Integer,Integer> hash = new HashMap<Integer,Integer>();
		for(int i=0;i<nums.length;i++){
			hash.put(nums[i],1);
		} 
		int answer = 0;
		int longestLength = 0;
		for( int num : nums){
			if(hash.get(num)==0){
				continue;
			}
			hash.put(num,0);
			int currentLength = 1;
			int left = num -1;
			int right = num +1;
			while(hash.containsKey(left)) {
				hash.put(left,0);
				currentLength++;
				left --;
			}
			while(hash.containsKey(right)){
				hash.put(right,0);
				currentLength ++;
				right ++;
			}
			if(currentLength > longestLength) {
				longestLength = currentLength;
				answer = longestLength;
			}
		}
		return answer;
    }
}
```
For this problem, the naive solution would be to simply sort the array and iterate to find the longest consecutive range. However this would end with a nlog(n) time complexity. 

To improve on the naive solution, we can use a HashMap to count the occurance of the values and add to the count when we look to the right and left of the value to find the consecutive range. If the value is returning 0 count, we know that this particular range has already been counted and we can iterate to the next index value. 
This solution has a complexity of O(n) time | O(n) space
