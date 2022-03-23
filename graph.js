class Graph {

  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {

    if (!vertex) return undefined;

    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }

    return this.adjacencyList[vertex];

  }

  addEdge(vertex1, vertex2) {
    if (vertex1 === vertex2) return undefined;
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) return undefined;

    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);

    return this.adjacencyList;

  }

  removeEdge(vertex1, vertex2) {
    if (vertex1 === vertex2) return undefined;
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) return undefined;

    let v1Index = this.adjacencyList[vertex1].indexOf(vertex2);
    let v2Index = this.adjacencyList[vertex2].indexOf(vertex1);

    this.adjacencyList[vertex1].splice(v1Index, 1);
    this.adjacencyList[vertex2].splice(v2Index, 1);

    return this.adjacencyList;

  }

  removeVertex(vertex) {
    if (!this.adjacencyList[vertex] || !vertex) return undefined;

    delete this.adjacencyList[vertex];

    Object.keys(this.adjacencyList).forEach(keyVertex => {
      this.adjacencyList[keyVertex] = this.adjacencyList[keyVertex].filter(ver => ver !== vertex);
    });

    return this.adjacencyList;
  }

  DFSRecursive(start) {

    if (!start) return undefined;
    let visited = {};
    let result = [];

    const dfs = (innerVertex) => {
      if (!innerVertex) return;

      visited[innerVertex] = true;
      result.push(innerVertex);

      this.adjacencyList[innerVertex].forEach(v => {
        if (!visited[v]) {
          dfs(v);
        }
      });
    };

    dfs(start);

    return result;
  }

  DFSIterative(start) {
    if (!start) return undefined;

    let stack = [];
    let result = [];
    let visited = {};

    stack.push(start);

    while (stack.length > 0) {
      let current = stack.pop();

      if (!visited[current]) {
        visited[current] = true;
        result.push(current);

        stack = stack.concat(this.adjacencyList[current]);


      }

    }

    return result;

  }

  breadthFirst(start) {

    let queue = [];
    let result = [];
    let visited = {}

    queue.push(start);

    while (queue.length > 0) {
      let current = queue.shift();

      if (!visited[current]) {
        visited[current] = true;
        result.push(current);

        queue = queue.concat(this.adjacencyList[current]);


      }

    }

    return result;

  }

}

const graph = new Graph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', "B");
graph.addEdge('A', "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");

// console.log(graph.removeEdge("Tokyo", 'Dallas'));

// console.log(graph.DFSRecursive('A'));
// console.log(graph.DFSIterative('A'));
console.log(graph.breadthFirst('A'));
