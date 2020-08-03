const Node = require('./node');

class BST {
  constructor(node = null) {
    this.root = node;
  }

  insert(data) {
    const node = new Node(null, null, data);
    if (this.root === null) {
      this.root = node;
      return;
    }

    let current = this.root;
    let parent = null;
    while (true) {
      parent = current;
      if (node.data < current.data) {
        current = current.left;
        if (current === null) {
          parent.left = node;
          break;
        }
      } else {
        current = current.right;
        if (current === null) {
          parent.right = node;
          return;
        }
      }
    }
  }

  preOrderTraversal(root) {
    const stack = [];

    let node = root;

    while (node !== null || stack.length > 0) {
      while (node !== null) {
        console.log(node.data);
        stack.push(node);
        node = node.left;
      }

      if (stack.length > 0) {
        node = stack.pop();
        node = node.right;
      }
    }
  }

  preOrderTraversalRecursion(node) {
    if (node !== null) {
      console.log(node.data);
      this.preOrderTraversal(node.left);
      this.preOrderTraversal(node.right);
    }
  }

  middleOrderTraversalRecursion(node) {
    if (node !== null) {
      this.inOrderTraversal(node.left);
      console.log(node.data);
      this.inOrderTraversal(node.right);
    }
  }

  postOrderTraversalRecursion(node) {
    if (node !== null) {
      this.postOrderTraversal(node.left);
      this.postOrderTraversal(node.right);
      console.log(node.data);
    }
  }
}

module.exports = BST;
