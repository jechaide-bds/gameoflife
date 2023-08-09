import { DEFAULT_COLUMNS, DEFAULT_ROWS } from "../utils/constants";

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