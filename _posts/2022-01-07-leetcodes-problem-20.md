---
title: "L270 Closest Binary Search Tree Value"
excerpt: "String Array problem"

categories:
  - Algorithm
tags:
  - leetcodes
toc: true
toc_sticky: true
last_modified_at: 2022-01-07T16:00:00Z
---

# Closest Binary Search Tree Value problem 

[Closest Binary Search Tree Value leetcode](https://leetcode.com/problems/closest-binary-search-tree-value/)

## solution

```
class Program {
  public static int findClosestValueInBst(BST tree, int target) {
    // Write your code here.
		// recursive implementation
		// Avergae: 0(log(n)) time | 0(log(n)) space
		// worst: 0(n) time | 0(n) space
    return findClosestValueInBst(tree, target, tree.value);
  }
	static int findClosestValueInBst(BST tree, int target, int closest){
		if(Math.abs(tree.value - target) < Math.abs(closest - target)){
			closest = tree.value;
		} 
		if(target < tree.value && tree.left != null){
			return findClosestValueInBst(tree.left, target, closest);
		} else if(target > tree.value && tree.right != null){
			return findClosestValueInBst(tree.right, target, closest);
		} else {
			return closest;
		}
	}
}

```
For this problem, we can traverse the the bst values the same way it would add values to bst. we simply recursively traverse the nodes and eliminate half of the search every time.

This would have a complexity of O(log(n)) time | O(n) space


```
class Program {
  public static int findClosestValueInBst(BST tree, int target) {
    // Write your code here.
		// iterative implementation
    return findClosestValueinBstHelper(tree, target, tree.value);
  }
	public static int findClosestValueinBstHelper(BST tree, int target, int closest){
		BST currentNode = tree;
		while (currentNode != null){
			if(Math.abs(currentNode.value - target) < Math.abs(closest - target)){
				closest = currentNode.value;
			}
			if(target < currentNode.value){
				currentNode = currentNode.left;
			} else if(target > currentNode.value){
				currentNode = currentNode.right;
			} else { 
				break;
			}
		}
		return closest;
	}
}
```
We can improve this method by changing our solution to an iterative solution. 

This would reduce the complexity to O(log(n)) time | O(1) space


