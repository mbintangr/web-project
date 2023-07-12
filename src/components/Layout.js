import React from 'react'

const Layout = ({ children }) => {
  return (
    <div className='px-[10vw] sm:px-[15vw] sm:pt-[130px] pt-[100px] min-h-'>
        {children}
    </div>
  )
}

export default Layout