interface Props {
  title: string
  code: string
  description: string
}
const dataComponents: Props[] = [
  {
    title: 'Button',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique ex consequatur minus, pariatur corrupti illum, rerum enim, quia voluptates alias dolores quam facere odio numquam nihil quisquam harumut quidem.',
    code: ` <button className={'text-sm font-bold text-white flex items-center bg-indigo-600 hover:bg-indigo-700 py-2 px-4 rounded transition duration-300 ease-in-out'}>
            Press me
</button>`,
  },
  {
    title: 'Form',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique ex consequatur minus, pariatur corrupti illum, rerum enim, quia voluptates alias dolores quam facere odio numquam nihil quisquam harumut quidem.',
    code: `
        <div className="bg-indigo-800 p-8 rounded-xl shadow-xl h-fit w-3/4 md:w-full  relative">
            <form className="space-y-4 z-10">
                <div className="mb-4">
                    <label htmlFor="email" className="block text-white font-bold mb-1">
                        Email:
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 rounded border"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="password" className="block text-white font-bold mb-1">
                        Password:
                    </label>
                    <input
                        type="password"
                        id="password"
                        className="w-full px-4 py-2 rounded border"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-indigo-800 text-white py-2 rounded hover:bg-indigo-900 focus:outline-none"
                >
                    Login
                </button>
                <p className="text-white text-center pt-auto">
                    <span className="text-indigo-300 cursor-pointer ml-2">
                        Sign up
                    </span>
                </p>
            </form>
        </div>
    `,
  },
  {
    title: 'Button',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique ex consequatur minus, pariatur corrupti illum, rerum enim, quia voluptates alias dolores quam facere odio numquam nihil quisquam harumut quidem.',
    code: ` <button className={'text-sm font-bold text-white flex items-center bg-indigo-600 hover:bg-indigo-700 py-2 px-4 rounded transition duration-300 ease-in-out'}>
            Press me
</button>`,
  },
  {
    title: 'Header',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique ex consequatur minus, pariatur corrupti illum, rerum enim, quia voluptates alias dolores quam facere odio numquam nihil quisquam harumut quidem.',
    code: `     <div className=" md:block bg-indigo-700 rounded-full text-center py-1 mx-auto my-3 w-3/4 md:w-fit px-5 shadow-xl">
      <div className="container mx-auto py-2">
        <div className="flex md:items-center md:justify-center">
          <a 
          // set your href href={'/'}
          >
            <img
              className="mb-2 md:mb-0 md:mr-4"
              src="https://www.svgrepo.com/show/448244/pack.svg"
              loading="lazy"
              width={30}
              height={30}
              alt="Your Website Icon"
            />
          </a>
          <nav className="flex justify-between md:space-x-6 text-gray-300 ml-5 w-full">
            <a
              // set your href href={'/games'}
              className="text-sm font-medium hover:text-white flex items-center"
            >
              Games
            </a>
            <a
              // set your href href={'/guides/sudoku'}
              className="text-sm font-medium hover:text-white flex items-center"
            >
              Guides
            </a>

        
              <a
              // set your href   href={'/community'}
                className="text-sm font-medium hover:text-white flex items-center"
              >
                Community
              </a>

          </nav>
        </div>
      </div>
    </div>`,
  },
]

export default dataComponents
