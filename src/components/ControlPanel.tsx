
type GridFunction = () => React.SetStateAction<number[][]>
interface ControlPanelProps {
    setRunning: (running: boolean) => void
    running: boolean
    generateEmptyGrid: GridFunction
    randomTiles: GridFunction
    setGrid: (value: React.SetStateAction<number[][]>) => void
}

const ControlPanel = ({ setRunning, running, generateEmptyGrid, randomTiles, setGrid } : ControlPanelProps) => {
    return   <div>
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
}

export { ControlPanel }