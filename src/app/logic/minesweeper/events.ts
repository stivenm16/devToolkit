'use client'
import {
  boards,
  bombsVerify,
  mines,
  reveal,
  score,
  win,
} from '@/app/logic/minesweeper'
import { CellEnum, FaceType } from '@/app/types/games/minesweeper'
import { setFace, setGrid, setMines, setScore } from './state'

let boardSize = 5
let minesRate = 0.3
let cellsInBoard = boardSize * boardSize
let minesInGame = Math.round(cellsInBoard * minesRate)
export let gridMines: CellEnum[][] = boards.boardWithMines(
  boardSize,
  minesInGame,
)
let grid = boards.boardWithoutMines(boardSize)

function boardInit(boardSize: number, minesRate: number) {
  cellsInBoard = boardSize * boardSize
  minesInGame = Math.round(cellsInBoard * minesRate)
  grid = boards.boardWithoutMines(boardSize)
  gridMines = boards.boardWithMines(boardSize, minesInGame)
  bombsVerify.numbersUpdated(gridMines)
  setFace('default')
  setScore(0)
  setMines(minesInGame)
  setGrid(grid)
  return [grid, gridMines]
}
boardInit(boardSize, minesRate)

export function onMouseDown() {
  setFace('doubtful')
}

export function onMouseUp() {
  setFace('default')
}

export function onRightClick(position: [number, number]) {
  let tileClicked = grid[position[0]][position[1]]
  if (tileClicked === CellEnum.Hidden) {
    grid[position[0]][position[1]] = CellEnum.Flag
    setMines(mines.flaggedMines(grid, minesInGame))
  } else if (tileClicked === CellEnum.Flag) {
    grid[position[0]][position[1]] = CellEnum.Hidden
    setMines(mines.flaggedMines(grid, minesInGame))
  }
  setGrid(grid)
}

export function onSizeChange(side: number) {
  boardSize = side
  boardInit(side, minesRate)
  console.log(grid)
  setGrid(grid)
}

export function onClick(position: [number, number]) {
  grid[position[0]][position[1]] = gridMines?.[position[0]]?.[position[1]]

  if (gridMines[position[0]][position[1]] === CellEnum.Mine) {
    alert('Perdiste')
    setGrid(gridMines)

    grid[position[0]][position[1]] = CellEnum.ClickedMine
  } else if (gridMines[position[0]][position[1]] === CellEnum.Cero) {
    reveal(gridMines, grid, position[0], position[1])
  }
  win(grid, minesInGame)
  setScore(Math.round(score(grid)))
  setFace('lost')
}

export function onMinesRateChange(percentage: number) {
  minesRate = percentage
  boardInit(boardSize, minesRate)
  setMines(minesInGame)
  console.log(boardSize)
}
export function onFaceClick(prevFace: FaceType) {
  setFace('default')

  boardInit(boardSize, minesRate)
  setMines(minesInGame)
  setScore(0)
}
