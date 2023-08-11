/* eslint-disable testing-library/prefer-screen-queries */
import { render } from '@testing-library/react';
import { Grid } from '../../components/atoms/Grid';
import { mockGridData } from '../mock/grid';

jest.mock('../../hook/useInterval', () => (fn: () => void, delay: number) => fn());

describe('Grid', () => {

  it('renders the grid cells', () => {

    const { getAllByTestId } = render(<Grid grid={mockGridData} />);
    const childrenCells = getAllByTestId("cell-item")

    expect(childrenCells).toBeDefined();
  });

  it('renders the properly amount of grid cells', () => {

    const { getAllByTestId } = render(<Grid grid={mockGridData} />);
    const childrenCells = getAllByTestId("cell-item")
    const mockCellsCount = mockGridData.reduce((total, order) => total + order.length, 0);

    expect(childrenCells.length).toStrictEqual(mockCellsCount);
  });
});
