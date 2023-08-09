import { Color } from "../utils/constants"
import { setColorByState } from "../utils/helpers"

interface CellProps {
    grid: number[][]
    column: number
    row: number
}
const Cell = ({ grid, column, row } : CellProps) => {
    return <div
            style={{
              width: 20,
              height: 20,
              backgroundColor: setColorByState(grid[column][row]),
              border: "1px solid #595959",
            }}
          />
}

export { Cell }