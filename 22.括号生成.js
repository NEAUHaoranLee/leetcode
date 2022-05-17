/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  // 回溯算法
  const arr = ['(', ')'];
  const track = [];
  const result = [];
  // 记录左右括号数量
  const counts = [0, 0];

  const backTrack = () => {
    // 跳出条件
    if (track.length === n * 2) {
      return result.push(track.join(''));
    }

    for (let i = 0; i < arr.length; i++) {
      counts[i]++;

      // 判断了右括号数量一定小于左括号数量 && 左括号数量一定 <= n
      // 这样就能控制整体的括号数量为 n
      if (counts[1] > counts[0] || counts[0] > n) {
        counts[i]--;

        continue;
      }

      track.push(arr[i]);

      backTrack();

      track.pop();

      counts[i]--;

    }
  };

  backTrack();

  return result;
};
// @lc code=end
