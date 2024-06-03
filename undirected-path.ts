export {};

const edges = [
  ["i", "j"],
  ["k", "i"],
  ["m", "k"],
  ["k", "l"],
  ["o", "n"],
];

const undirectedPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges);
  return hasPath(graph, nodeA, nodeB, new Set());
};

const hasPath = (graph, src, dest, visited) => {
  if (visited.has(src)) return;
  if (src === dest) return true;

  visited.add(src);

  for (const neighbor of graph[src]) {
    if (hasPath(graph, neighbor, dest, visited) === true) {
      return true;
    }
  }

  return false;
};

const buildGraph = (edges) => {
  const graph = {};

  for (const edge of edges) {
    const [a, b] = edge;
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];

    graph[a].push(b);
    graph[b].push(a);
  }

  return graph;
};

console.log(undirectedPath(edges, "j", "o"));
