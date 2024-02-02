'use client'
import { Layout } from '@/app/components'
import { CodeSnippet, Explanation } from '@/app/components/ui'
import { Game, getCodeSnippets } from '@/app/services/sudoku.service'
import { useEffect, useState } from 'react'

const Guide = ({ params }: { params: { game: string } }) => {
  const [data, setData] = useState<any[][]>([[]])

  const getData = async () => {
    const data = await getCodeSnippets(params.game[0] as Game)
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
                <div key={indexCol} className="flex my-5">
                  <Explanation />
                  <CodeSnippet codeSnippet={item.code} wCodeSnippet={700} />
                </div>
              )
            })
          })}
      </div>
    </Layout>
  )
}

export default Guide
