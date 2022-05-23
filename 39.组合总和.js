/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  // 回溯算法

  const track = [];
  const result = [];
  const map = new Map();
  let num = 0;

  const backtrack = () => {
    if (num > Number(target)) return;

    const index = [...track].sort();

    if (num === Number(target) && !map.has(index.join(''))) {
      map.set(index.join(''));
      result.push([...index]);
    }

    for (let i = 0; i < candidates.length; i++) {
      num += candidates[i];
      track.push(candidates[i]);

      backtrack();

      num -= candidates[i];
      track.pop();
    }
  };

  backtrack();

  return result;
};
// @lc code=end
