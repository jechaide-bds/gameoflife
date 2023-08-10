
export type GridFunction = () => React.SetStateAction<number[][]>

interface ControlPanelProps {
    setRunning: (running: boolean) => void
    running: boolean
    generateEmptyGrid: GridFunction
    randomTiles: GridFunction
    setGrid: (value: React.SetStateAction<number[][]>) => void
}
interface ButtonProps {
  onClick: () => void
  label: string
}

const Button = ({ onClick, label }: ButtonProps) => {
  return (
    <button onClick={onClick}
    style={{
      padding: '1.5em',
      margin: '2px',
      width: '8vw'
    }}>
      {label}
    </button>
  );
};

export default Button;

const ControlPanel = ({
  setRunning,
  running,
  generateEmptyGrid,
  randomTiles,
  setGrid
}: ControlPanelProps) => {
  return (
    <div
      style={{
        display: "flex",
        marginLeft: "20em",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Button
        onClick={() => {
          setRunning(!running);
        }}
        label={running ? "Stop" : "Start"}
      />
      <Button
        onClick={() => {
          setGrid(generateEmptyGrid());
        }}
        label="Clear"
      />
      <Button
        onClick={() => {
          setGrid(randomTiles());
        }}
        label="Random"
      />
    </div>
  );
};

export { ControlPanel };
