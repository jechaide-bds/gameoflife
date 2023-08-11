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
        <GameContainer data-testid="game-container">
          <Grid grid={grid} data-testid="template-grid" />
          <ControlPanel 
            data-testid="control-panel"
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