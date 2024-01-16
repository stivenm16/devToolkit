import Link from 'next/link'
import { ButtonT, Layout } from '../components'

function GamesPage() {
  return (
    <Layout>
      <div className="flex flex-col md:flex-row justify-center items-center md:mt-10 md:w-2/3 mx-5 md:mx-auto p-2 ">
        <div className="md:mx-10 animate-fade-in-cards my-10 h-2/3 md:h-[32rem] flex flex-col py-5 px-10 bg-indigo-800 shadow-3xl rounded-lg text-white w-full items-center">
          <Link className="my-5" href={'/games/sudoku'}>
            <ButtonT label="Try this sudoku!" />
          </Link>

          <p>
            Unlock the secrets behind Sudoku, the quintessential challenge for
            developers seeking to refine their algorithmic prowess. Immerse
            yourself in the world of backtracking, constraint satisfaction
            problems, and efficient data structures as you unravel the mysteries
            of this number puzzle. Our Sudoku implementation goes beyond the
            grid, delving into the code structure and optimization techniques
            that make solving these puzzles a computational delight. Eager to
            enhance your programming skills? Explore our comprehensive coding
            guide and dissect the Sudoku code to elevate your understanding of
            this captivating numerical enigma.
          </p>
        </div>

        <div className="mx-2 animate-fade-in-cards h-2/3 my-10 md:h-[32rem] flex flex-col py-5 px-10 bg-indigo-800 shadow-3xl rounded-lg text-white  w-full items-center">
          <Link className="my-5" href={'/games/minesweeper'}>
            <ButtonT label="Try this minesweeper!" />
          </Link>

          <p>
            Dive into the world of Minesweeper, a coding playground where logic
            meets algorithms. Explore the intricacies of designing an efficient
            minefield solver, master the art of recursive algorithms, and
            fine-tune your programming skills. Our Minesweeper implementation
            goes beyond the surface, offering insights into the design choices
            that make this classic game tick. Ready to dig deeper? Check out our
            coding guide to unravel the source code, understand the nuances, and
            level up your programming expertise in the realm of Minesweeper.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default GamesPage
