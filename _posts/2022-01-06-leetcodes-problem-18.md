---
title: "L135 Candy"
excerpt: "String Array problem"

categories:
  - Algorithm
tags:
  - leetcodes
toc: true
toc_sticky: true
last_modified_at: 2022-01-06T16:00:00Z
---

# candy problem 

[candy leetcode](https://leetcode.com/problems/candy/)

## solution

```
class Solution {
    public int candy(int[] ratings) {

		int[] array = new int[ratings.length];
		Arrays.fill(array,1);
		for(int i=1;i<ratings.length;i++){
			if(ratings[i-1]<ratings[i]) array[i] = Math.max(array[i],array[i-1]+1);
		}
		for(int i=ratings.length-2;0<=i;i--){
			if(ratings[i+1]<ratings[i]) array[i] = Math.max(array[i],array[i+1]+1);
		} 
    return IntStream.of(array).sum();
    }
}
```
For this problem, there are 3 solutions.

The first solution is a naive solution. We simply loop through the array until we find a value that is decreasing. If it is decreasing, it means that the values before the current has to be +1. We loop back and make the changes.

O(n^2) time | O(n) space

The improved method has us finding the troughs in the array values. we loop from the trough left and right and +1.

O(n) time | O(n) space

The best method is to simply loop the array twice left and right. Shown above, we can simply loop through once and add a reward when the value is bigger than the previous. 

In the second loop, we can add a reward when the value is bigger than the next value. The key here is that we want to choose the max of the current index reward and the next index reward + 1. 

O(n) time | O(n) space

