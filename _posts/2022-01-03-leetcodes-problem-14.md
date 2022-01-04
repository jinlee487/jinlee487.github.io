---
title: "L56 Merge Intervals"
excerpt: "String Array problem"

categories:
  - Algorithm
tags:
  - leetcodes
toc: true
toc_sticky: true
last_modified_at: 2022-01-03T16:00:00Z
---

# Merge Intervals problem 

[Merge Intervals leetcode](https://leetcode.com/problems/merge-intervals/)

## solution

```
class Solution {
    public int[][] merge(int[][] intervals) {
        ArrayList<int[]> answer = new ArrayList<int[]>();
		Arrays.sort(intervals,(a,b) -> Integer.compare(a[0],b[0]));
		int[] currentInterval = intervals[0];
		answer.add(currentInterval);
        for(int[] interval : intervals){
            int currentEnd = currentInterval[1];
            int nextStart = interval[0];
            int nextEnd = interval[1];
            if(currentEnd >= nextStart){
                currentInterval[1] = Math.max(currentEnd,nextEnd);
            } else {
                currentInterval = interval;
                answer.add(currentInterval);
            }
        }
        return answer.toArray(new int[answer.size()][]); 
    }
}
```
For this problem, we can first sort the array of arrays by the first index. The sort can use different methods, and in this case, we used an arrow method to create a custom sort. 

Then we can compare the current end and next start and next end value to check if this is a new interval or a continuation.

Because there is sorting, it will be O(nlog(n)) time | O(n) space