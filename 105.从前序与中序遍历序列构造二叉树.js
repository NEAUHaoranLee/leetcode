/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  if (!preorder.length) return null;

  const rootVal = preorder[0];
  const inIndex = inorder.indexOf(rootVal);
  const root = new TreeNode(rootVal);

  const leftInorder = inorder.slice(0, inIndex);
  const rightInorder = inorder.slice(inIndex + 1);
  const leftPreorder = preorder.slice(1, 1 + leftInorder.length)
  const rightPreorder = preorder.slice(1 + leftInorder.length)

  root.left = buildTree(leftPreorder, leftInorder)
  root.right = buildTree(rightPreorder, rightInorder);

  return root;
};
// @lc code=end

