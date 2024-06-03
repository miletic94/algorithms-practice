export {};

const graph = {
  A: [
    { name: "D", distance: 1 },
    { name: "B", distance: 6 },
  ],
  B: [
    { name: "A", distance: 6 },
    { name: "D", distance: 2 },
    { name: "E", distance: 2 },
  ],
  C: [
    { name: "B", distance: 5 },
    { name: "E", distance: 5 },
  ],
  D: [
    { name: "A", distance: 1 },
    { name: "B", distance: 2 },
    { name: "E", distance: 1 },
  ],
  E: [
    { name: "B", distance: 2 },
    { name: "C", distance: 5 },
    { name: "D", distance: 1 },
  ],
};

const shortestPath = (graph, src, dist) => {
  const distancesTable = createDistanceTable(graph, src);
  const visited = new Set();
  const queue = [src];
  while (queue.length > 0) {
    const current = queue.shift();
    if (!visited.has(current)) {
      visited.add(current);
    }
  }
};

const createDistanceTable = (graph, src) => {
  const distancesTable = [];
  for (const node in graph) {
    const nodeInfo = {};
    nodeInfo["node"] = node;
    nodeInfo["previousNode"] = undefined;
    if (src === node) {
      nodeInfo["shortestDistance"] = 0;
    } else {
      nodeInfo["shortestDistance"] = Infinity;
    }
    distancesTable.push(nodeInfo);
  }
  return distancesTable;
};

shortestPath(graph, "A", "C");
