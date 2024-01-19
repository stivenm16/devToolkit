'use client'
import { ButtonT, Layout } from '@/app/components'
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
