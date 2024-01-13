import { readFile } from 'fs/promises'

async function extractFunctionsFromFile(filePath: string): Promise<string[]> {
  try {
    const fileContent = await readFile(filePath, 'utf-8')

    // Extract function declarations using regular expression
    const functionDeclarations =
      fileContent.match(
        /(?:function|const|let|var)\s+([a-zA-Z_]\w*)\s*\(|\b([a-zA-Z_]\w*)\s*=\s*\(/g,
      ) || []

    // Extract and return code for each function
    const functionCodes = functionDeclarations
      .map((declaration) => {
        const match = declaration.match(
          /(?:function|const|let|var)\s+([a-zA-Z_]\w*)\s*\(|\b([a-zA-Z_]\w*)\s*=\s*\(/,
        )
        const functionName = match ? match[1] || match[2] : null
        if (functionName) {
          const startIndex = fileContent.indexOf(declaration)
          const endIndex = findFunctionEndIndex(fileContent, startIndex)
          return fileContent.substring(startIndex, endIndex)
        }
        return ''
      })
      .filter(Boolean)

    // console.log('Extracted functions:', functionCodes)
    return functionCodes
  } catch (error: any) {
    console.error('Error reading file:', error.message)
    return []
  }
}

// Helper function to find the end index of a function in the code
function findFunctionEndIndex(fileContent: string, startIndex: number): number {
  let depth = 0
  let index = startIndex
  while (index < fileContent.length) {
    if (fileContent[index] === '{') {
      depth++
    } else if (fileContent[index] === '}') {
      depth--
      if (depth === 0) {
        return index + 1 // Return the index after the closing brace
      }
    }
    index++
  }
  return index
}

export default extractFunctionsFromFile
