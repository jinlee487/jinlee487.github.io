---
title: "non-consstructible change algoexpert problem"
excerpt: "String Array problem"

categories:
  - Algorithm
tags:
  - leetcodes
toc: true
toc_sticky: true
last_modified_at: 2021-12-28T16:00:00Z
---

# tournament-winner problem 

[git-repo](https://github.com/jinlee487/Algorithm/tree/master/src/algoexpert/easy/non_constructibleChange)

## solution
```
  public int nonConstructibleChange(int[] coins) {
    // O(nlogn) time | O(1) space - where n is the number of coins
		Arrays.sort(coins);
		int s = 0;
		for(int coin : coins){
			if(s+1<coin){
				return s+1;
			}
			s += coin;		
		}
    return s+1;
  }

```
We can solve this problem by adding up the coins and comparing the current sum to the next coin in the array. if the sum + 1 < coin
then we can assume that sum + 1 cannot be made because the next value of the coin is too big and it will skip the immediate next couple values.