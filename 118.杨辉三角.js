/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  if (numRows === 1) return [[1]];
  if (numRows === 2)return [[1], [1, 1]];

  const prevList = generate(numRows - 1);
  const prev = prevList[prevList.length - 1];
  const res = [1];

  for (let i = 0; i < prev.length; i++) {
    if (prev[i + 1]) {
      res.push(prev[i] + prev[i + 1]);
    }
  }
  res.push(1);
  prevList.push(res)

  return prevList;
};
// @lc code=end

