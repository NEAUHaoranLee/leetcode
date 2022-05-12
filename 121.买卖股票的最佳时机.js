/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let min = +Infinity;
  let max = 0;

  prices.forEach((price) => {
    if (price < min) {
      min = price
    }

    if (price - min > max) {
      max = price - min;
    }
  })

  return max;
};
// @lc code=end

