import extractFunctionsFromFile from '../utils/readFiles'

export async function getServerSideProps() {
  const data = await Promise.all([
    extractFunctionsFromFile('src/app/logic/sudoku/toValidateBoard.ts'),
    extractFunctionsFromFile('src/app/logic/sudoku/sudokuSolver.ts'),
    extractFunctionsFromFile('src/app/logic/sudoku/generateBoard.ts'),
  ])

  // Pass data to the component props
  return {
    data,
  }
}

export default getServerSideProps
