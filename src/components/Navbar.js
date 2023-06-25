/* import React from 'react'
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
 */

'use client';

import { Dropdown, Navbar, Avatar } from 'flowbite-react';

export default function NavbarWithDropdown() {
  return (
    <Navbar
      fluid
      rounded
    >
      <Navbar.Brand href="https://flowbite-react.com">
        <img
          alt="Flowbite React Logo"
          className="mr-3 h-6 sm:h-9"
          src="https://www.flowbite-react.com/favicon.svg"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite React
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          inline
          label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded/>}
        >
          <Dropdown.Header>
            <span className="block text-sm">
              Bonnie Green
            </span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>
            Dashboard
          </Dropdown.Item>
          <Dropdown.Item>
            Settings
          </Dropdown.Item>
          <Dropdown.Item>
            Earnings
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>
            Sign out
          </Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link
          active
          href="#"
        >
          <p>
            Home
          </p>
        </Navbar.Link>
        <Navbar.Link href="#">
          About
        </Navbar.Link>
        <Navbar.Link href="#">
          Services
        </Navbar.Link>
        <Navbar.Link href="#">
          Pricing
        </Navbar.Link>
        <Navbar.Link href="#">
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}


