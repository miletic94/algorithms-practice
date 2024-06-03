export {};

const edges = [
  ["w", "x"],
  ["x", "y"],
  ["z", "y"],
  ["z", "v"],
  ["w", "v"],
];

const shortestPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges);

  const queue = [[nodeA, 0]];
  const visited = new Set([nodeA]);

  while (queue.length > 0) {
    const [node, distance] = queue.shift();
    if (node === nodeB) return distance;
    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push([neighbor, distance + 1]);
      }
    }
  }
};

const buildGraph = (edges) => {
  const graph = {};
  for (const edge of edges) {
    const [a, b] = edge;
    if (!graph[a]) graph[a] = [];
    if (!graph[b]) graph[b] = [];

    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
};

console.log(shortestPath(edges, "w", "z"));
