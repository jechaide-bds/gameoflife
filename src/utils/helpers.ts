import { CellState, Color, DEFAULT_COLUMNS, DEFAULT_ROWS } from "./constants";

export const generateEmptyGrid = (): number[][] => {
  const rows = [];
  for (let i = 0; i < DEFAULT_ROWS; i++) {
    rows.push(Array.from(Array(DEFAULT_COLUMNS), () => 0));
  }

  return rows;
};

export const randomTiles = (): number[][] => {
    const rows = [];
    for (let i = 0; i < DEFAULT_ROWS; i++) {
      rows.push(Array.from(Array(DEFAULT_COLUMNS), () => (Math.random() > 0.7 ? 1 : 0)));
    }
    return rows;
  };

  export const createGridDeepCopy = (grid: any) => { return JSON.parse(JSON.stringify(grid))}

  export const setColorByState = (cellState: CellState): Color => {
    const colorByState = {
      [CellState.ALIVE]: Color.LIVING_CELL,
      [CellState.SURVIVED]: Color.SURVIVING_CELL,
      [CellState.DEAD]: Color.DEAD_CELL,
    }
    
    return colorByState[cellState]
  }
