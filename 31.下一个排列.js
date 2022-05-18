/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 */

// @lc code=start
/**
 * 从后往前判断下降趋势，替换前面的那个数字
 * 
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  let index = nums.length - 1;
  let temp, l, r;

  // 从后往前判断
  while (index >= 0) {
    l = nums[index - 1];
    r = nums[index];

    // 把当前的数字放在最后，保证index到最后的数字都是升序排列，方便查找替换
    temp = nums.splice(index, 1);
    nums.push(temp);

    if (l < r) {
      // 如果出现下降趋势就从后边排好序的数字里边找到第一个比前边数大的数字并交换
      for (let i = index; i < nums.length; i++) {
        if (nums[i] > nums[index - 1]) {
          temp = nums[i];
          nums[i] = nums[index - 1];
          nums[index - 1] = temp;

          return;
        }
      }
    }

    index--;
  }
};

// @lc code=end
