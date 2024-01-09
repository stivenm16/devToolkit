import Layout from './components/Layout'
import Timer from './components/ui/Timer'
import { Board } from './components/ui/sudoku'

export default function Home() {
  return (
    <Layout>
      {/* Your home page content goes here */}
      {/* <h2 className="text-3xl font-bold my-4">Placeholder</h2> */}
      <Timer />
      <div className="flex justify-center">
        <Board />
      </div>
    </Layout>
  )
}
