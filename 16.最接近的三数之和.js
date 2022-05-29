/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  // 三数之和 三指针
  nums.sort((a, b) => a - b);
  let index = 0,
    res = Infinity,
    left,
    right,
    sum;

  while (index <= nums.length - 3) {
    left = index + 1;
    right = nums.length - 1;

    while (left < right) {
      sum = nums[index] + nums[left] + nums[right];

      res = Math.abs(target - sum) < Math.abs(target - res) ? sum : res;

      if (sum > target) {
        right--;
      } else if (sum < target) {
        left++;
      } else {
        console.log(nums, left, right, index)
        return target;
      }
    }

    index++;
  }

  return res;
};
// @lc code=end
