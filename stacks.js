// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }
//
//
// class Stack {
//
//   constructor() {
//     this.first = null;
//     this.last = null;
//     this.size = 0;
//
//   }
//
//   push(val) {
//     let newNode = new Node(val);
//
//     if (this.size === 0) {
//       this.first = newNode;
//       this.last = newNode;
//     } else {
//       let temp = this.first;
//       this.first = newNode;
//       this.first.next = temp;
//     }
//     return ++this.size;
//   }
//
//   pop() {
//
//     if (this.size === 0) return undefined;
//
//     let temp = this.first;
//     if (this.size === 1) {
//       this.last = null;
//     }
//
//     this.first = this.first.next;
//     this.size --
//     return temp.val;
//   }
// }
//
// const stack = new Stack()
//
// stack.push(2)
// stack.push(3)
// stack.push(4)
// console.log(stack.push(5))
//
// console.log(stack.pop())


class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}


class MinStack {

  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    let newNode = new Node(val);

    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }

    this.size++
    return null;
  }

  pop() {

    if (this.size === 0) return undefined;

    if (this.size === 1) {
      let temp = this.first;
      this.first = null;
      this.last = null;
      return temp.val; 
    }

    let current = this.first;
    let next = current.next;

    current.next = null;
    this.first = next
    return current.val;

  }

  getMin() {
    let min = this.first.val;
    let current = this.first;
    while (current) {

      if (current.val < min) {
        min = current.val;
      }
      current = current.next;

    }

    return min;

  }

  top() {
    return this.first.val;
  }
}

const minStack = new MinStack();

console.log(minStack.push(-2));
console.log(minStack.push(0));
console.log(minStack.push(-3));
console.log(minStack.getMin()); // return -3
console.log(minStack.pop());
console.log(minStack.top());    // return 0
console.log(minStack.getMin()); // return -2
