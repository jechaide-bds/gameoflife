/* eslint-disable testing-library/prefer-screen-queries */
import { render } from "@testing-library/react";
import { Cell } from "../../components/atoms/Cell";
import { mockGridData } from "../mock/grid";

describe('Cell', () => {
    it('renders the grid container correctly', () => {
        const mock = {
            column: 1,
            row: 1
        }
        const { getAllByTestId } = render(
        <Cell 
            grid={mockGridData} 
            column={mock.column} 
            row={mock.row} 
        />
        );
        const cellItem = getAllByTestId("cell-item")

        expect(cellItem).toBeDefined();
    });
  });