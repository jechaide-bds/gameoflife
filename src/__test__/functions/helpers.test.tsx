
import { CellState, Color } from '../../utils/constants';
import { 
    generateEmptyGrid, 
    randomTiles, 
    createGridDeepCopy,
    setColorByState, 
} from '../../utils/helpers'
import { mockEmptyGrid, mockGridData } from '../mock/grid';

describe('Helpers', () => {
    it('generateEmptyGrid generates all zero array items of grid', () => {
        const emptyGrid = generateEmptyGrid()

        expect(emptyGrid).toStrictEqual(mockEmptyGrid)
    });

    it('randomTiles generate the amount of items', () => {
        const tiles = randomTiles()
        expect(tiles.length).toEqual(mockEmptyGrid.length)
        expect(tiles.length).toEqual(mockGridData.length)
        expect(tiles.length).toEqual(mockGridData.length)
    });

    it('createGridDeepCopy', () => {
        const deepCopy = createGridDeepCopy(mockGridData)
        expect(deepCopy).toMatchObject(mockGridData)
    });

    it.each([
        [CellState.ALIVE, Color.LIVING_CELL],
        [CellState.SURVIVED, Color.SURVIVING_CELL],
        [CellState.DEAD, Color.DEAD_CELL],
      ])(
        'setColorByState should return correct color for cell states',
        (cellState, expectedColor) => {
          const color = setColorByState(cellState);
          expect(color).toBe(expectedColor);
        }
      );

    it('should return undefined for unknown cell state', () => {
        const unknownCellState = 'UNKNOWN_STATE';
        const color = setColorByState(unknownCellState as unknown as CellState);
        expect(color).toBeUndefined();
    });    
  });


  