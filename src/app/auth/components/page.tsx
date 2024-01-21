import { ContentBox, Layout } from '../../components'
import { ContentProvider } from './redux/ContentContex'

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
