import { Header } from '@/app/components'
import { LeftSideBar } from '@/app/components/ui'
import Client from './Client'

const ClientPage = () => {
  return (
    // <Layout>
    <div className="flex flex-col min-h-screen bg-indigo-950 ">
      <Header />
      <div className="flex-grow flex">
        <LeftSideBar />
        <Client />
      </div>

      {/* <Footer /> */}
    </div>

    // </Layout>
  )
}

export default ClientPage
