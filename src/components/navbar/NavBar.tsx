"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { NavLink } from "./NavLink";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 py-6  bg-violet-100 border-b-1">
      {/* Left - Logo */}
      <div className="flex items-center space-x-2">
        <div className="flex">
          <span className="h-4 w-2 border-1 rounded-l-full bg-black mt-2"></span>
          <span className="h-6 w-3 border-1 rounded-l-full bg-black mt-1"></span>
          <span className="h-8 w-8 border-1 rounded-full bg-black"> </span>
        </div>
        <div>
          <span className="font-bold text-2xl font-sans">PrimalTraining</span>
        </div>
      </div>

      {/* Right - Buttons for sm and above */}
      <div className="hidden lg:flex space-x-8">
        <NavLink />
      </div>

      {/* Mobile Menu Toggle */}
      <div className="lg:hidden">
        <button
          className="cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <Minus size={40} /> : <Plus size={40} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute right-2 top-22 bg-white shadow-md pl-4  flex flex-col lg:hidden w-full">
          <NavLink />
        </div>
      )}
    </nav>
  );
};
