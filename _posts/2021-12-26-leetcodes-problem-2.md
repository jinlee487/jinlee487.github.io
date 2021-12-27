---
title: "is-subsequence Leetcodes problem L392"
excerpt: "String problem"

categories:
  - Algorithm
tags:
  - leetcodes
toc: true
toc_sticky: true
last_modified_at: 2021-12-27T16:00:00Z
---

# is-subsequence problem 

[https://leetcode.com/problems/is-subsequence/](https://leetcode.com/problems/is-subsequence/)

## my solution
```
class Solution {
    public boolean isSubsequence(String s, String t) {
        int answer = 0;
        if(s.length()==0) return true;
        for(int i=0;i<t.length(); i++){
            char c = t.charAt(i);
            if(s.charAt(answer)==c) answer++;
            if(answer == s.length()) break;
        }
        return answer == s.length();
    }
}
```

Subsequence means that the numbers on the sequence are given in the same order of the first sequence, but does not have to be the exact same.

We can solve this problem using a O(n) time. n being the length of the given sequence.

We simply loop through the first array while checking with a pointer indexed to the number in the subsequence. When we find a matching number, we add + 1 to the pointer.

When we have finished the loop, the pointer value should be the same as the size of the subsequence array.

If not, then it must mean the subsequence was not a subsequence after all.
