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
    while(true){
      if (val === current.val) {
        return true;
      }

      if(val < current.val){
        // go left
        if(current.left){
          current = current.left
        } else {
          return false
        }

      } else {
        // go right
        if(current.right){
          current = current.right
        } else {
          return false
        }
      }

  }

}


let tree = new BinarySearchTree();
// tree.root = new Node(10);
// tree.root.right = new Node(15);
// tree.root.left = new Node(7);
// tree.root.left.right = new Node(9);

tree.insert(20);
tree.insert(30);
tree.insert(50);
tree.insert(10);
tree.insert(2);
// console.log(tree.insert(50));

console.log(tree.find(44))

tree.insert(44);

console.log(tree.find(44))

// console.log(tree.root);
