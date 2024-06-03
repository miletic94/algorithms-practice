export {};

const area = [
  ["W", "L", "W", "W", "L", "W"],
  ["L", "L", "W", "W", "L", "W"],
  ["W", "L", "W", "W", "W", "W"],
  ["W", "W", "W", "L", "L", "W"],
  ["W", "L", "W", "L", "L", "W"],
  ["W", "W", "W", "L", "W", "W"],
];

const minIsland = (area) => {
  let smallestIsland = Infinity;
  let size;
  const visited = new Set();
  for (let row = 0; row < area.length; row++) {
    for (let col = 0; col < area[0].length; col++) {
      size = explore(area, row, col, visited);
      if (size < smallestIsland && size > 0) smallestIsland = size;
    }
  }
  return smallestIsland;
};

const explore = (area, row, col, visited) => {
  const rowInbound = 0 <= row && row < area.length;
  const colInbound = 0 <= col && col < area[0].length;
  if (!rowInbound || !colInbound) return 0;
  if (visited.has(`${row}-${col}`)) return 0;
  if (area[row][col] === "W") return 0;
  visited.add(`${row}-${col}`);
  let size = 1;
  size += explore(area, row + 1, col, visited);
  size += explore(area, row, col + 1, visited);
  size += explore(area, row - 1, col, visited);
  size += explore(area, row, col - 1, visited);
  return size;
};

console.log(minIsland(area));
