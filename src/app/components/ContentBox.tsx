import React from 'react'
import LeftSideBar from './LeftSideBar'
import RightSideBar from './RightSideBar'
interface Props {
  children: React.ReactNode
}
const ContentBox = ({ children }: Props) => {
  return (
    <div className="flex gap-10">
      <LeftSideBar />
      <div className={` w-3/5 mx-auto mt-20 rounded-2xl`}>{children}</div>
      <RightSideBar />
    </div>
  )
}

export default ContentBox
