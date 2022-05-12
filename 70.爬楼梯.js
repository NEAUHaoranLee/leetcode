/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */

var climbStairs = function (n) {
  const dp = [];

  for (let i = 0; i < n; i++) {
    if (i === 0) {
      dp[i] = 1;
      continue;
    }
    if (i === 1) {
      dp[i] = 2;
      continue;
    }

    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n - 1];
};
// @lc code=end
