import { Layout } from '@/app/components'
import { ContentBox } from '@/app/components/ui'
import { ContentProvider } from './context/ContentContext'

const page = () => {
  return (
    <Layout>
      <ContentProvider>
        <ContentBox />
      </ContentProvider>
    </Layout>
  )
}

export default page
