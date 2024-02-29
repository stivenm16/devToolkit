import { Header } from '@/app/components'
import LeftSideBar from '../LeftSideBar'
import Client from './components/Client'
import { ClientProvider } from './context/RequestContext'
import withAuth from '../../_middleware'

const ClientPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-indigo-950  ">
      <Header />
      <div className="flex-grow flex pt-24">
        <LeftSideBar />
        <ClientProvider>
          <Client />
        </ClientProvider>
      </div>
    </div>
  )
}

export default withAuth(ClientPage)
