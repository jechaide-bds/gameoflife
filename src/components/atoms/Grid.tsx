import { Cell } from "./Cell"

interface GridProps {
    grid: number[][] 
}
const Grid = ({ grid } : GridProps) => {

    return <>
            {grid?.map((rows: number[], i) =>
                rows.map((col, k) => (
                <Cell data-testid="cell-item" key={i+k} grid={grid} column={i} row={k}/>
                ))
            )}
            </>
}

export { Grid }