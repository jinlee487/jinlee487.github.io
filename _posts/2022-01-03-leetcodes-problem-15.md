---
title: "L18 4Sum"
excerpt: "String Array problem"

categories:
  - Algorithm
tags:
  - leetcodes
toc: true
toc_sticky: true
last_modified_at: 2022-01-03T16:00:00Z
---

# 4Sum problem 

[4Sum leetcode](https://leetcode.com/problems/4sum/)

## solution

```
class Solution {
    public List<List<Integer>> fourSum(int[] array, int targetSum) {
        HashMap<Integer,HashSet<List<Integer>>> hash = new HashMap<Integer,HashSet<List<Integer>>>();
        HashSet<List<Integer>> set = new HashSet<List<Integer>>();
		List<List<Integer>> answer = new ArrayList<List<Integer>>();
		for(int i=1;i<array.length-1;i++){
			for(int j=i+1;j<array.length;j++){
				int key = array[i]+array[j];
				if(hash.containsKey(targetSum - key)){
					HashSet<List<Integer>> fromHash = hash.get(targetSum - key);
					for(List<Integer> arr : fromHash){
                        Integer[] temp = new Integer[]{array[i],array[j],arr.get(0),arr.get(1)};
                        Arrays.sort(temp);
						set.add(Arrays.asList(temp));
					}
				}
			}
			for(int j=0;j<i;j++){
				int key = array[i]+array[j];
				if(!hash.containsKey(key)) hash.put(key, new HashSet<List<Integer>>());
				hash.get(key).add(Arrays.asList(new Integer[]{array[i],array[j]}));
			}	
		}
        for(List<Integer> s : set){
            answer.add(s);
        }
        return answer;
    }
}
```
For this problem, we can perform a similar method as we used in the previous 2Sum problem. We can find the sum of the first two values. But instead of putting it in an array, we can place them in a set. Because List<> is a class, the HashSet will be able to distinguish unique values. We can sort the list integer before turning it into a list to add to the set. This will produce unique values to put into the answer. 
The complexity wille be O(n^2) time | O(n) space.
Because the sort inside of the for loop is a constant space of 4, the max time of the sort will be 4log(4) which is a constant value.
