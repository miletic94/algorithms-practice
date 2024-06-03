export {};

const graph: Record<string, Array<string>> = {
  a: ["c", "b"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

function dfsRecursive(graph: Record<string, Array<string>>, source: string) {
  console.log(source);
  for (const node of graph[source]) {
    dfsRecursive(graph, node);
  }
}

dfsRecursive(graph, "a");
