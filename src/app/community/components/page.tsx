import { Layout } from '@/app/components'
import { ContentBox } from '@/app/components/ui'
import { ContentProvider } from './redux/ContentContext'

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
