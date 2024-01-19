'use client'
import { Layout } from '../../components'
import CodeEditor from '../../components/CodeEditor/CodeEditor'

const page = () => {
  return (
    <Layout>
      <CodeEditor
        code=" <button
      className={`text-sm font-bold text-white flex items-center bg-indigo-600 hover:bg-indigo-700  py-2 px-4 rounded transition duration-300 ease-in-out`}
    >
      Press me
    </button>"
      />
    </Layout>
  )
}

export default page
