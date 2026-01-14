import React from "react";
import logo from "../assets/Vectorized logo SVG.png";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const navItems = ["Who it's for", "Features", "FAQ"];
function Navigation() {
  return (
    <header className="flex justify-between items-center gap-4 p-4">
      {/* logo */}
      <div>
        <img src={logo} alt="" width={100} />
      </div>

      {/*  navigtions*/}
      <nav className="hidden lg:flex justify-center items-center gap-6 font-semibold ">
        {navItems.map((nav) => (
          <li
            key={nav}
            className="list-none capitalize transition-all hover:scale-110 duration-600 ease-in-out cursor-pointer"
          >
            <a href="#reform">{nav}</a>
            {/* <Link href="#reform" className="">
              {nav}
            </Link> */}
          </li>
        ))}
      </nav>

      <div className="flex justify-between items-center gap-2 ">
        <Button className="capitalize text-[14px] lg:text-base px-4 py-4 lg:px-6 lg:py-6 font-semibold cursor-pointer bg-transparent text-black ">
          log in
        </Button>

        <Button className="capitalize text-[14px] lg:text-base px-4 py-4 lg:px-6 lg:py-6 bg-[#10B981] rounded-lg text-white cursor-pointer">
          get started
        </Button>
      </div>
    </header>
  );
}

export default Navigation;
