'use client'
import Layout from '@/app/components/Layout'
import { Options, Timer } from '@/app/components/ui'

import { Board } from '@/app/components/sudoku'
import { Difficulty } from '@/app/types/global'
import { useState } from 'react'

export default function SudokuPage() {
  const [isRunning, setIsRunning] = useState(false)
  const [difficulty, setDifficulty] = useState<Difficulty>('easy')

  const onDifficultyChange = (difficulty: Difficulty) => {
    setDifficulty(difficulty)
  }
  return (
    <Layout>
      <div className="flex flex-col-reverse md:flex-col pt-2">
        <Timer isRunning={isRunning} setIsRunning={setIsRunning} />
        <div className="flex justify-center flex-col-reverse mx-auto md:flex-row">
          <Board difficulty={difficulty} />
          <Options
            onChange={onDifficultyChange}
            defaultOptions={['easy', 'medium', 'hard']}
            defaultValue={'easy'}
            defaultLabel="Difficulty"
          />
        </div>
      </div>
    </Layout>
  )
}
