/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const res = [];
  const expLength = matrix.flat().length;
  let direction = 'right'
  let limX = [0, matrix[0].length - 1];
  let limY = [0, matrix.length - 1];

  let x = 0,
    y = 0;
//
  while (expLength !== res.length) {
    

    switch (direction) {
      case 'right': {
        if (x + 1 <= limX[1] || res.length === expLength - 1) {
          res.push(matrix[y][x]);
          x++;
        } else {
          direction = 'down';
          limY[0]++;

        }
        break;
      }
      case 'down': {
        if (y + 1 <= limY[1] || res.length === expLength - 1) {
          res.push(matrix[y][x]);
          y++;
        } else {
          direction = 'left';
          limX[1]--;
        }
        break;
      }
      case 'left': {
        if (x - 1 >= limX[0] || res.length === expLength - 1) {
          res.push(matrix[y][x]);
          x--;
        } else {
          direction = 'up';
          limY[1]--;
        }
        break;
      }
      case 'up': {
        if (y - 1 >= limY[0] || res.length === expLength - 1) {
          res.push(matrix[y][x]);
          y--;
        } else {
          direction = 'right';
          limX[0]++;
        }
        break;
      }
    }
  }
  
  return res;
};
// @lc code=end
