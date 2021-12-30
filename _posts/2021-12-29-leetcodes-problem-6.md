---
title: "3sum sum leetcode problem L15"
excerpt: "String Array problem"

categories:
  - Algorithm
tags:
  - leetcodes
toc: true
toc_sticky: true
last_modified_at: 2021-12-29T16:00:00Z
---

# 3sum problem 

[3sum leetcode](https://leetcode.com/problems/3sum/)

## solution
```
  class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        Arrays.sort(nums);
        ArrayList<List<Integer>> answer = new ArrayList<List<Integer>>();
        HashSet<List<Integer>> set = new HashSet<List<Integer>>();
        for(int i=0;i<nums.length;i++){
            int target = 0 - nums[i];
            int right = nums.length-1;
            int left = i+1;
            while(left<right){
                int current = nums[left] + nums[right];
                if(current == target){
                    ArrayList<Integer> temp = new ArrayList<Integer> (Arrays.asList(nums[i], nums[left], nums[right]));
                    if(!set.contains(temp)) {
                        set.add(temp);                                               
                        answer.add(temp);
                    }
                    left ++;
                    right --;
                } else if(current < target){
                    left ++;
                } else if(current > target){
                    right --;
                }
                
            }
        }
        return answer;
    }
}
```
We can solve this problem using a similar methodolgy as the two sum problem explained in the [twosum post](https://jinlee487.github.io/algorithm/leetcodes-problem-1/). We find the target for the two sums. Since the array is sorted, we know that if the current two sum is below or above the target value we know to change the lower index or the upper index. 

This solution will give complexity of O(n^2) time | O(n) space