export {};

const graph: Record<string, Array<string>> = {
  a: ["c", "b"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

const bfs = (graph, start) => {
  const queue = [start];
  while (queue.length > 0) {
    const current = queue.shift();
    for (const neighbor of graph[current]) {
      queue.push(neighbor);
    }
    console.log(current);
  }
};

bfs(graph, "a");
