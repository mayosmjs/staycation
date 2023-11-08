import React from 'react'
import ThemeToggle from './theme/ThemeToggle'

const footer = () => {
  return (
    <div className='fixed bottom-0 p-4  border-gray-100 '>
          <ThemeToggle/>
    </div>
  )
}

export default footer
