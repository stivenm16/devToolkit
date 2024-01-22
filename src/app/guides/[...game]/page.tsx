'use client'
import { Layout } from '@/app/components'
import { CodeSnippet } from '@/app/components/ui'
import { getCodeSnippets } from '@/app/services/sudoku.service'
import { useEffect, useState } from 'react'

const Explanation = () => {
  return (
    <div className=" flex justify-center flex-col m-8">
      <h2 className="text-xl font-extrabold mb-2 text-white">Introduction</h2>
      <p className="mb-4 text-white">
        This documentation provides an overview of how the Sudoku game is
        implemented in this application.
      </p>

      <h2 className="text-xl font-extrabold mb-2  text-white">Rules</h2>
      <p className="mb-4 text-white">
        The Sudoku game follows the classic rules where each row, column, and
        3x3 subgrid must contain all the numbers from 1 to 9 without repetition.
      </p>
      <h2 className="text-xl font-extrabold mb-2 text-white">Rules</h2>
      <p className="mb-4 text-white">
        The Sudoku game follows the classic rules where each row, column, and
        3x3 subgrid must contain all the numbers from 1 to 9 without repetition.
      </p>
    </div>
  )
}
const page = ({ params }: { params: { game: string } }) => {
  const [data, setData] = useState<any[][]>([[]])

  const getData = async () => {
    const data = await getCodeSnippets('sudoku')
    setData(data)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-8 text-center text-white font-2xl mt-5">
        {params.game[0].charAt(0).toUpperCase() + params.game[0].slice(1)} Game
        Documentation
      </h1>
      <div className="mx-6 ">
        {data &&
          data.map((item: any, indexRow: number) => {
            return item.map((item: any, indexCol: number) => {
              return (
                <div key={indexCol}>
                  <CodeSnippet codeSnippet={item.code}>
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

export default page
