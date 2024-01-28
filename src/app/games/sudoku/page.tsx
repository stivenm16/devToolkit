'use client'
import Layout from '@/app/components/Layout'
import { Options, Timer } from '@/app/components/games'

import { Board } from '@/app/components/games/sudoku'
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
      <div className="custom-shape-divider-bottom-1706463249">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M741,116.23C291,117.43,0,27.57,0,6V120H1200V6C1200,27.93,1186.4,119.83,741,116.23Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
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
