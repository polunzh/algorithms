const BST = require('./bst');
const Node = require('./node');

const root = new Node(null, null, 2);
const bst = new BST(root);

bst.insert(1);
bst.insert(5);
bst.insert(10);
bst.insert(20);

// bst.preOrderTraversal(root);
// bst.inOrderTraversal(root);
bst.postOrderTraversal(root);
