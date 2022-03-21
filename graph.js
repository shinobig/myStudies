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
}

const graph = new Graph();

graph.addVertex('Tokyo');
graph.addVertex('Dallas');
graph.addVertex('Aspen');

graph.addEdge('Tokyo', "Dallas");
graph.addEdge('Dallas', "Aspen");
graph.addEdge("Aspen", "Aspen");
graph.addEdge("Tacos", "Aspen");

// console.log(graph.removeEdge("Tokyo", 'Dallas'));

console.log(graph.removeVertex("Tokyo"));
