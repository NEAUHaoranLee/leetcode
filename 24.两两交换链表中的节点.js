/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  if (!head) return head;
  let start = new ListNode();
  start.next = head;

  let left = start;
  let mid = start.next;
  let right = mid.next;

  while (right) {
    mid.next = right.next;
    right.next = mid;
    left.next = right;

    if (mid.next && mid.next.next) {
      left = mid;
      mid = left.next;
      right = mid.next;
    } else  {
      right = null;
    }
  }

  return start.next;
};
// @lc code=end

