/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

/**
 * Find lowest common ancestor where nodes p and q can be found
 *[5,3,6,2,4,null,7,1] p = 4 q = 3 - returns 3
 */

const lowestCommonAncestor = (root, p, q) => {
  //iterate tree looking for a condition where when I find the two nodes return the nearest parent.
  //Condition is if both values are not in the same direction via binary search, then we can return the current node.
  //Note doing strong condition check, not equals because it fits the same condition.
  if (p.val > root.val && q.val > root.val)
    return lowestCommonAncestor(root.right, p, q);
  else if (p.val < root.val && q.val < root.val)
    return lowestCommonAncestor(root.left, p, q);
  else return root;
};
