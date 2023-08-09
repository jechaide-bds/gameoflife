import { ControlPanel, GridFunction } from "../atoms/ControlPanel";
import { Grid } from "../atoms/Grid";
import { GameContainer } from "../containers/GameContainer";

interface GridTemplateProps {
    setRunning: (running: boolean) => void
    running: boolean
    generateEmptyGrid: GridFunction
    randomTiles: GridFunction
    setGrid: (value: React.SetStateAction<number[][]>) => void
    grid: number[][],
}

const GridTemplate = ({ 
    grid, 
    setRunning, 
    running, 
    generateEmptyGrid, 
    randomTiles, 
    setGrid
    }: GridTemplateProps) => {
    
    return (
        <GameContainer>
          <Grid grid={grid} />
          <ControlPanel 
            setRunning={setRunning} 
            running={running}
            generateEmptyGrid={generateEmptyGrid}
            randomTiles={randomTiles}
            setGrid={setGrid}
            />
        </GameContainer>
      );
}

export { GridTemplate }