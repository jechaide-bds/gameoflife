import React, { useCallback, useRef, useState } from 'react';
import useInterval from '../hook/useInterval';
import { DEFAULT_ROWS, DEFAULT_COLUMNS, POSITIONS } from '../utils/constants';
import { randomTiles, createGridDeepCopy, generateEmptyGrid } from '../utils/helpers';
import { GridTemplate } from '../components/templates/GridTemplate';
import { Description } from '../components/atoms/Description';

const GridPage = () => {
  const [running, setRunning] = useState(false);
  const runningRef = useRef(running);
  runningRef.current = running;

  const [grid, setGrid] = useState(()=> {
    return randomTiles()
  });

  const runSimulation = useCallback((grid: any) => {
    if (!runningRef.current) {
      return;
    }

    const gridCopy = createGridDeepCopy(grid);

    for (let i = 0; i < DEFAULT_ROWS; i++) {
      for (let j = 0; j < DEFAULT_COLUMNS; j++) {
        let neighbors = 0;

        POSITIONS.forEach(([x, y]) => {
          const nextX = i + x;
          const nextY = j + y;

          if (nextX >= 0 && 
            nextX < DEFAULT_ROWS && 
            nextY >= 0 && 
            nextY < DEFAULT_COLUMNS) {
            neighbors += grid[nextX][nextY];
          }
        });

        if (neighbors < 2 || neighbors > 3) {
          gridCopy[i][j] = 0;
        } else if (grid[i][j] === 0 && neighbors === 3) {
          gridCopy[i][j] = 1;
        }
      }
    }

    setGrid(gridCopy);
  }, []);

  
  useInterval(() => {
    runSimulation(grid);
  }, 150);
  
  return (<>
            <Description />
            <GridTemplate 
                grid={grid}
                setRunning={setRunning} 
                running={running}
                generateEmptyGrid={generateEmptyGrid} 
                randomTiles={randomTiles} 
                setGrid={setGrid}
            />
          </>
  );
}

export default GridPage;
