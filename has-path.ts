export {};

const graph = {
  f: ["g", "i"],
  g: ["h"],
  h: [],
  i: ["g", "k"],
  j: ["i"],
  k: [],
};

// DEPTH FIRST
// const hasPath = (graph, src, dest, visited = []) => {
//   if (src === dest) {
//     return true;
//   }
//   if (visited.includes(src)) return;
//   for (let neighbor of graph[src]) {
//     if (hasPath(graph, neighbor, dest, visited)) return true;
//   }
//   return false;
// };

// console.log(hasPath(graph, "f", "k"));

// BREADTH FIRST SEARCH
const hasPath = (graph, src, dest) => {
  const queue = [src];
  const visited = [];
  while (queue.length > 0) {
    const current = queue.shift();
    if (current === dest) return true;
    if (visited.includes(current)) continue;
    visited.push(current);
    for (const neighbor of graph[current]) {
      queue.push(neighbor);
    }
  }
  return false;
};

console.log(hasPath(graph, "f", "k"));
