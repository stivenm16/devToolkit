'use client'
import ContentBox from '@/app/components/ContentBox'
import dataComponents from '@/app/utils/componentsData'
import { Layout } from '../../components'
import CodeEditor from '../../components/CodeEditor/CodeEditor'
interface Props {
  title: string
  code: string
  description: string
}

const page = () => {
  return (
    <Layout>
      <ContentBox>
        {/* <h4 className="text-xl font-bold text-white mb-5">Button</h4>
        <span className="text-md font-medium text-white">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique ex
          consequatur minus, pariatur corrupti illum, rerum enim, quia
          voluptates alias dolores quam facere odio numquam nihil quisquam harum
          ut quidem.
        </span>
        <CodeEditor
          code=" <button
      className={`text-sm font-bold text-white flex items-center bg-indigo-600 hover:bg-indigo-700  py-2 px-4 rounded transition duration-300 ease-in-out`}
    >
      Press me
    </button>"
        /> */}
        {dataComponents &&
          dataComponents.map((item: Props, index) => (
            <div key={index}>
              <h4 className="text-xl font-bold text-white mb-5">
                {item.title}
              </h4>
              <span className="text-md font-medium text-white">
                {item.description}
              </span>
              <CodeEditor code={item.code} />
            </div>
          ))}
      </ContentBox>
    </Layout>
  )
}

export default page
