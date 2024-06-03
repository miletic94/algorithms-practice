export {};

const graph: Record<string, Array<string>> = {
  a: ["c", "b"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

function dfsIterative(graph: Record<string, Array<string>>, source: string) {
  const stack = [source];

  while (stack.length > 0) {
    const current = stack.pop();
    console.log(current);

    for (const node of graph[current]) {
      stack.push(node);
    }
  }
}

dfsIterative(graph, "a");
