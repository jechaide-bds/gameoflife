
export const POSITIONS = [
    [0, 1],
    [0, -1],
    [1, -1],
    [-1, 1],
    [1, 1],
    [-1, -1],
    [1, 0],
    [-1, 0],
  ];

export const DEFAULT_ROWS = 25

export const DEFAULT_COLUMNS = 35

export enum Color {
  BORDER = '1px solid #595959',
  LIVING_CELL = '#9fd3c7',
  DEAD_CELL = '#e3e3e3',
  SURVIVING_CELL = '#f95959'
}

export enum CellState {
  DEAD = 0,
  SURVIVED = 1,
  ALIVE = 2
}