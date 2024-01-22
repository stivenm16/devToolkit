import { Layout } from '@/app/components'
import { CardDocs } from '../components/games'

const Guides = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-8 text-center text-white font-2xl mt-5">
        Games documentation
      </h1>

      <div className="flex flex-col md:flex-row justify-center items-center md:mt-10 md:w-2/3 mx-5 md:mx-auto p-2 ">
        <CardDocs
          path="/guides/sudoku"
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
          path="/guides/mineSweeper"
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
    </Layout>
  )
}

export default Guides
