import { useContext } from 'react'

import { ContentContext } from '../community/components/context/ContentContext'
import { dataStructure } from '../utils/componentsData'

const usePagination = () => {
  const { currentContent, changeContent } = useContext(ContentContext)

  const handlePagination = (direction: 'next' | 'prev') => {
    const allComponents = [
      ...dataStructure.StateLess,
      ...dataStructure.StateFull,
    ]
    const currentIndex = allComponents.findIndex(
      (item) => item.title === currentContent,
    )

    if (direction === 'next') {
      const nextIndex = (currentIndex + 1) % allComponents.length
      changeContent(allComponents[nextIndex].title)
    } else {
      const prevIndex =
        (currentIndex - 1 + allComponents.length) % allComponents.length
      changeContent(allComponents[prevIndex].title)
    }
  }

  return { handlePagination, currentContent }
}

export default usePagination
