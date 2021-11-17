var isValidBST = function (root, min = null, max = null) {
  //defining a subtree - left < root < right
  //Valid root node
  if (!root) return null;
  //Check if our current max exist and if the root val is greater than it -- false if true.
  if (max != null && root.val >= max) return false;
  //Check if our current min exist and if the root val is less than it -- false if true.
  if (min != null && root.val <= min) return false;

  //If left node exist recursively call our function with it, setting a new min and max
  if (root.left && !isValidBST(root.left, min, root.val)) return false;

  //If right node exist recursively call our function with it, setting a new min and max
  if (root.right && !isValidBST(root.right, root.val, max)) return false;

  //if all check pass return true
  return true;
};
