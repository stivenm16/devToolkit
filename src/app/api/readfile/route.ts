import { NextRequest, NextResponse } from 'next/server'

import findFunctionEndIndex from '@/app/utils/readFile'
import fs from 'fs/promises'
import path from 'path'

export async function POST(
  request: NextRequest,
): Promise<NextResponse<string[]> | any> {
  try {
    // const dirRelative = await request.json()
    const dirRelative = 'src/app/logic/sudoku/generateBoard.ts'
    const dir = path.resolve('./', dirRelative)
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

    return NextResponse.json(functionCodes)
  } catch (error: any) {
    console.error('Error reading file:', error.message)
    return NextResponse.json(error)
  }
}
