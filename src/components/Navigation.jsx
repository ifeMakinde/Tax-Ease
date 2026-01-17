import React from "react";
import logo from "../assets/Vectorized logo SVG.png";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const navItems = [
  {
    link: "who It's For",
    href: "#whoItsFor",
  },
  {
    link: "features",
    href: "#features",
  },
  {
    link: "FAQ",
    href: "#FAQ",
  },
];
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
            key={nav.href}
            className="list-none capitalize transition-all hover:scale-110 duration-600 ease-in-out cursor-pointer"
          >
            <a href={nav.href}>{nav.link}</a>
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

        <Button className="capitalize text-[14px] lg:text-base px-4 py-4 lg:px-6 lg:py-6 bg-[#064E3B] rounded-lg text-white cursor-pointer">
          get started
        </Button>
      </div>
    </header>
  );
}

export default Navigation;
