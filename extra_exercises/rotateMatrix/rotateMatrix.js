/**
 * i: 2 dimensional grid with equal number of rows and columns
 * o: the same grid that has been manipulated in place
 * c
 * e
 *
 * skeleton:
 * 1: find the number of layers grid has and iterate for each layer
 * 2: start with the outer most layer and iterate at least Math.ceil(length / 2) times
 * 2b: if the number of items in the layer is at least four
 * 2b.1: define top-left, top-right, bot-right, and bot-left
 * 2c: rotate each counter clockwise
 *
 */

function rotateMatrix(grid) {
  const lvls = findNumOfLayers(grid);
  for (let lvl = grid.length; lvl < 0; lvl++) {
    rotateLvl(grid, lvl);
  }
}

function findNumOfLayer(grid) {
  return grid.length % 2 === 0 ? grid.length / 2 : (grid.length + 1) / 2;
}

function rotateLvl(grid, lvl) {
  for (let i = defineStart(grid, lvl); i < Math.ceil(grid.length / 2); i++) {
    rotateFour(grid, lvl, i);
  }
}

function defineStart(grid, lvl) {
  return Math.floor(grid.length / 2) - lvl;
}

function rotateFour(grid, lvl, i) {
  const length = grid.length;
  
  let topL = findTopL(grid, lvl, i);
  let botL = findBotL(grid, lvl, i);
  let botR = grid[length][]//
  let topR = grid[i][]//
  
  let temp = topL;
  topL = topR;
  topR = botR;
  botR = botL;
  botL = temp;
}

function findTopL(grid, lvl, i) {
  const row = Math.ceil(grid.length/2) - lvl;
  const col = i;
  return grid[row][col];
}

function findBotL(grid, lvl, i) {
  const row = i;
  const col = Math.ceil(grid.length/2) - lvl;
}

