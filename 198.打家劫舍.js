/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const dp = [];

  for (let i = 0; i < nums.length; i++) {
    // 至少能偷到i下边的金额
    dp[i] = nums[i];

    if (i === 1) dp[i] = Math.max(nums[0], nums[1]);

    if (i > 1) {
      dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
    }
    // for (let j = 0; j < i - 1; j++) {
    //   dp[i] = Math.max(dp[i], dp[j] + nums[i]);
    // }
  }

  return Math.max(...dp);
};
// @lc code=end
