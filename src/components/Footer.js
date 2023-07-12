import React from 'react'
import { Link } from 'react-router-dom'

function Footer({position}) {
  return (
    <div className={'flex-col w-[100%] bg-gray-200 px-[15vw] py-5 sm:py-10 rounded-t-2xl bottom-0 left-0 mt-10 ' + position}>
        <div className='flex justify-between items-center'>
            <h1 className='text-2xl sm:text-3xl font-bold text-primary'>Cravery</h1>
            <ul className='flex text-primary text-sm sm:text-lg'>
                <li className='px-1'>
                    <Link to="/About">About</Link>
                </li>
                <li className='px-1'>
                    <Link to='/Contact'>Contact</Link>
                </li>
                <li className='px-1'> 
                    <a href="https://github.com/mbintangr/web-project" target='_blank' rel="noreferrer" >Github</a>
                </li>
            </ul>
        </div>

        <div className='text-md text-center mt-5'>
            <p>Copyright © 2023 Cravery</p>
        </div>
    </div>
  )
}

export default Footer