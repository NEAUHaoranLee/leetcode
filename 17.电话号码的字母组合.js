/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (!digits) return [];

  const map = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  };
  

  // 回溯算法
  const track = [];
  const result = [];

  const backTrack = (index) => {
    // 当前数字对应的字符串
    const strings = map[digits[index]];

    for (let j = 0; j < strings.length; j++) {
      track.push(strings[j]);

      // 判断条件：满足就push一个结果，不满足就递归
      if (index === digits.length - 1) {
        result.push(track.join(''));
      } else {
        backTrack(index + 1);
      }

      track.pop();
    }
  };

  // 启动
  backTrack(0);

  return result;
};
// @lc code=end
