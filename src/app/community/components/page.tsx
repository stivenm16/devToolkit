'use client'
import { Layout } from '@/app/components'

import ContentBox from './components/ContentBox'
import { ContentProvider } from './context/ContentContext'
import withAuth from '../../_middleware'

const page = () => {
  return (
    <Layout>
      <ContentProvider>
        <ContentBox />
      </ContentProvider>
    </Layout>
  )
}

export default withAuth(page)
