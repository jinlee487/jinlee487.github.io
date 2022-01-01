---
title: "54. Spiral Matrix"
excerpt: "String Array problem"

categories:
  - Algorithm
tags:
  - leetcodes
toc: true
toc_sticky: true
last_modified_at: 2022-01-01T16:00:00Z
---

# Spiral Matrix problem 

[Spiral Matrix leetcode](https://leetcode.com/problems/spiral-matrix/)

## solution
```
class Solution {
    public List<Integer> spiralOrder(int[][] matrix) {
        ArrayList<Integer> answer = new ArrayList<Integer>();
        if (matrix.length == 0) {
			return answer;
		}
		var startRow = 0;
		var endRow = matrix.length - 1;
		var startCol = 0;
		var endCol = matrix[0].length - 1;
        while(startRow <= endRow && startCol <= endCol){
            for(int i=startCol;i<=endCol;i++){
                answer.add(matrix[startRow][i]);
            }
            for(int i=startRow+1;i<=endRow;i++){
                answer.add(matrix[i][endCol]);
            }
            for(int i=endCol-1;startCol<=i;i--){
                if(startRow == endRow) break;  
                answer.add(matrix[endRow][i]);
            }
            for(int i=endRow-1;startRow<i;i--){
                if(startCol == endCol) break;
                answer.add(matrix[i][startCol]);
            }
            startRow++;
            endRow--;
            startCol++;
            endCol--;
        }
        return answer;
    }
}
```
For this problem, we can simply think about traversing in a spiral a loop order. If you draw out the matrix, you will realize that the it is simply a rectangle inside a rectangle. We can find a pattern. O(n) time | O(n) space