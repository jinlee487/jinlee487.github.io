---
title: "L21 Merge Two Sorted Lists"
excerpt: "LinkedList problem"

categories:
  - Algorithm
tags:
  - leetcodes
toc: true
toc_sticky: true
last_modified_at: 2022-01-26T16:00:00Z
---

# L21 Merge Two Sorted Lists problem 

[L21 Merge Two Sorted Lists leetcode](https://leetcode.com/problems/merge-two-sorted-lists/)

## solution

```
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        if(list1 == null && list2 == null) return null;
        else if(list1 == null) return list2;
        else if(list2 == null) return list1;
        ListNode smaller = list1.val < list2.val ? list1 : list2;
        ListNode bigger = list1.val < list2.val ? list2 : list1;
        while(bigger != null){
            if(smaller.next == null){
                smaller.next = bigger;
                break;
            }
            if(bigger.val < smaller.next.val ){
                ListNode temp = new ListNode();
                temp.val = bigger.val;
                temp.next = smaller.next;
                smaller.next = temp;
                smaller = temp;
                bigger = bigger.next;
            } else {
                smaller = smaller.next;
            }
        }
        return list1.val < list2.val ? list1 : list2;
    }    
}
```
For this problem, we can choose the smaller of the two node values. That will be our starting smaller node. We can iterate overthe nodes until we hit either of the 4conditions...

1. bigger is null.
This means that rest of the values in smaller can be left unchanged.

2. smaller is null.
This means that the rest of the values in bigger can be added to left. 

3. next smaller value is bigger than bigger. We can add the value bigger value to smaller.

4. next smaller value is smaller than bigger. We can move smaller value to the next smaller node. 

This would have a complexity of O(n) time | O(m) where n is the shorter of the two inputs and m is the longer of the two inputs. 



