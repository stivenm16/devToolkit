import { ComponentsProps, DataProps } from '../types/global'

export const findElementByTitle = (
  data: ComponentsProps[],
  currentTitle: string,
): ComponentsProps | undefined => {
  for (const component of data) {
    if (component.title === currentTitle) {
      return component
    }

    if (component.children?.length) {
      const foundInChildren = findElementByTitle(
        component.children,
        currentTitle,
      )
      if (foundInChildren) {
        console.log(foundInChildren)
        return foundInChildren
      }
    }
  }

  return undefined
}

export const dataStructure: DataProps = {
  StateLess: [
    {
      title: 'Skeleton',
      description:
        'Create a loading skeleton to give users a visual indication that content is being loaded. The Skeleton component is perfect for improving user experience during asynchronous data fetching.',
      code: ` 
const Skeleton = () => {
      return (
        <>
          <div role="status" className="space-y-2.5 animate-pulse max-w-lg">
            <div className="flex items-center w-full">
              <div className="h-2.5 bg-indigo-300 rounded-full dark:bg-indigo-700 w-32"></div>
              <div className="h-2.5 ms-2 bg-indigo-400 rounded-full dark:bg-indigo-600 w-24"></div>
              <div className="h-2.5 ms-2 bg-indigo-400 rounded-full dark:bg-indigo-600 w-full"></div>
            </div>
            <div className="flex items-center w-full max-w-[480px]">
              <div className="h-2.5 bg-indigo-300 rounded-full dark:bg-indigo-700 w-full"></div>
              <div className="h-2.5 ms-2 bg-indigo-400 rounded-full dark:bg-indigo-600 w-full"></div>
              <div className="h-2.5 ms-2 bg-indigo-400 rounded-full dark:bg-indigo-600 w-24"></div>
            </div>
          </div>
        </>
      )}

render(<Skeleton />);
      `,
    },
    {
      title: 'Spinner',
      description: `Add a spinning loading indicator to your application with the Spinner component. It's a simple and effective way to communicate background processes to users.`,
      code: ` 
const Spinner = () => {
      return (
        <div className="flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-indigo-700"/>
        </div>
      )}

render(<Spinner />);
`,
    },
    {
      title: 'Card',
      description: `Design elegant and responsive cards for displaying various types of content. The Card component provides a structured layout with customizable sections for images, text, and actions.`,
      code: `     
const Card = () => {
    return (
      <div className="w-72 rounded-xl px-6 overflow-hidden shadow-xl bg-indigo-800 mx-auto">
        <div className="flex justify-center px-auto my-5">
          <CustomSVG size="50px" color="white" />
        </div>  
        
          <div className=" py-4">
            <div className="font-bold text-xl mb-2 text-white">Product</div>
            <p className="text-white text-base">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat
              porro iste quibusdam distinctio laudantium velit earum sint! Nobis,
              quibusdam.
            </p>
          </div>
          <div className=" pt-4 pb-2">
            <span className="inline-block bg-white   rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              #Category
            </span>
            <span className="inline-block bg-white   rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
              #Category
            </span>
          </div>
          <div className=" py-4">
            <span className="text-lg text-white">$99.99</span>
            <button className="bg-indigo-600 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded-full inline-flex items-center ml-4 transition duration-300 ease-in-out">
              <svg
                className="fill-current w-4 h-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M16 4a2 2 0 0 0-2 2h-2a2 2 0 0 0-4 0H6a2 2 0 0 0-2-2 1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zM8 14H6v-2h2v2zm0-4H6V7h2v3zm10 4h-2v-2h2v2zm0-4h-2V7h2v3z" />
              </svg>
              Add to cart
            </button>
          </div>
        </div>
    )}

render(<Card />);
    
    `,
    },
    {
      title: 'Form',
      description: `Build stylish and accessible forms with the Form component. It includes pre-styled input fields and buttons, making it easy to create visually appealing login or registration forms.`,
      code: `
const Form = () => {
      return (
        <div className="bg-indigo-800 p-8 rounded-xl shadow-xl h-fit w-3/4 md:w-full  relative">
          <form className="space-y-4 z-10">
              <div className="mb-4">
                  <label  className="block text-white font-bold mb-1">
                      Email:
                  </label>
                  <input
                      type="email"
                      className="w-full px-4 py-2 rounded border"
                  />
              </div>

              <div className="mb-4">
                  <label  className="block text-white font-bold mb-1">
                      Password:
                  </label>
                  <input
                      type="password"
                      className="w-full px-4 py-2 rounded border"
                  />
              </div>

              <button
                  type="submit"
                  className="w-full bg-indigo-900 hover:bg-indigo-600 text-white py-2 rounded focus:outline-none"
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
      )}

render(<Form />);


    `,
    },
    {
      title: 'Button',
      description: `Create eye-catching buttons with the Button component. It's fully customizable and comes with built-in hover effects, making it easy to enhance user interactions.`,
      code: ` 
const Button = () => {
    return (
      <button className={'text-sm font-bold text-white flex items-center bg-indigo-600 hover:bg-indigo-700 py-2 px-4 rounded transition duration-300 ease-in-out'}>
          Press me
      </button>
    )}

render(<Button />);
`,
    },
    {
      title: 'Header',
      description: `Design a sleek and responsive header for your website or application. The Header component includes navigation links and a logo, providing a clean and organized layout.`,
      code: `  

const Header = () => {
    return (
      <div className=" md:block bg-indigo-700 rounded-full text-center py-1 mx-auto my-3 w-3/4 md:w-fit px-5 shadow-xl">
      <div className="container mx-auto py-2">
        <div className="flex md:items-center md:justify-center">
          <a
          // set your href href={'/'}
          >
           <CustomSVG size="20px" color="white" />
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
    </div>
  )}

render(<Header />);
      
      
    `,
    },
  ],
  StateFull: [
    {
      title: 'Modal',
      description:
        'Create a loading skeleton to give users a visual indication that content is being loaded. The Skeleton component is perfect for improving user experience during asynchronous data fetching.',
      code: ` 

  const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50"
        onClick={onClose}
      />
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-indigo-300 p-8 flex flex-col rounded-md shadow-lg z-50 align-center ">
        <button
          className="absolute top-2 right-2 cursor-pointer"
          onClick={onClose}
        >
          <svg
            width="28px"
            height="28px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0" />
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g id="SVGRepo_iconCarrier">
              {' '}
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM8.96963 8.96965C9.26252 8.67676 9.73739 8.67676 10.0303 8.96965L12 10.9393L13.9696 8.96967C14.2625 8.67678 14.7374 8.67678 15.0303 8.96967C15.3232 9.26256 15.3232 9.73744 15.0303 10.0303L13.0606 12L15.0303 13.9696C15.3232 14.2625 15.3232 14.7374 15.0303 15.0303C14.7374 15.3232 14.2625 15.3232 13.9696 15.0303L12 13.0607L10.0303 15.0303C9.73742 15.3232 9.26254 15.3232 8.96965 15.0303C8.67676 14.7374 8.67676 14.2625 8.96965 13.9697L10.9393 12L8.96963 10.0303C8.67673 9.73742 8.67673 9.26254 8.96963 8.96965Z"
                fill="#1C274C"
              />
            </g>
          </svg>
        </button>
        <div className="my-5">{children}</div>
        <ButtonT label="Close" onClick={onClose}/>
      </div>
    </>
  );
};

  const Wrapper = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
     <ButtonT label={"Open modal"} onClick={openModal}>Open Modal</ButtonT> 
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2 className={"text-indigo-500"}>Modal Content</h2>
        <p className={"text-indigo-500"}>This is the content of the modal.</p>
      </Modal>
    </>
  );
};

 

render(<Wrapper />);
`,
    },
  ],
}
