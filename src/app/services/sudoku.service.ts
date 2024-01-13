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
