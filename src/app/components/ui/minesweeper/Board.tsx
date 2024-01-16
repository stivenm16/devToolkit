'use client'
import { Events, State } from '@/app/logic/minesweeper'
import { CSSProperties, useEffect } from 'react'
import CellComponent from './Cell'

export default function Board() {
  const { face, score, grid, mines } = State.useGlobalState()

  useEffect(() => {
    const preventMenu = (e: any) => e.preventDefault()
    window.addEventListener('contextmenu', preventMenu)
    return () => window.removeEventListener('contextmenu', preventMenu)
  }, [])

  return (
    <div onMouseUp={() => Events.onMouseUp()} className="">
      <section className="game-board shadow-2xl justify-center  mx-auto rounded-xl bg-indigo-700 px-4 flex flex-col w-fit items-center">
        <div className="controller">
          <div className="mines-counter">{mines}</div>
          <div
            onClick={() => Events.onFaceClick(face)}
            className={`status-button status-button--${face}-game`}
          ></div>
          <div className="score">{score}</div>
        </div>
        <div
          className="grid"
          style={{ '--grid-cells-side': grid.length } as CSSProperties}
        >
          {grid.length &&
            grid.flatMap((row, i) =>
              row.map((cell, j) => (
                <CellComponent
                  key={`cell-${[i]}-${j}`}
                  cell={cell}
                  position={[i, j]}
                />
              )),
            )}
        </div>
      </section>
    </div>
  )
}
