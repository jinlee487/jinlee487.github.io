---
title: "L543 Diameter of Binary Tree"
excerpt: "String Array problem"

categories:
  - Algorithm
tags:
  - leetcodes
toc: true
toc_sticky: true
last_modified_at: 2022-01-09T16:00:00Z
---

# L543 Diameter of Binary Tree problem 

[L543 Diameter of Binary Tree leetcode](https://leetcode.com/problems/diameter-of-binary-tree/)

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
class TreeInfo {
    public int diameter;
    public int height; 
    public TreeInfo(int diameter, int height){
        this.diameter = diameter;
        this.height = height;
    }
}
class Solution {
    public int diameterOfBinaryTree(TreeNode root) {
        return diameterOfBinaryTreeHelper(root).diameter;   
    }
    public TreeInfo diameterOfBinaryTreeHelper(TreeNode node){
        if(node == null) return new TreeInfo(0,0);
        TreeInfo left = diameterOfBinaryTreeHelper(node.left);
        TreeInfo right = diameterOfBinaryTreeHelper(node.right);
        int longestDiameter = Math.max(left.height + right.height, 
                                       Math.max(left.diameter, right.diameter));
        int currentHeight = 1 + Math.max(left.height, right.height);
        return new TreeInfo(longestDiameter, currentHeight);        
    }
}
```
For this problem, we can think of each node as a potential diameter or a part of a branch of the diameter. We can record the values in a class. Then we can compare the longest diameter and the longest height at each of the node location and carry the longest up the tree. Once we reach the root of the tree, we will have gotten our longest diameter. 

This would have a complexity of O(n) time | O(h) space where h is the longest height or the depth of the tree.



