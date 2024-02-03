import { ContentContext } from '@/app/community/components/context/ContentContext'
import { ComponentsProps } from '@/app/types/global'
import { useContext } from 'react'
import { dataStructure } from '../../utils/componentsData'

const RenderFolder = (folderData: ComponentsProps[], level = 0) => {
  const { changeContent, currentContent } = useContext(ContentContext)
  const paddingLeft = `${0.5 + level * 0.5}rem`

  return (
    <ul style={{ paddingLeft }} className="my-2">
      {folderData.map((item: ComponentsProps, index: number) => (
        <li key={index}>
          <div className="my-2 cursor-pointer">
            <span
              className={`${
                currentContent === item.title && 'text-white font-bold'
              } hover:text-white`}
              onClick={() => changeContent(item.title)}
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
