import { useContext } from 'react'
import { ContentContext } from '../auth/components/redux/ContentContex'
import dataComponents from '../utils/componentsData'

const RightSideBar = () => {
  const { changeContent, currentContent } = useContext(ContentContext)
  return (
    <div
      className={` text-gray-300 h-full w-60 flex flex-col  min-h-[40rem]  opacity-80 rounded-3xl  p-5 fixed right-[-20px] `}
    >
      <h3 className="text-white font-bold">On this page</h3>
      <h4 className="my-10">Components</h4>
      <div className="gap-10 flex flex-col ">
        {dataComponents.map((component, index) => (
          <span
            key={index}
            className={`pl-5 cursor-pointer hover:text-white transition duration-300 ease-in-out ${
              currentContent === component.title && 'font-bold text-white'
            }`}
            onClick={() => changeContent(component.title)}
          >
            {component.title}
          </span>
        ))}
      </div>
    </div>
  )
}

export default RightSideBar
