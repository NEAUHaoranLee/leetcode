/*
 * @lc app=leetcode.cn id=647 lang=javascript
 *
 * [647] 回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  // 日常暴力解法
  // let result = 0;

  // for (let i = 1; i <= s.length; i++) {
  //   let j = 0;

  //   while (j + i <= s.length) {
  //     let target = s.slice(j, j + i);

  //     if (target.split('').reverse().join('') === target) {
  //       result++;
  //     }

  //     j++;
  //   }
  // }

  // return result

  // 中心阔展
  let result = 0;

  for (let center = 0; center < s.length; center++) {
    const checkSubString = (l, r) => {
      while (l >= 0 && r <= s.length - 1) {
        if (s[l] === s[r]) {
          result++;
          l--;
          r++;
        } else {
          l = -1;
        }
      }
    };
    // 单数中心
    checkSubString(center, center);
    // 双数中心
    checkSubString(center, center + 1);
  }

  return result;
};
// @lc code=end
