import { gridMines } from '@/app/logic/minesweeper/events'
import { setFace, setGrid } from '@/app/logic/minesweeper/state'
import { CellEnum } from '@/app/types/games/minesweeper'

/*Esta función se encarga de verificar si el número de celdas ocultas o flagged en el tablero 
era igual al número de minas y devuelve un mensaje de win
*/
export function win(grid: CellEnum[][], minesInGame: number) {
  let hiddenCellsCounter = 0
  for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid.length; y++) {
      if (grid[x][y] === CellEnum.Hidden || grid[x][y] === CellEnum.Flag) {
        hiddenCellsCounter = hiddenCellsCounter + 1
      }
    }
  }
  if (minesInGame === hiddenCellsCounter) {
    setGrid(gridMines)
    setFace('won')
    return alert('Ganaste')
  }
}
