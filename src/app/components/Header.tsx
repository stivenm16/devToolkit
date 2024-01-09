// components/Header.tsx

const Header: React.FC = () => {
  return (
    <div className=" md:block bg-sky-700 rounded-full text-center py-1 mx-auto my-5 w-3/4 md:w-fit px-5 shadow-xl">
      <div className="container mx-auto py-2">
        <div className="flex md:items-center md:justify-center">
          <img
            className="w-8 h-auto mb-2 md:mb-0 md:mr-4"
            src="https://www.svgrepo.com/show/448244/pack.svg"
            loading="lazy"
            alt="Your Website Icon"
          />
          <nav className="flex justify-between md:space-x-6 text-gray-300 ml-5 w-full">
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
                  d="M10 3a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1zM4 8a1 1 0 1 1 0-2h12a1 1 0 1 1 0 2H4zm12 3a1 1 0 1 0 0-2H4a1 1 0 1 0 0 2h12zm-8 4a1 1 0 1 1 0-2h4a1 1 0 1 1 0 2h-4z"
                  clipRule="evenodd"
                />
              </svg> */}
              Pricing
            </a>
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
                  d="M4 4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v5.414l-2-2V5H5v14h10v-2.414l2 2V16a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4z"
                  clipRule="evenodd"
                />
              </svg> */}
              Gallery
            </a>
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
              Blog
            </a>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Header
