import React, { useState } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import logo from "../assets/logo192.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="text-center flex p-7 justify-between bg-primary align-middle text-quaternary items-center w-[100vw] px-[15vw] fixed shadow-xl z-20">
      <Link to="/">
        <div className="flex items-center">
          <img src={logo} alt="" className="h-[50px] mr-2" />
          <h1 className="text-3xl font-bold">Cravery</h1>
        </div>
      </Link>
      <div className="hidden sm:flex items-center mt-2">
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
        size="30"
        className="mx-2 sm:hidden cursor-pointer"
        onClick={() => setNav(!nav)}
      />

      {/* overlay */}
      <div
        className={
          nav ? "bg-black/50 w-full h-screen absolute top-0 left-0" : "hidden"
        }
      ></div>

      {/* sidebar */}
      <div className={(nav ? "absolute top-0 right-0 duration-300" : "absolute top-0 right-[-100%] duration-300")}>
        <div className="p-10 w-[300px] h-screen bg-tertiary shadow-xl text-secondary">
          <div className="flex justify-between items-center">
            <h1 className="font-bold text-2xl">Cravery</h1>
            <AiOutlineClose size={30} className="cursor-pointer" onClick={() => setNav(!nav)} />
          </div>

          <img src={logo} alt="" className="mx-auto my-10" />

          <div className="text-lg mt-10">
            <ul className="my-2">
              <li className="mb-5">
                <Link to="/About">About</Link>
              </li>

              <li className="mb-5">
                <Link to="/Contact">Contact</Link>
              </li>
            </ul>
            <Button link="/Recipes" title="Recipes" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
