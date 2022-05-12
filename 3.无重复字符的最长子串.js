/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  const check = (window) => {
    return window.length === [...new Set(window)].length;
  };

  const window = [];
  let max = 0;
  let index = 0;

  while (s[index]) {
    if (check([...window, s[index]])) {
      window.push(s[index]);
      max = Math.max(max, window.length);
      index++;
    } else {
      window.shift();
    }
  }

  return max;
};
// @lc code=end

