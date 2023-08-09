import React, { useCallback, useRef, useState } from 'react';
import './App.css';
import useInterval from './hook/useInterval';
import { DEFAULT_COLUMNS, DEFAULT_ROWS, POSITIONS } from './utils/constants';
import { createGridDeepCopy, generateEmptyGrid, randomTiles } from './utils/helpers';

const App = () => {

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

          if (nextX >= 0 && nextX < DEFAULT_ROWS && nextY >= 0 && nextY < DEFAULT_COLUMNS) {
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
  
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${DEFAULT_COLUMNS}, 20px)`,
        width: "fit-content",
        margin: "0 auto",
      }}
    >
      {grid?.map((rows: any[], i) =>
        rows.map((col, k) => (
          <div
            style={{
              width: 20,
              height: 20,
              backgroundColor: grid[i][k] ? "#F68E5F" : undefined,
              border: "1px solid #595959",
            }}
          />
        ))
      )}
    <button
    onClick={() => {
      setRunning(!running);
    }}
>
  {running ? "Stop" : "Start"}
    </button>
    <button
      onClick={() => {
        setGrid(generateEmptyGrid());
      }}
    >
      Clear board
    </button>
    <button
  onClick={() => {
    setGrid(randomTiles());
  }}
>
  Random
</button>
    </div>
  );
}

export default App;
