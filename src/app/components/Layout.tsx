import { Header } from '.'

type LayoutProps = {
  children: React.ReactNode
  hideHeader?: boolean
}
const Layout: React.FC<LayoutProps> = ({ children, hideHeader }) => {
  return (
    <div className="flex flex-col min-h-screen bg-indigo-950 ">
      {!hideHeader && <Header />}

      <main className="flex-grow main-content mt-24">{children}</main>

      {/* <Footer /> */}
    </div>
  )
}

export default Layout
