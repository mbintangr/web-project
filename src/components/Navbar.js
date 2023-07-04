import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import logo from "../assets/logo192.png";

const Navbar = () => {
  return (
    <div className="text-center sm:flex p-7 sm:justify-between bg-primary sm:align-middle text-quaternary sm:items-center w-[100vw] px-[15vw] fixed shadow-xl">
      <Link to="/">
        <div className="flex items-center">
          <img src={logo} alt="" className="w-[50px] mr-2" />
          <h1 className="text-3xl font-bold">
            Cravery
          </h1>
        </div>
      </Link>
      <div className="flex items-center mt-2">
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
    </div>
  );
};

export default Navbar;
