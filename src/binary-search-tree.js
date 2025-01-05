const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    const addNode = (data, node) => {
      if (!node) return new Node(data);

      if (data < node.data) {
        node.left = addNode(data, node.left)

      }
      if (data > node.data) {
        node.right = addNode(data, node.right)
      }

      return node;
    };

    if (!this.rootNode) {
      this.rootNode = new Node(data);
    } else {
      addNode(data, this.rootNode);
    }
  }

  has(data) { }

  find(data) { }

  remove(data) { }

  min() { }

  max() { }
}

module.exports = {
  BinarySearchTree
};