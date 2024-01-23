'use client'
import { dataStructure } from '@/app/utils/componentsData'
import React, { ReactNode, createContext, useState } from 'react'

interface ContentContextProps {
  currentContent: string | null
  changeContent: (newContent: string | null) => void
}
interface ContentProviderProps {
  children: ReactNode
}

const ContentContext = createContext<ContentContextProps>({
  currentContent: null,
  changeContent: () => null,
})

const ContentProvider: React.FC<ContentProviderProps> = ({ children }) => {
  const [currentContent, setCurrentContent] = useState<string | null>(
    dataStructure.StateLess[0].title,
  )

  const changeContent = (newContent: string | null) => {
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
