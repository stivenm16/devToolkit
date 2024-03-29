'use client'
import { Spinner } from '@/app/components'
import { Suspense, lazy } from 'react'
import usePagination from '../hooks/usePaginationComponents'

const RightSideBar = lazy(() => import('./RightSideBar'))
const LeftSideBar = lazy(() => import('../../LeftSideBar'))
const CodeEditor = lazy(() => import('./CodeEditor'))

interface ContentBoxProps {
  children?: React.ReactNode
}
1
const ContentBox: React.FC<ContentBoxProps> = () => {
  const { handlePagination, currentContent } = usePagination()

  return (
    <div className="flex relative flex-col min-h-[85svh] z-1000 w-full justify-between mb-8">
      <div className="flex gap-10">
        <LeftSideBar />

        <div className={`w-3/5 mx-auto  rounded-2xl`}>
          {currentContent ? (
            <div key={currentContent.title} id={currentContent.title}>
              <h4 className="text-xl font-bold text-white mb-5">
                {currentContent.title}
              </h4>
              <span className="text-md font-medium text-white">
                {currentContent.description}
              </span>
              <Suspense
                fallback={
                  <div className="mt-10">
                    <Spinner size={12} />
                  </div>
                }
              >
                <CodeEditor
                  code={currentContent.code}
                  key={currentContent.title}
                  inLine={true}
                />
              </Suspense>
            </div>
          ) : (
            <div className="flex flex-col justify-center mt-44 text-white items-center gap-5">
              <Spinner size={12} />
            </div>
          )}
        </div>
        <RightSideBar />
      </div>
      <div className="text-gray-400 w-2/3 mx-auto px-10 flex  justify-between">
        <div className="prev-button transition duration-300 ease-in-out cursor-pointer flex items-center gap-4">
          <div
            onClick={() => handlePagination('prev')}
            className="hover:text-white flex items-center gap-4"
          >
            <svg
              className="transition duration-300 ease-in-out"
              width="32px"
              height="32px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="rgb(156 163 175 / 1)"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M4 12H20M4 12L8 8M4 12L8 16"
                  stroke="rgb(156 163 175 / 1)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </g>
            </svg>

            <span>Prev</span>
          </div>
        </div>
        <div
          onClick={() => handlePagination('next')}
          className="hover-arrow cursor-pointer flex items-center gap-4"
        >
          <div className="hover:text-white next-button flex-row-reverse transition duration-300 ease-in-out flex items-center gap-4">
            <svg
              className="transition duration-300 ease-in-out"
              width="32px"
              height="32px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M4 12H20M20 12L16 8M20 12L16 16"
                  stroke="rgb(156 163 175 / 1)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </g>
            </svg>

            <span>Next</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContentBox
