
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class PainLinkedList{
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val) {
    let newNode = new Node(val);
    if (this.head) {
      this.tail.next = newNode;
      this.tail = newNode;

    } else {
      this.head = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

}

const painList = new PainLinkedList()

painList.push('Patience')
painList.push('Perseverance')
painList.push('Love')
painList.push('Family')
painList.push('Happiness')
painList.push('Strength')
painList.push('Pain')
painList.push('Boredom')

function displayReality(){
  let current = painList.head;

  while(current.val !== 'Pain'){
    current = current.next
  }

  return `${current.val} is unavoidable, and you will never be satisfied.`
}

console.log(displayReality())
