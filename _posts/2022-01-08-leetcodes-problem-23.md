---
title: "L226 Invert Binary Tree"
excerpt: "String Array problem"

categories:
  - Algorithm
tags:
  - leetcodes
toc: true
toc_sticky: true
last_modified_at: 2022-01-08T16:00:00Z
---

# L226 Invert Binary Tree problem 

[L226 Invert Binary Tree leetcode](https://leetcode.com/problems/invert-binary-tree/)

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
    public TreeNode invertTree(TreeNode root) {
        if(root == null) return root;
        TreeNode temp = root.right;
        root.right = root.left;
        root.left = temp;
        invertTree(root.left);
        invertTree(root.right);
        return root;
    }
}
```
For this problem, we swap the left and right nodes for every nodes. Once we have traversed through every performing the swap, the tree will be inverted.

This would have a complexity of O(n) time | O(1) space



