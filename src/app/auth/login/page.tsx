'use client'
import { Layout } from '@/app/components'
import { ButtonT } from '@/app/components/ui'
import Link from 'next/link'

const page = () => {
  return (
    <Layout>
      <Link href={'/auth/components'}>
        <ButtonT label="Go to components" />
      </Link>
    </Layout>
  )
}

export default page
