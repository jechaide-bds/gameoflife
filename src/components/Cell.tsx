import { Color } from "../utils/constants"

interface CellProps {
    grid: number[][]
    column: number
    row: number
}
const Cell = ({ grid, column, row } : CellProps) => {
    return           <div
    style={{
      width: 20,
      height: 20,
      backgroundColor: grid[column][row] ? Color.LIVING_CELL : undefined,
      border: Color.BORDER,
    }}
  />
}

export { Cell }