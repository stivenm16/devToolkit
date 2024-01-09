import Layout from './components/Layout'
import Board from './components/ui/sudoku/Board'

export default function Home() {
  return (
    <Layout>
      {/* Your home page content goes here */}
      <h2 className="text-3xl font-bold my-4">Placeholder</h2>
      <div className="flex justify-center">
        <Board />
      </div>
    </Layout>
  )
}
