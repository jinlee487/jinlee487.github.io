---
title: "minimum absolute difference leetcode problem L1200"
excerpt: "String Array problem"

categories:
  - Algorithm
tags:
  - leetcodes
toc: true
toc_sticky: true
last_modified_at: 2021-12-28T16:00:00Z
---

# 3sum problem 

[3sum leetcode](https://leetcode.com/problems/minimum-absolute-difference/)

## solution
```
 class Solution {
    public List<List<Integer>> minimumAbsDifference(int[] arr) {
        Arrays.sort(arr);
        int diff = Integer.MAX_VALUE;
        ArrayList<List<Integer>> answer = new ArrayList<List<Integer>>();
        for(int i=1;i<arr.length;i++){
            int currentDiff = arr[i] - arr[i-1];
            if(currentDiff < diff) {
                diff = currentDiff;
                answer = new ArrayList<List<Integer>>();
                answer.add(Arrays.asList(arr[i-1],arr[i]));
            } else if(currentDiff == diff){
                answer.add(Arrays.asList(arr[i-1],arr[i]));
            } 
        }
        return answer;
    }
}
```
For this problem, if we sort the array, we know that the two adjacient numbers have the smallest possible difference for that particular number. We iterate to find the numbers with the minimum difference. This would give complexity of O(nlog(n)) time | O(n) space.