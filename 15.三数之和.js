/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  if (nums.length < 3) return [];

  const res = [];
  const target = nums.sort((a, b) => a - b);

  for (let i = 0; i < target.length - 2; i++) {
    let l = i + 1;
    let r = target.length - 1;
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    while (l < r) {
      if (target[i] + target[l] + target[r] < 0) {
        l++;
      } else if (target[i] + target[l] + target[r] > 0) {
        r--;
      } else {
        res.push([target[i], target[l], target[r]]);
        l++;
        r--;
        while (nums[l] === nums[l - 1]) {
          l++;
        }
        while (nums[r] === nums[r + 1]) {
          r--;
        }
      }
    }
  }

  return res;
};
// @lc code=end
