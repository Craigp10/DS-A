var postorder = function (root) {
  if (root == null) {
    return [];
  }

  let stack = [];
  stack.push(root);
  let reversePostOrder = [];

  while (stack.length != 0) {
    let node = stack.pop();
    reversePostOrder.push(node.val);

    for (let i = 0; i < node.children.length; i++) {
      stack.push(node.children[i]);
    }
  }

  return reversePostOrder.reverse();
};
