class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {

  constructor(val) {
    this.values = [];
    if (val) {
      this.values.push(val);
    }
  }

  getParentIndex(valIndex) {
    return Math.floor((valIndex - 1) / 2);

  }

  enqueue(val, priority) {

    const newNode = new Node(val, priority);


    if (typeof val !== 'number') return null;

    this.values.push(newNode);

    if (this.values.length === 1) {
      return this.values;
    }

    let valIndex = this.values.length - 1;
    let parentIndex = this.getParentIndex(valIndex);

    while (this.values[valIndex].priority > this.values[parentIndex].priority) {
      let temp = this.values[parentIndex];
      this.values[parentIndex] = val;
      this.values[valIndex] = temp;

      valIndex = parentIndex;
      parentIndex = this.getParentIndex(valIndex);

    }

    return this.values;
  }

  dequeue() {

    let max = this.values[0];
    let lastValue = this.values.pop();

    if (this.values.length > 0) {
      this.values[0] = lastValue;

      // sink down
      this.sinkDown();
    }

    return max;
  }

  sinkDown() {

    let index = 0;
    const length = this.values.length;
    const element = this.values[0];

    while (true) {

      let leftIndex = (index * 2) + 1;
      let rightIndex = (index * 2) + 2;
      let swap = null;

      let leftChild, rightChild;

      if (rightIndex < length) {
        leftChild.priority = this.values[leftIndex].priority;
        if (leftChild > element) {
          swap = leftIndex;
        }
      }


      if (leftIndex < length) {
        rightChild.priority = this.values[rightIndex.priority];

        if (
          (swap === null && rightChild > element) ||
          (rightChild.priority > element.priority && rightChild.priority > leftChild.priority)
        ) {
          swap = rightIndex;
        }

      }

      if (swap === null) break;

      this.values[index] = this.values[swap];
      this.values[swap] = element;
      index = swap;


    }


  }

}

let heap = new PriorityQueue(20);

// heap.insert(5);
// heap.insert(10);
// heap.insert(15);
// heap.insert(8);
// heap.insert(5);
// heap.insert(30);
// heap.insert(3);
// heap.insert(40);
//
