'use client'
import { dataStructure } from '@/app/community/components/utils/componentsData'
import React, { ReactNode, createContext, useContext, useState } from 'react'
import { ComponentsProps } from '../types'

interface ContentContextProps {
  currentContent: ComponentsProps | null
  changeContent: (newContent: ComponentsProps) => void
}
interface ContentProviderProps {
  children: ReactNode
}

const ContentContext = createContext<ContentContextProps | null>(null)

const ContentProvider: React.FC<ContentProviderProps> = ({ children }) => {
  const [currentContent, setCurrentContent] = useState<ComponentsProps>(
    dataStructure.StateLess[0],
  )

  const changeContent = (newContent: ComponentsProps) => {
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

const useContent = () => {
  const context = useContext(ContentContext)
  if (!context) {
    throw new Error('useContent must be used within a ContentProvider')
  }
  return context
}

export { useContent, ContentProvider }
