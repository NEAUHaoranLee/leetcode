/*
 * @lc app=leetcode.cn id=139 lang=javascript
 *
 * [139] 单词拆分
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  // 我也不知道属于什么算法
  // 思路就是split(keyword) 然后把keyword两边的字符串递归
  if (!s) return true;

  let indexArr = [];
  let flag = false;

  for (let i = 0; i < wordDict.length; i++) {
    indexArr = s.split(wordDict[i]);

    if (indexArr.length === 1) {
      continue;
    }

    let flag = true;

    for (let j = 0; j < indexArr.length; j++) {
      flag = flag && wordBreak(indexArr[j], wordDict);
    }

    if (flag) {
      return true;
    }
  }

  return false;
};

// @lc code=end
