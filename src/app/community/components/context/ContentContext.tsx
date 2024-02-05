'use client'
import { dataStructure } from '@/app/community/components/utils/componentsData'
import React, { ReactNode, createContext, useState } from 'react'
import { ComponentsProps } from '../types'

interface ContentContextProps {
  currentContent: ComponentsProps | null
  changeContent: (newContent: ComponentsProps | null) => void
}
interface ContentProviderProps {
  children: ReactNode
}

const ContentContext = createContext<ContentContextProps>({
  currentContent: null,
  changeContent: () => null,
})

const ContentProvider: React.FC<ContentProviderProps> = ({ children }) => {
  const [currentContent, setCurrentContent] = useState<null | ComponentsProps>(
    dataStructure.StateLess[0],
  )

  const changeContent = (newContent: ComponentsProps | null) => {
    setCurrentContent(newContent)
  }

  const contextValues: ContentContextProps = {
    currentContent,
    changeContent,
  }

  return (
    <ContentContext.Provider value={contextValues}>
      {children}
    </ContentContext.Provider>
  )
}

export { ContentContext, ContentProvider }
