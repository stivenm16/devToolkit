import { Header } from '@/app/components'
import { LeftSideBar } from '@/app/components/ui'
import Client from './components/Client'

const ClientPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-indigo-950 ">
      <Header />
      <div className="flex-grow flex">
        <LeftSideBar />
        <Client />
      </div>
    </div>
  )
}

export default ClientPage
