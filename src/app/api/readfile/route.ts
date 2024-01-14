import { NextRequest, NextResponse } from 'next/server'

import findFunctionEndIndex from '@/app/utils/readFile'
import fs from 'fs/promises'
import path from 'path'

const readF = async (filePath: string): Promise<string[]> => {
  const dir = path.resolve('./', filePath)
  const file = await fs.readFile(dir)
  const fileContent = file.toString('utf-8')

  const functionDeclarations =
    fileContent.match(
      /(?:function|const|let|var)\s+([a-zA-Z_]\w*)\s*\(|\b([a-zA-Z_]\w*)\s*=\s*\(/g,
    ) || []

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

  return functionCodes
}
export async function POST(
  request: NextRequest,
): Promise<NextResponse<string[][]>> {
  try {
    const requestBody = await request.json()

    if (requestBody) {
      const functionsCode = await Promise.all([
        readF('src/app/logic/sudoku/toValidateBoard.ts'),
        readF('src/app/logic/sudoku/sudokuSolver.ts'),
        readF('src/app/logic/sudoku/generateBoard.ts'),
      ])
      return NextResponse.json(functionsCode)
    } else {
      const functionsCode = await Promise.all([
        readF('src/app/logic/sudoku/toValidateBoard.ts'),
        readF('src/app/logic/sudoku/sudokuSolver.ts'),
        readF('src/app/logic/sudoku/generateBoard.ts'),
      ])
      return NextResponse.json([
        ...functionsCode,
        ['hubo un error cargando requestbody'],
      ])
    }
  } catch (error: any) {
    console.error('Error reading file:', error.message)
    return NextResponse.json(error)
  }
}
