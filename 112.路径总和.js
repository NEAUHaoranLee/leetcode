/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  if (!root) return false;

  let num = 0;
  let flag = false;

  const backTrack = (tree) => {
    if (!tree) return;

    num += tree.val;

    if (num === targetSum && !tree.left && !tree.right) {
      flag = true;
      num -= tree.val;

      return;
    }

    backTrack(tree.left);
    backTrack(tree.right);

    num -= tree.val;
    return;
  };

  backTrack(root);

  return flag;
};
// @lc code=end
