import React from 'react'
import Button from './Button';

const Navbar = () => {
  return (
    <div className='text-center flex p-7 justify-between bg-[#001C30] align-middle text-[#DAFFFB] items-center w-[100vw] px-[15vw] fixed shadow-xl'>
        <h1 className='text-3xl font-bold'>Cravery</h1>
        <div className='flex items-center'>
            <ul className='flex'>
                <li className='mx-3'><a href="#">Home</a></li>
                <li className='mx-3'><a href="/About">About</a></li>
            </ul>
            <Button link="/Recipes" title="Recipes" />
        </div>
    </div>
  )
}

export default Navbar;
