/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (N, W, wt, val) {
  // n = 物品数
  // W = 背包重量

  const dp = new Array(N + 1);
  dp.fill(new Array(W + 1).fill(0));
console.log(dp);
  for (let i = 1; i <= N; i++) {
    for (let w = 1; w <= W; w++) {
      if (w - wt[i - 1] < 0) {
        // 当前背包容量装不下，只能选择不装入背包
        dp[i][w] = dp[i - 1][w];
      } else {
        // 装入或者不装入背包，择优
        dp[i][w] = Math.max(dp[i - 1][w - wt[i - 1]] + val[i - 1], dp[i - 1][w]);
      }
    }
  }

  console.log(dp);
};

const N = 3,
  W = 4;
const wt = [2, 1, 4];
const val = [4, 2, 1000];

hasCycle(N, W, wt, val);
// @lc code=end
