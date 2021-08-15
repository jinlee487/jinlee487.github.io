---
title: "우아한 형제 Tech Camp 2nd Round Coding Test Review"
categories:
  - Algorithm
tags:
  - leetcodes
toc: true
toc_sticky: true
last_modified_at: 2021-08-15T16:00:00Z
---

# two-sum problem 

[https://leetcode.com/problems/two-sum/](https://leetcode.com/problems/two-sum/)

## my solution
```
class Solution(object):
    def twoSum(self, nums, target):
        d = {}
        for i in range(len(nums)):
            if nums[i] in d:
                d[nums[i]].append(i)
            else: 
                d[nums[i]] = [i]
        for k in d:
            a = d[k].pop()
            b = target - nums[a]
            if b in d:
                if d[b]:
                    return [a,d[b].pop()]
            else:
                d[k].append(a)
```

I solve the problem using a dictionary. I set the keys as the values in the list. 

Then I appended index of the values in the list into the list in the key of the dictionary.

This way, I can account for the duplicate values by popping each value out of the list in the dictionary. 

Runtime: 52 ms, faster than 58.15% of Python online submissions for Two Sum.

Memory Usage: 15.2 MB, less than 6.34% of Python online submissions for Two Sum.

However, I barely made it past 50% of the submissions score.


## best solution

```


class Solution(object):
    def twoSum(self, nums, target):
        hashMap={nums[idx]:idx for idx in range(len(nums))} # {num : index}        
        for idx in range(len(nums)):
            complement=target-nums[idx]
            if hashMap.get(complement,False) and hashMap.get(complement,False) != idx:
                return [idx,hashMap.get(complement)]              
```            
      
Runtime: 40 ms, faster than 92.58% of Python online submissions for Two Sum.

Memory Usage: 14.4 MB, less than 23.67% of Python online submissions for Two Sum.

I guess I still have to learn how tto use pythonic coding. 