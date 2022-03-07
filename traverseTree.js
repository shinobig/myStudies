class Node {

  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let nodeToAdd = new Node(val);
    let travel = true;
    let current = this.root;

    if (!this.root) {
      this.root = nodeToAdd;
      return this;
    }

    while (current && travel) {

      if (val === current.val) {
        return undefined;
      }

      if (val < current.val) {
        // go left
        if (current.left) {
          // move current
          current = current.left;
        } else {
          current.left = nodeToAdd;
          travel = false;
        }
      } else {
        if (current.right) {
          current = current.right;
        } else {
          current.right = nodeToAdd;
          travel = false;
        }
      }
    }

    return this;
  }

  find(val) {
    if (!this.root) return false;

    let current = this.root;
    while (true) {
      if (val === current.val) {
        return true;
      }

      if (val < current.val) {
        // go left
        if (current.left) {
          current = current.left;
        } else {
          return false;
        }

      } else {
        // go right
        if (current.right) {
          current = current.right;
        } else {
          return false;
        }
      }
    }

  }

}

let tree = new BinarySearchTree();

tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);


function breadthFrist(tree) {
  let queue = [];
  let visited = [];
  queue.push(tree.root);
  while (queue.length > 0) {
    let node = queue.shift();
    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
    visited.push(node);
  }

  let result = visited.map(node => node.val);
  return result;
}

console.log(breadthFrist(tree));
