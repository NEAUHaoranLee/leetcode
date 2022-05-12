/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  const a = [0,0,9,0,11];
  let zero = 0;
  let index = 0;
  let flag = true;
  let i = 0;

  while (i< a.length) {
    if (a[i] === 0) {
      zero++;
      i++;
      continue;
    }

    if (index && a[i] !== index + 1) {
      console.log(a[i], index)
      if (zero > 0) {
        zero--;
        index++;
      } else {
        flag = false;
        return;
      }
    } else {
      index = a[i];
      i++
    }
  }

  console.log(flag)
};
// @lc code=end
