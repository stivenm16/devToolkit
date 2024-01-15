import { Footer, Header } from '.'

type LayoutProps = {
  children: React.ReactNode
  hideHeader?: boolean
}
const Layout: React.FC<LayoutProps> = ({ children, hideHeader }) => {
  return (
    <div className="flex flex-col min-h-screen bg-indigo-400 ">
      {!hideHeader && <Header />}

      <main className="flex-grow">{children}</main>

      <Footer />
    </div>
  )
}

export default Layout
