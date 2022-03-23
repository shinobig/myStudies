class PriorityQueue{
  constructor() {
    this.values = [];
  }

  enqueue(val, priority){
    this.values.push({val, priority})
    this.sort()
  }

  dequeue(){
    return this.values.shift()
  }

  sort(){
    this.values.sort((a,b) => a.priority - b.priority)
  }

}


class WeightedGraph {
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

  addEdge(vertex1, vertex2, weight) {
    if (vertex1 === vertex2) return undefined;
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) return undefined;

    this.adjacencyList[vertex1].push({node: vertex2, weight});
    this.adjacencyList[vertex2].push({node: vertex1, weight});

    return this.adjacencyList;

  }

}


const graph = new WeightedGraph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');


graph.addEdge('A', "B", 4);
graph.addEdge('A', "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);


// graph.addEdge("C", "E");
// graph.addEdge("D", "E");
// graph.addEdge("D", "F");
// graph.addEdge("E", "F");
