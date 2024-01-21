import { Layout } from '@/app/components'
import { ContentProvider } from './redux/ContentContex'
import { ContentBox } from '@/app/components/ui'

interface Props {
  title: string
  code: string
  description: string
}

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
