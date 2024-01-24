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
const CustomButton = () => {
    return (
      <button className={'text-sm font-bold text-white flex items-center bg-indigo-600 hover:bg-indigo-700 py-2 px-4 rounded transition duration-300 ease-in-out'}>
          Press me
      </button>
    )}

render(<CustomButton />);
`,
    },
    {
      title: 'Input',
      description: `Create eye-catching Inputs with the Input component. It's fully customizable and comes with built-in hover effects, making it easy to enhance user interactions.`,
      code: `
const Input = ({ value, onChange, maxDigits }) => {

  return (
    <div className="max-w-md mx-auto bg-indigo-800 p-6 rounded-md shadow-md">
       <input
        type="text"
        className="border rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-300"
        placeholder="Type something"
        value={value}
        maxLength={maxDigits}
        
      />
      <p className="text-red-500 text-sm mt-2"></p>
    </div>
  );
};

render(<Input/>)
      `,
      children: [
        {
          title: 'InputNumber',
          description: ``,
          code: ` 

const NumberInput = ({ value, onChange, maxDigits }) => {

  return (
    <div className="max-w-md mx-auto bg-indigo-800 p-6 rounded-md shadow-md">
      
      <input
        type="text"
        id="customNumberInput"
        className="border rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-300"
        placeholder="Type a number"
        value={value}
        maxLength={maxDigits}
        onChange={(e) => {
        e.preventDefault()
        const inputValue = e.target.value
        const parsedValue = parseFloat(inputValue)

        if (inputValue === '' || !isNaN(parsedValue)) {
          onChange(inputValue === '' ? 0 : parsedValue)
        }
      }}
      />
      <p className="text-red-500 text-sm mt-2"></p>
    </div>
  );
};

const Wrapper = () => {
  const [numberValue, setNumberValue] = React.useState('');

  return (
    <div className=" flex items-center justify-center">
      <NumberInput value={numberValue} onChange={setNumberValue} maxDigits={5} />
    </div>
  );
};

render(<Wrapper/>);
`,
        },
      ],
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
      title: 'Select',
      description: `This versatile dropdown offers a clean design using Tailwind CSS. Enhance your project with an accessible and customizable option selection experience.
`,
      code: ` 

const CustomSelect = ({
  options,
  selectedOption,
  onChange,
    }) => {
      const [isOpen, setIsOpen] = React.useState(false)
      const selectRef = React.useRef(null)

      const handleOptionClick = (option) => {
        onChange(option)
        closeDropdown()
      }

      const toggleDropdown = () => {
        setIsOpen(!isOpen)
      }

      const closeDropdown = () => {
        setIsOpen(false)
      }

      const handleClickOutside = (event) => {
        if (
          selectRef.current &&
          !selectRef.current.contains(event.target)
        ) {
          closeDropdown()
        }
      }

      React.useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
          document.removeEventListener('mousedown', handleClickOutside)
        }
      }, [])

      return (
        <div ref={selectRef} className="relative inline-block text-left">
          <div>
            <Button onClick={toggleDropdown}>
              <>
                <span className="text-md font-medium text-white mr-3">
                  {selectedOption.label}
                </span>
                <svg
                  width="18px"
                  height="18px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#ffffff"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {' '}
                    <path
                      d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z"
                      fill="#ffffff"
                    ></path>{' '}
                  </g>
                </svg>
              </>
            </Button>
          </div>

          {isOpen && (
            <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md z-10 shadow-lg bg-white ring-1 ring-black ring-opacity-5">
              <div className="py-1">
                {options.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleOptionClick(option)}
                    className="block px-4 py-2 text-sm  w-full text-gray-700 hover:bg-gray-100"
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )
    }

const Wrapper = () => {
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ]

  const [selectedOption, setSelectedOption] = React.useState(options[0])

  return (
    <div className={""}>
     <CustomSelect options={options} selectedOption={selectedOption} onChange={setSelectedOption} />
    </div>
  );
};

 

render(<Wrapper />);
`,
    },
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
        className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 animate-fade-in"
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
        <Button label="Close" onClick={onClose}/>
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
     <Button label={"Open modal"} onClick={openModal}>Open Modal</Button> 
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
    {
      title: 'Alert',
      description: `
  Alert component for displaying error alerts with a customizable title and content. 
`,
      code: ` 
const Alert = ({ title, content, onClose }) => {
  return (
      <div
        className="bg-indigo-100 z-10 border border-indigo-400 text-indigo-700 px-3 pr-8 pt-2 h-14 rounded fixed bottom-5 right-10 animate-fade-in"
        role="alert"
      >
        <div className="relative">
          <span
            className={"absolute top-[-0.5rem] right-[-1.5rem] cursor-pointer text-indigo-500"}
            onClick={onClose}
          >
            <svg
              className="fill-current h-6 w-6"
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <title>Close</title>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"
              />
            </svg>
          </span>
          <div className="pt-2">
            {title && <strong className="font-bold mr-2">{title}</strong>}
            <span className="block sm:inline">{content}</span>
          </div>
        </div>
      </div>

  )
}

const Wrapper = () => {
const [isVisible, setIsVisible] = React.useState(false);

const openAlert = () => {
  setIsVisible(true);
  setTimeout(() => {
    setIsVisible(false)
  },5000)
};

const closeAlert = () => {
  setIsVisible(false);
};

return (
  <>
    <Button label={"Open Alert"} onClick={openAlert}>Open Alert</Button> 
    {isVisible && ( <Alert onClose={closeAlert} content={"Operation completed successfully."} title={"Warning!"}/>)}
  </>
);
};

render(<Wrapper/>);
`,
      children: [
        {
          title: 'Alert error',
          description: `
  Alert component for displaying error alerts with a customizable title and content. 
`,
          code: ` 
const Alert = ({ title, content, onClose }) => {
  return (
      <div
        className="bg-red-500 z-10  text-white px-3 pr-8 pt-2 h-14 rounded fixed bottom-5 right-10 animate-fade-in"
        role="alert"
      >
        <div className="relative">
          <span
            className={"absolute top-[-0.5rem] right-[-1.5rem] cursor-pointer text-white"}
            onClick={onClose}
          >
            <svg
              className="fill-current h-6 w-6"
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <title>Close</title>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"
              />
            </svg>
          </span>
          <div className="pt-2">
            {title && <strong className="font-bold mr-2">{title}</strong>}
            <span className="block sm:inline">{content}</span>
          </div>
        </div>
      </div>

  )
}

const Wrapper = () => {
const [isVisible, setIsVisible] = React.useState(false);

const openAlert = () => {
  setIsVisible(true);
  setTimeout(() => {
    setIsVisible(false)
  },5000)
};

const closeAlert = () => {
  setIsVisible(false);
};

return (
  <>
    <Button label={"Open Alert"} onClick={openAlert}>Open Alert</Button> 
    {isVisible && ( <Alert onClose={closeAlert} content={"Operation completed successfully."} title={"Warning!"}/>)}
  </>
);
};

render(<Wrapper/>);
`,
        },
        {
          title: 'Alert sucess',
          description: `
  Alert component for displaying error alerts with a customizable title and content. 
`,
          code: ` 
const Alert = ({ title, content, onClose }) => {
  return (
      <div
        className="bg-green-500 z-10  text-white px-3 pr-8 pt-2 h-14 rounded fixed bottom-5 right-10 animate-fade-in"
        role="alert"
      >
        <div className="relative">
          <span
            className={"absolute top-[-0.5rem] right-[-1.5rem] cursor-pointer text-white"}
            onClick={onClose}
          >
            <svg
              className="fill-current h-6 w-6"
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <title>Close</title>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"
              />
            </svg>
          </span>
          <div className="pt-2">
            {title && <strong className="font-bold mr-2">{title}</strong>}
            <span className="block sm:inline">{content}</span>
          </div>
        </div>
      </div>

  )
}

const Wrapper = () => {
const [isVisible, setIsVisible] = React.useState(false);

const openAlert = () => {
  setIsVisible(true);
  setTimeout(() => {
    setIsVisible(false)
    
  },5000)
};

const closeAlert = () => {
  setIsVisible(false);
};

return (
  <>
    <Button label={"Open Alert"} onClick={openAlert}>Open Alert</Button> 
    {isVisible && ( <Alert onClose={closeAlert} content={"Operation completed successfully."} title={"Warning!"}/>)}
  </>
);
};

render(<Wrapper/>);
`,
        },
      ],
    },
  ],
}
