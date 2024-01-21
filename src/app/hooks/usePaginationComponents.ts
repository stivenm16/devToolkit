import { useContext } from 'react'
import { ContentContext } from '../auth/components/redux/ContentContex'
import dataComponents from '../utils/componentsData'

const usePagination = () => {
  const { currentContent, changeContent } = useContext(ContentContext)

  const handlePagination = (direction: string) => {
    const currentIndex = dataComponents.findIndex(
      (item) => item.title === currentContent,
    )
    const lastIndex = dataComponents.length - 1

    if (direction === 'next') {
      changeContent(
        dataComponents[currentIndex === lastIndex ? 0 : currentIndex + 1].title,
      )
    } else {
      changeContent(
        dataComponents[currentIndex === 0 ? lastIndex : currentIndex - 1].title,
      )
    }
  }

  return { handlePagination, currentContent }
}

export default usePagination
