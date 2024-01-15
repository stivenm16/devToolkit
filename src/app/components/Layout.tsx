import { Footer, Header } from '.'

type LayoutProps = {
  children: React.ReactNode
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-indigo-400 ">
      <Header />

      <main className="flex-grow">{children}</main>

      <Footer />
    </div>
  )
}

export default Layout
