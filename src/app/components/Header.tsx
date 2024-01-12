import Link from 'next/link'

const Header: React.FC = () => {
  return (
    <div className=" md:block bg-indigo-700 rounded-full text-center py-1 mx-auto my-3 w-3/4 md:w-fit px-5 shadow-xl">
      <div className="container mx-auto py-2">
        <div className="flex md:items-center md:justify-center">
          <Link href={'/'}>
            <img
              className="w-8 h-auto mb-2 md:mb-0 md:mr-4"
              src="https://www.svgrepo.com/show/448244/pack.svg"
              loading="lazy"
              alt="Your Website Icon"
            />
          </Link>
          <nav className="flex justify-between md:space-x-6 text-gray-300 ml-5 w-full">
            <Link
              href={'/games/sudoku'}
              className="text-sm font-medium hover:text-white flex items-center"
            >
              Games
            </Link>
            <Link
              href={'/guides/sudoku'}
              className="text-sm font-medium hover:text-white flex items-center"
            >
              Guides
            </Link>
            <a
              href="#"
              className="text-sm font-medium hover:text-white flex items-center"
            >
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >

                <path
                  fillRule="evenodd"
                  d="M3 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H8.414l-1.707 1.707A1 1 0 0 0 6 14v4a1 1 0 0 1-2 0v-4a3 3 0 0 1 3-3h7.586L16 11.586V4H4v10h4a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1V4z"
                  clipRule="evenodd"
                />
              </svg> */}
              Community
            </a>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Header
