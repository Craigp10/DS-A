const isSubtree = function (root, subRoot) {
  const isSame = (root, subRoot) => {
    //compare nodes
    if (root == null && subRoot == null) return true;
    if (root == null || subRoot == null) return false;

    if (root.val != subRoot.val) return false;

    return isSame(root.left, subRoot.left) && isSame(root.right, subRoot.right);
  };

  if (root == null) return false;
  if (isSame(root, subRoot)) return true;
  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};
