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
