'use client'
import Layout from '@/app/components/Layout'
import { Options, Timer } from '@/app/components/ui'
import { Difficulty } from '@/app/components/ui/Options'

import { Board } from '@/app/components/ui/sudoku'

export default function SudokuPage() {
  const onDifficultyChange = (difficulty: Difficulty) => {
    console.log(difficulty)
  }
  return (
    <Layout>
      {/* Your home page content goes here */}
      {/* <h2 className="text-3xl font-bold my-4">Placeholder</h2> */}
      <Timer />
      <div className="flex justify-center">
        <Board />
        <Options />
      </div>
    </Layout>
  )
}
