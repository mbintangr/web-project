import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='flex-col w-[100%] bg-gray-200 px-[15vw] py-10 rounded-t-2xl relative bottom-0 left-0'>
        <div className='flex justify-between items-center'>
            <h1 className='text-3xl font-bold text-[#176B87]'>Cravery</h1>
            <ul className='flex text-[#001C30]'>
                <li className='px-2'>
                    <Link to="/About">About</Link>
                </li>
                <li className='px-2'>
                    Contact
                </li>
                <li className='px-2'>
                    Github
                </li>
            </ul>
        </div>

        <footer className='text-center mt-5'>
            <p>Copyright © 2023 Cravery</p>
        </footer>
    </div>
  )
}

export default Footer