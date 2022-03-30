// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }
//
// class SinglyLinkedList {
//   constructor() {
//     this.length = 0;
//     this.head = null;
//     this.tail = null;
//   }
//
//   push(val) {
//     let newNode = new Node(val);
//     if (this.head) {
//       this.tail.next = newNode;
//       this.tail = newNode;
//
//     } else {
//       this.head = newNode;
//       this.tail = newNode;
//     }
//     this.length++;
//     return this;
//   }
//
//   traverse() {
//     let current = this.head;
//
//     while (current) {
//       console.log(current.val);
//       current = current.next;
//     }
//
//   }
//
//   pop() {
//
//     if (!this.head) return undefined;
//
//     let currentNode = this.head;
//     let nextNode = currentNode.next;
//
//     if (!currentNode.next) {
//       this.head = null;
//       this.length = 0;
//       return currentNode;
//     }
//
//     while (nextNode.next) {
//       currentNode = nextNode;
//       nextNode = currentNode.next;
//     }
//
//     this.tail = currentNode;
//     currentNode.next = null;
//     this.length--;
//     return nextNode;
//
//   }
//
//   shift() {
//     if (!this.head) return undefined;
//     let current = this.head;
//     this.head = this.head.next;
//     this.length--;
//     if (this.length === 0) {
//       this.tail = null;
//     }
//     return current;
//   }
//
//   unshift(val) {
//     if (!this.head) {
//       this.push(val);
//       return;
//     }
//
//     let newNode = new Node(val);
//
//     newNode.next = this.head;
//     this.head = newNode;
//     this.length++;
//
//     return this;
//
//   }
//
//   get(index) {
//     if (index < 0 || index >= this.length) {
//       return undefined;
//     }
//
//     let foundNode = this.head;
//     for (let i = 1; i <= index; i++) {
//       foundNode = foundNode.next;
//     }
//
//     return foundNode;
//
//   }
//
//   set(index, value) {
//     let found = this.get(index);
//     if (!found) {
//       return undefined;
//     } else {
//       found.val = value;
//     }
//     return found;
//   }
//
//   insert(index, value) {
//
//     if (index > this.length || index < 0) {
//       return false;
//     } else if (index === 0) {
//       this.unshift(value);
//       return this;
//     } else if (index === this.length) {
//       this.push(value);
//       return this;
//     }
//
//     let newNode = new Node(value);
//     let prevNode = this.get(index - 1);
//     let nextNode = this.get(index);
//
//     prevNode.next = newNode;
//     newNode.next = nextNode;
//     return this;
//
//   }
//
//   remove(index) {
//     if (index > this.length - 1 || index < 0) {
//       return false;
//     } else if (index === 0) {
//       this.shift();
//       return this;
//     } else if (index === this.length - 1) {
//       this.pop();
//       return this;
//     }
//
//     let prevNode = this.get(index - 1);
//     let nextNode = this.get(index);
//
//     prevNode.next = nextNode.next;
//     return this;
//
//   }
//
//   reverse() {
//
//     if (this.length === 0) return undefined;
//     if (this.length === 1) return this;
//
//     let current = this.head;
//     let tail = this.tail;
//     this.head = tail;
//     this.tail = current;
//     let prev = null;
//     let next;
//
//     for (let i = 0; i < this.length; i++) {
//       next = current.next
//       current.next = prev;
//       prev = current
//       current = next
//     }
//
//     return true;
//   }
//
// }
//
// let list = new SinglyLinkedList();
//
// list.push('start');
// list.push('1');
// list.push('2');
// list.push('3');
// list.push('end');
//
//
// //list.traverse()
//
// // list.pop()
// // list.shift()
// // list.unshift('before')
//
// list.reverse();
//
// list.traverse();


class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {

  constructor(val) {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;

    }

    this.length++;
    return this;
  }

  pop() {

    if (this.length === 0) return undefined;

    if (this.length === 1) {
      const returnNode = this.head;
      this.tail = null;
      this.head = null;
      this.length--;
      return returnNode;

    } else {

      let current = this.head;
      let next = this.head.next;

      while (next.next) {
        current = next;
        next = next.next;
      }

      current.next = null;
      this.tail = current;
      this.length--;
      return next;
    }

  }

  get(num) {
    if (num < 0 || num >= this.length) return undefined;
    if (num === 0) return this.head;

    let current = this.head;
    for (let i = 1; i >= num; i++) {
      current = current.next;
    }

    return current;

  }

}




