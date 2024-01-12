'use client'
import Layout from '@/app/components/Layout'
import { Options, Timer } from '@/app/components/ui'
import { Difficulty } from '@/app/components/ui/Options'

import { Board } from '@/app/components/ui/sudoku'
import { useState } from 'react'

export default function SudokuPage() {
  const [isRunning, setIsRunning] = useState(false)
  const [difficulty, setDifficulty] = useState<Difficulty>('easy')

  const onDifficultyChange = (difficulty: Difficulty) => {
    setDifficulty(difficulty)
  }
  return (
    <Layout>
      <Timer isRunning={isRunning} setIsRunning={setIsRunning} />
      <div className="flex justify-center">
        <Board difficulty={difficulty} />
        <Options onChange={onDifficultyChange} />
      </div>
    </Layout>
  )
}
