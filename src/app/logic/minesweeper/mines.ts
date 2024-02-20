import { CellEnum } from '@/app/games/types'

function randomNumber(size: number) {
  return Math.floor(Math.random() * size)
}

// Comparador de posiciones
export function positionMatch(a: number[], b: number[]) {
  return a[0] === b[0] && a[1] === b[1]
}

/* Esta función retorna un array con las posiciones de las minas donde internamente verifica 
que no se crucen una encima de otra */

export function getMinePositions(boardSize: number, minesInGame: number) {
  const positions: number[][] = []

  while (positions.length < minesInGame) {
    let position: number[] = [randomNumber(boardSize), randomNumber(boardSize)]

    if (!positions.some(positionMatch.bind(null, position))) {
      positions.push(position)
    }
  }

  return positions
}

/* Esta funcion se encarga de hacer un conteo de las celdas flag para devolver en la 
casilla de "Minas" la cantidad de minas menos las flags
*/
export function flaggedMines(grid: CellEnum[][], minesInGame: number) {
  let flagMine = 0
  for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid.length; y++) {
      if (grid[x][y] === CellEnum.Flag) {
        flagMine = flagMine + 1
      }
    }
  }
  return minesInGame - flagMine
}
