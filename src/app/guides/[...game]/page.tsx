'use client'
import { CodeSnippet, Layout } from '@/app/components'

import { getCodeSnippets } from '@/app/services/sudoku.service'

import { useEffect, useState } from 'react'

const Explanation = () => {
  return (
    <div className=" flex justify-center flex-col m-8">
      <h2 className="text-xl font-bold mb-2">Introduction</h2>
      <p className="mb-4">
        This documentation provides an overview of how the Sudoku game is
        implemented in this application.
      </p>

      <h2 className="text-xl font-bold mb-2">Rules</h2>
      <p className="mb-4">
        The Sudoku game follows the classic rules where each row, column, and
        3x3 subgrid must contain all the numbers from 1 to 9 without repetition.
      </p>
      <h2 className="text-xl font-bold mb-2">Rules</h2>
      <p className="mb-4">
        The Sudoku game follows the classic rules where each row, column, and
        3x3 subgrid must contain all the numbers from 1 to 9 without repetition.
      </p>
    </div>
  )
}

const Guides = ({ params }: { params: { game: string } }) => {
  const [data, setData] = useState<any[][]>([[]])

  const getData = async () => {
    const data = await getCodeSnippets()
    setData(data)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-8 text-center text-indigo-900 font-2xl mt-5">
        {params.game[0].charAt(0).toUpperCase() + params.game[0].slice(1)} Game
        Documentation
      </h1>

      <div className="mx-6 ">
        {data &&
          data.map((item: any, indexRow: number) => {
            return item.map((item: any, indexCol: number) => {
              return (
                <div key={indexCol}>
                  <CodeSnippet codeSnippet={item}>
                    <Explanation />
                  </CodeSnippet>
                </div>
              )
            })
          })}
      </div>
    </Layout>
  )
}

export default Guides
