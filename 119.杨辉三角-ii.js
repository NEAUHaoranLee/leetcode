/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  if (rowIndex === 0) return [1];
  if (rowIndex === 1)return [1, 1];

  const prev = getRow(rowIndex - 1);
  const res = [1];

  for (let i = 0; i < prev.length; i++) {
    if (prev[i + 1]) {
      res.push(prev[i] + prev[i + 1]);
    }
  }
  res.push(1);

  return res;
};
// @lc code=end

