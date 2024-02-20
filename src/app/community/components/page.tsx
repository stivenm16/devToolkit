import { Layout } from '@/app/components'

import ContentBox from './components/ContentBox'
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
