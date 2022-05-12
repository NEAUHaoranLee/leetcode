/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  //双循环 这样会超时

  // let max = 0;
  // let index;

  // for (let i = 0; i < height.length; i++) {
  //   for (let j = i + 1; j < height.length; j++) {
  //     index = (j - i) * Math.min(height[i], height[j]);

  //     max = Math.max(max, index);
  //   }
  // }

  // return max

  // 双指针，
  let i = 0,
    j = height.length - 1;
  let max = 0;

  while (i < j) {
    max = Math.max(max, (j - i) * Math.min(height[i], height[j]));
    // 如果左侧柱子比右侧矮，往右找，反之
    if (height[i] < height[j]) {
      i++;
    } else {
      j--;
    }
  }

  return max;
};
// @lc code=end
