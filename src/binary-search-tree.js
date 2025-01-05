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

  has(data) {
    return this.find(data) !== null;
  }

  find(data) {
    const findVal = (data, node) => {
      if (!node) return null;
      if (data === node.data) return node;

      if (data > node.data) {
        return findVal(data, node.right);
      } else if (data < node.data) {
        return findVal(data, node.left);
      }
    };

    if (this.rootNode.data === data) {
      return this.rootNode;
    } else return findVal(data, this.rootNode);
  }

  remove(data) { }

  min() {
    const findMin = (node) => {
      if (node.left) {
        return findMin(node.left);
      }
      return node.data;
    };

    return this.rootNode ? findMin(this.rootNode) : null;
  }

  max() {
    const findMax = (node) => {
      if (node.right) {
        return findMax(node.right);
      }
      return node.data;
    };

    return this.rootNode ? findMax(this.rootNode) : null;
  }
}

module.exports = {
  BinarySearchTree
};