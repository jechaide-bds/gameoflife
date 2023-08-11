/* eslint-disable testing-library/prefer-screen-queries */
import { render } from "@testing-library/react";
import { GridFunction } from "../../components/atoms/ControlPanel";
import { GridTemplate } from "../../components/templates/GridTemplate";

describe('ControPanel', () => {
    const mockSetRunning = jest.fn();
    const mockGenerateEmptyGrid = jest.fn();
    const mockRandomTiles = jest.fn();
    const mockSetGrid = jest.fn();
  
    const defaultProps = {
      grid: [[0]],
      setRunning: mockSetRunning,
      running: false,
      generateEmptyGrid: mockGenerateEmptyGrid as GridFunction,
      randomTiles: mockRandomTiles as GridFunction,
      setGrid: mockSetGrid,
    };
  
    it('renders the Grid and ControlPanel components', () => {
      const { getByTestId } = render(<GridTemplate {...defaultProps} />);
      /*const controlPanel = getByTestId('control-panel')
      const templateGrid = getByTestId('template-grid')

      expect(controlPanel).toBeDefined();
      expect(templateGrid).toBeDefined();*/
    });
  });