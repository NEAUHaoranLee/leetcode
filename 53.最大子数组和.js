/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  // 动态规划
  const dp = [];
  
  nums.forEach((num, index) => {
    if (index === 0 || dp[index - 1] < 0) {
      dp[index] = num;
    } else {
      dp[index] = dp[index - 1] + num;
    }
  })

  return Math.max(...dp)
};
// @lc code=end

