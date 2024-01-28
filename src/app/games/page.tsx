import { Layout } from '../components'
import { CardDocs } from '../components/games'

function GamesPage() {
  return (
    <Layout>
      <h1 className="text-xl font-bold mb-8 text-center text-white font-xl mt-5">
        Games
      </h1>
      <div className="flex flex-col md:flex-row justify-center items-center md:mt-10 md:w-2/3 mx-5 md:mx-auto p-2 ">
        <CardDocs
          path="/games/sudoku"
          text={`Unlock the secrets behind Sudoku, the quintessential challenge for
            developers seeking to refine their algorithmic prowess. Immerse
            yourself in the world of backtracking, constraint satisfaction
            problems, and efficient data structures as you unravel the mysteries
            of this number puzzle. Our Sudoku implementation goes beyond the
            grid, delving into the code structure and optimization techniques
            that make solving these puzzles a computational delight. Eager to
            enhance your programming skills? Explore our comprehensive coding
            guide and dissect the Sudoku code to elevate your understanding of
            this captivating numerical enigma.`}
        />
        <CardDocs
          path="/games/minesweeper"
          text={`Dive into the world of Minesweeper, a coding playground where logic
            meets algorithms. Explore the intricacies of designing an efficient
            minefield solver, master the art of recursive algorithms, and
            fine-tune your programming skills. Our Minesweeper implementation
            goes beyond the surface, offering insights into the design choices
            that make this classic game tick. Ready to dig deeper? Check out our
            coding guide to unravel the source code, understand the nuances, and
            level up your programming expertise in the realm of Minesweeper.`}
        />
      </div>

      <div className="waves hidden md:inline">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </Layout>
  )
}

export default GamesPage
