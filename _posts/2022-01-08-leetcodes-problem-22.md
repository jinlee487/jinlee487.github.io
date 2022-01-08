---
title: "L104 Maximum Depth of Binary Tree"
excerpt: "String Array problem"

categories:
  - Algorithm
tags:
  - leetcodes
toc: true
toc_sticky: true
last_modified_at: 2022-01-08T16:00:00Z
---

# L104 Maximum Depth of Binary Tree problem 

[L104 Maximum Depth of Binary Tree leetcode](https://leetcode.com/problems/maximum-depth-of-binary-tree/)

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
    public int maxDepth(TreeNode root) {
        int[] answer = new int[1];
        if(root == null) return answer[0];
        maxDepth(root, 0, answer);
        return answer[0];
    }
    public void maxDepth(TreeNode node, int currentDepth, int[] answer){
        currentDepth += 1;
        if(node.left != null) maxDepth(node.left, currentDepth, answer);
        if(node.right != null) maxDepth(node.right, currentDepth, answer);
        if(node.right == null && node.left == null) answer[0] = Math.max(answer[0], currentDepth);
        return;
    }
}
```
For this problem, we can traverse the the tree nodes until we find a leaf node. If the depth is the deeper than the answer value, we can replace the answer value with the current depth and go traverse a different leaf. 

This would have a complexity of O(n) time | O(1) space



