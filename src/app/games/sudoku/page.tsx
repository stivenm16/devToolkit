'use client'
import Layout from '@/app/components/Layout'
import { Options, Timer } from '@/app/games/components'

import { Board } from '@/app/games/sudoku/components'

import { useState } from 'react'
import { Difficulty } from '../types'

export default function SudokuPage() {
  const [isRunning, setIsRunning] = useState(false)
  const [difficulty, setDifficulty] = useState<Difficulty>('easy')

  const onDifficultyChange = (difficulty: Difficulty) => {
    setDifficulty(difficulty)
  }
  return (
    <Layout>
      <div className="waves leading-0 absolute bottom-0 left-0 w-full overflow-hidden hidden md:inline">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block h-[323px]"
        >
          <path
            d="M741,116.23C291,117.43,0,27.57,0,6V120H1200V6C1200,27.93,1186.4,119.83,741,116.23Z"
            className="shape-fill fill-[#3600b247]"
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
