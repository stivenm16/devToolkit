'use client'
import { Button, Layout } from '@/app/components'
import Link from 'next/link'

const page = () => {
  return (
    <Layout>
      <Link href={'/community/components'}>
        <Button label="Go to components" />
      </Link>
    </Layout>
  )
}

export default page
