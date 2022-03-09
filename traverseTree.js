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


// function breadthFrist(tree) {
//   let queue = [];
//   let visited = [];
//   let depth = 1
//   queue.push(tree.root);
//
//   while (queue.length > 0) {
//     let node = queue.shift();
//     if (node.left) queue.push(node.left);
//     if (node.right) queue.push(node.right);
//     visited.push(node);
//   }
//
//   return visited.map(node => node.val);
// }


function breadthFrist(tree) {
  let queue = [[tree.root]];
  let visited = [];

  let currentQueue = [];


  while (queue.length > 0) {

    currentQueue = queue.shift();
    let visitedArr = [];
    let newQueueToAdd = [];


    while (currentQueue.length > 0) {
      let node = currentQueue.shift();
      if (node.left) newQueueToAdd.push(node.left);
      if (node.right) newQueueToAdd.push(node.right);
      visitedArr.push(node.val);
    }

    if(visitedArr.length > 0){

    visited.push(visitedArr);
    }
    if(newQueueToAdd.length > 0){

    queue.push(newQueueToAdd);
    }
  }

return visited
}

//console.log(breadthFrist(tree));


//  DEPTH FIRST

function preOrder(tree) {
// return the values in order to rebuild the tree
  let visited = [];

  function traverse(node) {
    visited.push(node);
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
  }

  traverse(tree.root);

  return visited.map(node => node.val);
}

 console.log(preOrder(tree));

function postOrder(tree) {
  let visited = [];

  function traverse(node) {
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
    visited.push(node);
  }

  traverse(tree.root);

  return visited.map(node => node.val);

}

// console.log(postOrder(tree));

function inOrder(tree) {

  // Return the tree in order from smallest to biggest
  let visited = [];

  function traverse(node) {
    if (node.left) traverse(node.left);
    visited.push(node);
    if (node.right) traverse(node.right);
  }

  traverse(tree.root);
  return visited.map(node => node.val);
}

 console.log(inOrder(tree));

// console.log(Math.ceil(Math.sqrt(16)));




