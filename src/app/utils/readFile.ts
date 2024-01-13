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
export default findFunctionEndIndex
