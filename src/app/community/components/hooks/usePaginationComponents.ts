import { useContent } from '../context/ContentContext'
import { dataStructure } from '../utils/componentsData'

const usePagination = () => {
  const { currentContent, changeContent } = useContent()

  const handlePagination = (direction: 'next' | 'prev') => {
    const allComponents = [
      ...dataStructure.StateLess,
      ...dataStructure.StateFull,
    ]
    const currentIndex = allComponents.findIndex(
      (item) => item.title === currentContent?.title,
    )

    if (direction === 'next') {
      const nextIndex = (currentIndex + 1) % allComponents.length
      changeContent(allComponents[nextIndex])
    } else {
      const prevIndex =
        (currentIndex - 1 + allComponents.length) % allComponents.length
      changeContent(allComponents[prevIndex])
    }
  }

  return { handlePagination, currentContent }
}

export default usePagination
