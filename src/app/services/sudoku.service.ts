export type Game = 'sudoku' | 'mineSweeper'
export const getCodeSnippets = async (game: Game) => {
  try {
    const response = await fetch(`/api/games/${game}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
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
