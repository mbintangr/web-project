import React from 'react'

const Layout = ({ children }) => {
  return (
    <div className='px-[15vw] pt-[130px]'>
        <p>
            {children}
        </p>
    </div>
  )
}

export default Layout