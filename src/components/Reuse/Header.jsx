import React from 'react'
const Header = ({children}) => {
  return (
    <header className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg border-b border-gray-700 py-4 sm:px-6 flex justify-between'>
     {children}
    </header>
  )
}

export default Header