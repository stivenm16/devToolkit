// 'use client'

import Link from 'next/link'
import { ButtonT, Layout } from './components'
import extractFunctionsFromFile from './components/utils/readFiles'

export default function Home() {
  extractFunctionsFromFile('src/app/logic/sudoku/sudokuSolver.ts')

  return (
    <Layout>
      <div className="flex justify-center  items-center min-h-96 pt-36 flex-col">
        <div className="text-center animate-fade-in">
          <h1 className="text-6xl font-bold antialised text-sky-950">
            Welcome to playit
          </h1>
          <h4 className="font-semibold px-10 my-6 text-lg text-sky-900 md:px-96">
            Playit is a web app that turns algorithm practice into enjoyable
            games, allowing users to strengthen their programming skills through
            interactive exercises.
          </h4>
        </div>
        <Link href={'/games/sudoku'}>
          <ButtonT label="Playit" />
        </Link>
      </div>
    </Layout>
  )
}
