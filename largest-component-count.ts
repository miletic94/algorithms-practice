export {};

const graph = {
  0: [8, 1, 5],
  1: [0],
  5: [0, 8],
  8: [0, 5],
  2: [3, 4],
  3: [2, 4],
  4: [3, 2],
};

// const connectedComponentsCount = (graph) => {
//   let largest = 0;
//   const visited = new Set();
//   const currentCount = 0;
//   for (const node in graph) {
//     const count = explore(graph, node, visited, currentCount);
//     if (count > largest) largest = count;
//   }
//   console.log(largest);
// };

// const explore = (graph, node, visited, count) => {
//   if (visited.has(String(node))) return;
//   visited.add(String(node));
//   count += 1;
//   for (const neighbor of graph[node]) {
//     explore(graph, neighbor, visited, count);
//     count += 1;
//   }
//   return count;
// };

// connectedComponentsCount(graph);

const connectedComponentsCount = (graph) => {
  let largest = 0;
  const visited = new Set();
  for (const node in graph) {
    const count = explore(graph, node, visited);
    if (count > largest) largest = count;
  }
  console.log(largest);
};

const explore = (graph, node, visited) => {
  if (visited.has(String(node))) return 0;
  visited.add(String(node));

  let size = 1;
  for (const neighbor of graph[node]) {
    size += explore(graph, neighbor, visited);
  }
  return size;
};

connectedComponentsCount(graph);
