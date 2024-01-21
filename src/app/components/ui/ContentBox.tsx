'use client'
import { Suspense, lazy, useContext, useEffect, useState } from 'react'
import { Spinner } from '.'
import { ContentContext } from '../../auth/components/redux/ContentContex'
import dataComponents, { ComponentsProps } from '../../utils/componentsData'
import LeftSideBar from './LeftSideBar'
import RightSideBar from './RightSideBar'

const CodeEditor = lazy(() => import('../CodeEditor/CodeEditor'))
const ContentBox = () => {
  const { currentContent } = useContext(ContentContext)
  const [currentData, setCurrentData] = useState<ComponentsProps>()
  useEffect(() => {
    const matchingData = dataComponents.find(
      (item) => item.title === currentContent,
    )
    setCurrentData(matchingData)
  }, [currentContent])
  return (
    <div className="flex gap-10">
      <LeftSideBar />
      <div className={`w-3/5 mx-auto  rounded-2xl`}>
        {currentData ? (
          <div key={currentData.title} id={currentData.title} className="py-10">
            <h4 className="text-xl font-bold text-white mb-5">
              {currentData.title}
            </h4>
            <span className="text-md font-medium text-white">
              {currentData.description}
            </span>
            <Suspense fallback={<Spinner size={40} />}>
              <CodeEditor code={currentData.code} key={currentData.title} />
            </Suspense>
          </div>
        ) : (
          <div className="flex flex-col justify-center mt-44 text-white items-center gap-5">
            <Spinner size={12} />
            {/* <h3>No matching data found for {currentContent}</h3>   */}
          </div>
        )}
      </div>
      <RightSideBar />
    </div>
  )
}

export default ContentBox
