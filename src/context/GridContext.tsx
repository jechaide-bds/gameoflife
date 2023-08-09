import { createContext } from 'react';

export interface GridContextProps {
  grid: any[];
  running: boolean;
  startSimulation: () => void;
  stopSimulation: () => void;
  clearBoard: () => void;
  generateRandom: () => void;
}

export const GridContext = createContext<GridContextProps | undefined>(undefined);


