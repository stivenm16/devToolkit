'use client'
import { useEffect, useState } from 'react'

const Snake = () => {
  const [snakeHead, setSnakeHead] = useState({ x: 0, y: 0 })
  const [snakeBody, setSnakeBody] = useState<Array<{ x: number; y: number }>>(
    [],
  )
  const [lastDirection, setLastDirection] = useState<string>('right')

  useEffect(() => {
    let intervalId: NodeJS.Timeout

    const handleKeyPress = (e: any) => {
      // Update the last direction when a key is pressed
      if (e.key === 'ArrowUp' && lastDirection !== 'down') {
        setLastDirection('up')
      } else if (e.key === 'ArrowDown' && lastDirection !== 'up') {
        setLastDirection('down')
      } else if (e.key === 'ArrowLeft' && lastDirection !== 'right') {
        setLastDirection('left')
      } else if (e.key === 'ArrowRight' && lastDirection !== 'left') {
        setLastDirection('right')
      }
    }

    // Start the game loop
    intervalId = setInterval(() => {
      // Update the head based on the last direction
      setSnakeHead((prev) => {
        const newHead = { ...prev }
        switch (lastDirection) {
          case 'up':
            newHead.y -= 1
            break
          case 'down':
            newHead.y += 1
            break
          case 'left':
            newHead.x -= 1
            break
          case 'right':
            newHead.x += 1
            break
          default:
            break
        }
        return newHead
      })

      // Update the body segments
      setSnakeBody((prev) => {
        const newBody = [...prev]

        // Add the current head position to the body
        newBody.unshift({ x: snakeHead.x, y: snakeHead.y })

        // Remove the last segment if the length exceeds a certain limit
        if (newBody.length > 9) {
          newBody.pop()
        }

        return newBody
      })
    }, 200) // Adjust the interval for the desired speed

    // Attach event listener for key presses
    window.addEventListener('keydown', handleKeyPress)

    // Cleanup function to remove event listener and clear interval on component unmount
    return () => {
      window.removeEventListener('keydown', handleKeyPress)
      clearInterval(intervalId)
    }
  }, [lastDirection, snakeHead])

  return (
    <div>
      {snakeBody.map((segment, index) => (
        <div
          key={index}
          className="absolute top-0 left-0 z-0 bg-indigo-900"
          style={{
            top: `${segment.y * 20}px`,
            left: `${segment.x * 20}px`,
            width: '30px',
            height: '30px',
            // background: 'rgba(55, 83, 138, 0.18)',
            borderRadius: '50%',
            zIndex: index + 1,
          }}
        ></div>
      ))}

      <div
        className="absolute top-0 left-0 z-0 bg-indigo-900"
        style={{
          top: `${snakeHead.y * 20}px`,
          left: `${snakeHead.x * 20}px`,
          width: '30px',
          height: '30px',
          //   background: 'rgba(55, 83, 138, 0.18)',
          borderRadius: '50%',
          zIndex: snakeBody.length + 1,
        }}
      >
        <div className="eye eye-left absolute"></div>
        <div className="eye eye-right absolute"></div>
      </div>
    </div>
  )
}

export default Snake
