// import extractFunctionsFromFile from '../utils/readFiles'

// export async function getServerSideProps() {
//   const data = await Promise.all([
//     extractFunctionsFromFile('src/app/logic/sudoku/toValidateBoard.ts'),
//     extractFunctionsFromFile('src/app/logic/sudoku/sudokuSolver.ts'),
//     extractFunctionsFromFile('src/app/logic/sudoku/generateBoard.ts'),
//   ])

//   // Pass data to the component props
//   return {
//     data,
//   }
// }

// export default getServerSideProps

export const readFileT = async (filePath: string) => {
  try {
    const response = await fetch('/api/readfile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(filePath),
    })

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }
    const data = await response.json()

    return data
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}
