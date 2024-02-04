'use client'
import { Layout } from '@/app/components'
import { Option, Options, Timer } from '@/app/games/components'
import { Board } from '@/app/games/minesweeper/components'
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
