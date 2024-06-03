const area = [
  ["W", "L", "W", "W", "L", "W"],
  ["L", "L", "W", "W", "L", "W"],
  ["W", "L", "W", "W", "W", "W"],
  ["W", "W", "W", "L", "L", "W"],
  ["W", "L", "W", "L", "L", "W"],
  ["W", "W", "W", "W", "W", "W"],
];

const countIslands = (area) => {
  const visited: Set<[string, string]> = new Set();
  let numberOfIslands = 0;
  for (let row = 0; row < area.length; row++) {
    for (let col = 0; col < area[0].length; col++) {
      if (area[row][col] === "L") {
        if (exploreIsland(area, row, col, visited)) numberOfIslands++;
      }
    }
  }
  return numberOfIslands;
};

const exploreIsland = (area, row, col, visited) => {
  const rowInbounds = 0 <= row && row < area.length;
  const colInbounds = 0 <= col && col < area[0].length;
  if (!rowInbounds || !colInbounds) return false;
  if (area[row][col] === "W") return false;
  if (visited.has(`${row}-${col}`)) return false;
  visited.add(`${row}-${col}`);
  const neighbors = [
    [row - 1, col],
    [row, col - 1],
    [row + 1, col],
    [row, col + 1],
  ];
  for (let neighbor of neighbors) {
    exploreIsland(area, neighbor[0], neighbor[1], visited);
  }
  return true;
};

console.log(countIslands(area));
