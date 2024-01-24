'use client'
import { Layout } from '@/app/components'
import { Button } from '@/app/components/ui'
import Link from 'next/link'

const page = () => {
  return (
    <Layout>
      <Link href={'/auth/components'}>
        <Button label="Go to components" />
      </Link>
    </Layout>
  )
}

export default page
