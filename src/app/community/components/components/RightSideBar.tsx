import { useContent } from '../context/ContentContext'
import { ComponentsProps } from '../types'
import { dataStructure } from '../utils/componentsData'

const RenderFolder = (folderData: ComponentsProps[], level = 0) => {
  const { changeContent, currentContent } = useContent()
  const paddingLeft = `${0.5 + level * 0.5}rem`

  return (
    <ul style={{ paddingLeft }} className="my-2">
      {folderData.map((item: ComponentsProps, index: number) => (
        <li key={index}>
          <div className="my-2 cursor-pointer pl-3 flex ">
            <div
              className={` w-2 h-5  ${
                currentContent?.title === item.title &&
                'border-indigo-400 border-l-2'
              }`}
            />
            <span
              className={`transition ease-in-out ${
                currentContent?.title === item.title &&
                'text-indigo-400 font-bold  '
              } `}
              onClick={() => changeContent(item)}
            >
              {item.title}
            </span>
          </div>
          {item.children && RenderFolder(item.children, level + 1)}
        </li>
      ))}
    </ul>
  )
}

const RightSideBar = () => {
  return (
    <div
      className={`hidden md:flex  text-gray-300 h-full w-60 flex-col  min-h-[40rem]  opacity-80 rounded-3xl  p-5 fixed right-[-20px] `}
    >
      <h3 className="text-white font-bold">On this page</h3>
      <h4 className="my-10">Components</h4>
      <div className="gap-5 flex flex-col ">
        {Object.keys(dataStructure).map((category, index) => (
          <div key={index}>
            <h5 className="font-bold">{category}</h5>
            {RenderFolder((dataStructure as any)[category])}
          </div>
        ))}
      </div>
    </div>
  )
}

export default RightSideBar
