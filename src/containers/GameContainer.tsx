import { DEFAULT_COLUMNS } from '../utils/constants';

interface GameContainerProps {
    children: any
}

const GameContainer = ({children}: GameContainerProps) => {
  
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${DEFAULT_COLUMNS}, 20px)`,
        width: "80vw",
        height: "80vh",
        margin: "0 auto",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
        {children}
    </div>
  );
}

export { GameContainer };
