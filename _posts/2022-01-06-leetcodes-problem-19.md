---
title: "L281 Zigzag Iterator"
excerpt: "String Array problem"

categories:
  - Algorithm
tags:
  - leetcodes
toc: true
toc_sticky: true
last_modified_at: 2022-01-06T16:00:00Z
---

# Zigzag Iterator problem 

[Zigzag Iterator leetcode](https://leetcode.com/problems/zigzag-iterator/)

## solution

```
class Program {
  public static List<Integer> zigzagTraverse(List<List<Integer>> array) {
		int row = array.size()-1;
		int column = array.get(0).size()-1;
		int i = 0;
		int j = 0;
		ArrayList<Integer> answer = new ArrayList<Integer>();
		answer.add(array.get(i).get(j));
		while(i<=row && j<=column){
			// down
			if((i+j)%2==0){
				if(check(i+1,j-1,row,column)) answer.add(array.get(++i).get(--j));
				else if(check(i+1,j,row,column)) answer.add(array.get(++i).get(j));
				else if(check(i,j+1,row,column))answer.add(array.get(i).get(++j));
			} else {
				if(check(i-1,j+1,row,column)) answer.add(array.get(--i).get(++j));
				else if(check(i,j+1,row,column)) answer.add(array.get(i).get(++j));
				else if(check(i+1,j,row,column))answer.add(array.get(++i).get(j));
			}
			if(i==row && j==column) break;
		}
		return answer;
  }
	public static boolean check(int i, int j, int row, int column){
		if(i<0 || row<i) return false;
		if(j<0 || column<j) return false;
		return true;
	}
}

```
Zigzag Traverse For this problem, think simple. The best method is to simply traverse the value one at a time.

The key pattern is that when row + column is even, it will always go down. When it is odd, it will go up.

O(n) time | O(n) space

