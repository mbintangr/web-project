import React, { useState } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import logo from "../assets/logo512.png";
import navLogo from "../assets/logo192.png"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="text-center flex py-5 px-[10vw] sm:px-[15vw] justify-between bg-primary
     text-tertiary items-center w-[100vw] fixed shadow-xl z-20 max-h-[75px] sm:max-h-[100px] 
     top-0 left-0">
      <Link to="/">
        <div className="flex items-center">
          <img src={navLogo} alt="" className="h-[35px] mr-2 sm:h-[50px]" />
          <h1 className="text-2xl sm:text-3xl font-bold">Cravery</h1>
        </div>
      </Link>
      <div className="hidden sm:flex items-center">
        <ul className="flex">
          <li className="mx-3">
            <Link to="/About">About</Link>
          </li>

          <li className="mx-3">
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
        <Button link="/Recipes" title="Recipes" />
      </div>

      {/* mobile nav */}
      <AiOutlineMenu
        className="mx-2 sm:hidden cursor-pointer text-2xl"
        onClick={() => setNav(!nav)}
      />

      {/* overlay */}
      <div
        className={
          nav ? "bg-black/40 backdrop-blur-sm w-full h-screen absolute top-0 left-0" : "hidden"
        }
      >
        <button
          className="w-[100%] h-[100%] cursor-default"
          onClick={() => setNav(!nav)}
        ></button>
      </div>

      {/* sidebar */}
      <div
        className={
          nav
            ? "absolute top-0 right-0 duration-300"
            : "absolute top-0 right-[-150%] duration-300"
        }
      >
        <div className="p-6 w-[300px] h-screen bg-quaternary shadow-xl text-primary">
          <div className="flex justify-between items-center">
            <h1 className="font-bold text-2xl">Cravery</h1>
            <AiOutlineClose
              size={30}
              className="cursor-pointer"
              onClick={() => setNav(!nav)}
            />
          </div>

          <img src={logo} alt="" className="mx-auto my-10" />

          <div className="text-lg mt-10">
            <ul className="my-2">
              <li className="mb-5">
                <Link to="/About" onClick={() => setNav(!nav)}>About</Link>
              </li>

              <li className="mb-5">
                <Link to="/Contact" onClick={() => setNav(!nav)}>Contact</Link>
              </li>
            </ul>
            <Button link="/Recipes" title="Recipes" onClick={() => setNav(!nav)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
