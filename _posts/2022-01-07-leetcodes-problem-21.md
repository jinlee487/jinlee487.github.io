---
title: "L112 Path Sum"
excerpt: "String Array problem"

categories:
  - Algorithm
tags:
  - leetcodes
toc: true
toc_sticky: true
last_modified_at: 2022-01-07T16:00:00Z
---

# L112 Path Sum problem 

[L112 Path Sum leetcode](https://leetcode.com/problems/path-sum/)

## solution

```
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public boolean hasPathSum(TreeNode root, int targetSum) {
        if(root==null) return false;
        int sum = 0;
        return hasPathSum(root, targetSum, sum);
    }
    public boolean hasPathSum(TreeNode node, int targetSum, int sum){
        sum += node.val;
        if(node.left != null && hasPathSum(node.left, targetSum, sum)) return true;
        if(node.right != null && hasPathSum(node.right, targetSum, sum)) return true;
        if(node.left == null && node.right == null && sum == targetSum) return true;
        return false;
    }
}

```
For this problem, we can traverse the the tree nodes until we find a leaf node. If the sum of the branch is the same as the target sum, we can return true. If not, we return false and go search a different branch.

This would have a complexity of O(n) time | O(n) space



