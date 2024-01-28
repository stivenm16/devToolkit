'use client'
import { Layout } from '@/app/components'
import { Option, Options, Timer } from '@/app/components/games'
import { Board } from '@/app/components/games/minesweeper'
import { Events } from '@/app/logic/minesweeper'
import { useState } from 'react'

const MineSweeperPage = () => {
  const [isRunning, setIsRunning] = useState(false)
  const [difficulty, setDifficulty] = useState<number>(5)

  const onMinesRateChange = (minesRate: number) => {
    Events.onMinesRateChange(minesRate)
  }
  const onDifficultyChange = (difficulty: number) => {
    Events.onSizeChange(difficulty)
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
        <div className="flex justify-center flex-col-reverse mx-auto  md:flex-row ">
          <Board />
          <Options
            onChange={onMinesRateChange}
            defaultOptions={[0.2, 0.5, 0.6]}
            defaultValue={0.2}
            defaultLabel="Mines Rate"
          >
            <label className="font-bold">Board size:</label>
            <Option
              defaultValue={5}
              value={difficulty}
              onChange={onDifficultyChange}
              options={[5, 6, 7]}
            />
          </Options>
        </div>
      </div>
    </Layout>
  )
}

export default MineSweeperPage
