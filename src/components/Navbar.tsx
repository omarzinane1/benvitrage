import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { navLinks } from "@/constants/nav-links";
import MobileNav from "./MobileNav";
import { Phone, PhoneCall } from "lucide-react";

const Navbar = () => {
  return (
    <header className="fixed flex justify-center items-center top-0 left-0 w-full h-24 backdrop-blur-lg z-30">
      <div className="relative container py-6 flex justify-between transition-all">
        <Logo />
        {/* desktop navigation */}
        <nav className="hidden md:flex items-center gap-4 capitalize">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={`#${link}`}
              className="text-[15px] first-letter:text-sky-500 uppercase hover:border-b-2 border-sky-400  text-slate-200"
            >
              {link}
            </Link>
          ))}
        </nav>
        <Link
          href=""
          className="text-sm hidden md:flex font-semibold tracking-wide text-slate-200"
        >
          <div className="flex items-center">
            <PhoneCall className="w-6 h-6 text-blue-500" />
            <span className=" uppercase ml-2 text-[16px] font-semibold text-slate-200">
              05 12 34 56 78
            </span>
          </div>
        </Link>
        {/* mobile navigation */}
        <MobileNav />
      </div>
    </header>
  );
};

export default Navbar;
