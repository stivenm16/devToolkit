import Head from 'next/head'
import Footer from './Footer'
import Header from './Header'

type LayoutProps = {
  children: React.ReactNode
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Your Website Title</title>
        {/* Add any other meta tags or links to stylesheets or scripts here */}
      </Head>

      <Header />

      <main className="flex-grow">{children}</main>

      <Footer />
    </div>
  )
}

export default Layout
