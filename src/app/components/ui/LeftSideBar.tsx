import Link from 'next/link'

const LeftSideBar = () => {
  return (
    <div
      className={`hidden md:flex bg-indigo-800 text-white h-2/3  px-8 flex-col text-center justify-evenly min-h-[40rem] rounded-3xl shadow-lg p-5 fixed left-[-20px]`}
    >
      <Link href="/community/components">
        <span className="hover:text-indigo-300">Components</span>
      </Link>
      <Link href="/community/client">
        <span className="hover:text-indigo-300">Client</span>
      </Link>
    </div>
  )
}

export default LeftSideBar
