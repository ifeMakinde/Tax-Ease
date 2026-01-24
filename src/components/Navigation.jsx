import React from "react";
import logo from "../assets/Vectorized logo SVG.png";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import Btn from "../Btn.jsx";
import { Menu } from "lucide-react";

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
        <img src={logo} alt="" width={150} />
      </div>

      {/*  navigtions*/}
      <nav className="hidden lg:flex justify-center items-center gap-6 font-semibold ">
        {navItems.map((nav) => (
          <li
            key={nav.href}
            className="list-none capitalize transition-all hover:scale-110 duration-600 ease-in-out cursor-pointer"
          >
            <a href={nav.href}>{nav.link}</a>
          </li>
        ))}
      </nav>

      <div className="hidden lg:flex justify-between items-center gap-2">
        <Btn>Get started</Btn>
      </div>
      <button className="block lg:hidden cursor-pointer">
        <Menu size={28} strokeWidth={1} />
      </button>
    </header>
  );
}

export default Navigation;
