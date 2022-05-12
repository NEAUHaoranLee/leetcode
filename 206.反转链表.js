/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
var reverseList = function (head) {
  if (!head) return head;

  let prev = null;
  let current = head;
  let next = current.next;

  while (current) {
    current.next = prev;

    if (!next) {
      return current;
    }
    
    prev = current;
    current = next;
    next = next.next;
  }

};
// @lc code=end
