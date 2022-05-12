/*
 * @lc app=leetcode.cn id=498 lang=javascript
 *
 * [498] 对角线遍历
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function (mat) {
  const m = mat.length;
  const n = mat[0].length;

  // 默认左上
  let flag = true;
  const res = [];

  for (let i = 0; i < m + n - 1; i++) {
    let x, y;

    if (flag) {
      x = i < m ? i : m - 1;
      y = i - x;
    } else {
      y = i < n ? i : n - 1;
      x = i - y;
    }
    console.log(x,y)

    let j = 0;
    let limit = Math.abs(x - y);

    while (j <= i && x >= 0 && x < m && y >= 0 && y < n) {
      res.push(mat[x][y]);

      if (flag) {
        x--;
        y++;
      } else {
        y--;
        x++;
      }

      j++;
    }

    flag = !flag;
  }

  return res;
};
// @lc code=end
