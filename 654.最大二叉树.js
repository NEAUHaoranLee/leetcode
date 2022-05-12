/*
 * @lc app=leetcode.cn id=654 lang=javascript
 *
 * [654] 最大二叉树
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
  const left = nums.slice(0, nums.indexOf(Math.max(...nums)));
  const right = nums.slice(nums.indexOf(Math.max(...nums)) + 1);

  const root = new TreeNode(Math.max(...nums));
  root.left = left.length ? constructMaximumBinaryTree(left) : null;
  root.right = right.length ? constructMaximumBinaryTree(right) : null;

  return root;
};
// @lc code=end
