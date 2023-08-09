import { Cell } from "./Cell"

interface GridProps {
    grid: number[][] 
}
const Grid = ({ grid} : GridProps) => {
    return <>
        {grid?.map((rows: any[], i) =>
            rows.map((col, k) => (
            <Cell grid={grid} column={i} row={k}/>
            ))
        )}
      </>
}

export { Grid }