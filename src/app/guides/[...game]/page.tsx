'use client'
import { Layout } from '@/app/components'

import { CodeSnippet } from '@/app/components/'
import { Game, getCodeSnippets } from '@/app/services/sudoku.service'
import { useCallback, useEffect, useState } from 'react'
import Explanation from './components/Explanation'

const Guide = ({ params }: { params: { game: string } }) => {
  const [data, setData] = useState<any[][]>([[]])

  const getData = useCallback(async () => {
    const data = await getCodeSnippets(params.game[0] as Game)
    setData(data)
  }, [setData, params.game])

  useEffect(() => {
    getData()
  }, [getData])

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-8 text-center text-white font-2xl mt-5">
        {params.game[0].charAt(0).toUpperCase() + params.game[0].slice(1)} Game
        Documentation
      </h1>
      <div className="mx-6">
        {data &&
          data.map((item: any, indexRow: number) => {
            return item.map((item: any, indexCol: number) => {
              return (
                <div key={indexCol} className="flex my-8">
                  <div className="w-1/2">
                    <Explanation />
                  </div>
                  <div className="w-1/2">
                    <CodeSnippet codeSnippet={item.code} />
                  </div>
                </div>
              )
            })
          })}
      </div>
    </Layout>
  )
}

export default Guide
