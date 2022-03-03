class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
  }

  pop() {

    if (this.length === 0) {
      return null;
    }
    let removingNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = removingNode.prev;
      removingNode.prev = null;
      this.tail.next = null;
    }

    this.length--;
    return removingNode;

  }

  shift() {

    if (this.length === 0) {
      return null;
    }
    let shiftedNode = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = shiftedNode.next;
      this.head.prev = null;
      shiftedNode.next = null;
    }

    this.length--;
    return shiftedNode;

  }

  unshift(val) {
    let newNode = new Node(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let oldHead = this.head;
      this.head = newNode;
      newNode.next = oldHead;
      oldHead.prev = this.head;

    }

    this.length++;
    return this;
  }

  get(index) {

    if (index >= this.length || index < 0) return null;
    let middle = Math.floor((this.length - 1) / 2);

    let current;

    if (middle < index) {
      current = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        current = current.prev;
      }

      return current;
    } else {
      current = this.head;
      for (let i = 0; i < index; i++) {
        current = current.next;
      }
    }

    return current;
  }

  set(index, val) {
    let foundNode = this.get(index);

    if (foundNode) {
      foundNode.val = val;
      return true;
    } else {
      return false;
    }
  }

  insert(index, val) {
    if (index > this.length || index < 0) return false;

    if (index === 0) return this.unshift(val);
    if (index === this.length) return this.push(val);

    let newNode = new Node(val);

    let nodeAfter = this.get(index);
    let beforeNode = this.get(index - 1);

    nodeAfter.prev = newNode;
    newNode.next = nodeAfter;

    beforeNode.next = newNode;
    newNode.prev = beforeNode;

    this.length++;
    return true;
  }

  remove(index) {
    if (index >= this.length || index < 0) return false;

    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let foundNode = this.get(index);

    let beforeNode = foundNode.prev;
    let afterNode = foundNode.next;

    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;

    foundNode.prev = null;
    foundNode.next = null;

    this.length--;
    return foundNode;

  }

}

let start = new Node('start');
let end = new Node('end');

start.next = end;
end.prev = start;

let list = new DoublyLinkedList();
list.push(0);
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);

list.set(4, 44);

console.log(list.get(3));

list.insert(3, 'test');

console.log(list.remove(3));

console.log(list.get(3));

