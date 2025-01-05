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

  findWithParent(data) {
    let cur = this.rootNode;
    let parent = null;
    while (cur) {
      if (data === cur.data) {
        return { node: cur, parent };
      } else if (data > cur.data) {
        parent = cur;
        cur = cur.right;
      } else {
        parent = cur;
        cur = cur.left;
      }
    }

    return null;
  }

  remove(data) {
    const res = this.findWithParent(data);
    if (!res) return;

    const { node, parent } = res;

    const deleteNode = (node, parent, newNode) => {
      if (!parent) this.rootNode = newNode;
      else if (parent.right === node) parent.right = newNode;
      else if (parent.left === node) parent.left = newNode;
    };

    if (!node.left && !node.right) deleteNode(node, parent, null);
    else if (!node.left || !node.right) {
      const newChild = node.left || node.right;
      deleteNode(node, parent, newChild);
    } else {
      let newChild = node.right;
      let newParent = node;
      while (newChild.left) {
        newParent = newChild;
        newChild = newChild.left;
      }
      node.data = newChild.data;
      deleteNode(newChild, newParent, newChild.right);
    }
  }

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