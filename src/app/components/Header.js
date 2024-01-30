"use client";

import { useState, useEffect, useContext } from "react";

//next Image
import Image from "next/image";

// react Scroll
// import { Link } from "react-scroll";
import Link from "next/link";

//components
import SearchMobile from "./SearchMobile";

//use media query hook
import { useMediaQuery } from "react-responsive";
// Icons::
import { BiMenuAltRight, BiX } from "react-icons/bi";
// Search Context::
import { SearchContext } from "../context/search";
import { set } from "date-fns";

export default function Header() {
  const { setSearchActive } = useContext(SearchContext);

  const [header, setHeader] = useState(false);
  const [nav, setNav] = useState(false);

  const [open, setopen] = useState(false);
  const handleMenuClick = () => {
    setopen(!open);
  };
  useEffect(() => {
    const handleScroll = () => {
      //header
      if (window.scrollY > 40) {
        setHeader(true);
      } else {
        setHeader(false);
      }

      if (window.scrollY > 800) {
        setSearchActive(true);
      } else {
        setSearchActive(false);
      }
    };
    //add event Listener::
    window.addEventListener("scroll", handleScroll);
    // remove event Listener::
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <header
      className={`${
        header ? "bg-white shadow-md py-2 " : "bg-transparent shadow-none py-4 "
      } fixed top-0 right-0 w-full max-w-[1920px] mx-auto z-20 transition-all duration-300`}
    >
      <div className="xl:container mx-auto flex flex-col xl:flex-row xl:items-center xl:justify-between">
        <div className="flex justify-between items-center px-4">
          {/* {logo} */}
          <Link href="/" spy={true} className="cursor-pointer">
            <Image
              src="/icons/hillrise-logo.jpg"
              width={80}
              height={64}
              alt="Image"
            />
          </Link>

          <div className="xl:hidden to-black ">
            <Link
              className="cursor-pointer mx-1 text-black text-18 font-medium md:mx-4 sm:mx-4"
              href="/"
              activeClass="active"
              spy={true}
            >
              Home
            </Link>

            <Link
              className="cursor-pointer text-black text-18 mx-1 font-medium md:mx-4 sm:mx-4 "
              href="/about"
              activeClass="active"
              spy={true}
            >
              About
            </Link>
            <Link
              className="cursor-pointer text-black text-18 font-medium mx-1 md:mx-4 sm:mx-4"
              href="/product"
              activeClass="active"
              spy={true}
            >
              Products
            </Link>

            <Link
              className="cursor-pointer text-black text-18 mx-1 font-medium md:mx-4 sm:mx-4  "
              href="/contact"
              activeClass="active"
              spy={true}
            >
              Contact
            </Link>
          </div>
        </div>
        {/* nav */}
        <nav
          className={`${
            nav
              ? "max-h-max py-8 px-4 xl:py-0 xl:px-0 "
              : "max-h-0 xl:max-h-max"
          } flex flex-col w-full bg-white gap-y-6  overflow-hidden font-medium xl:flex-row xl:w-max xl:gap-x-8 xl:h-max xl:bg-transparent xl:pb-0 transition-all duration-150 text-center xl:text-left uppercase text-sm xl:text-[15px] xl:normal-case `}
        >
          <Link
            className="cursor-pointer"
            href="/"
            activeClass="active"
            spy={true}
          >
            Home
          </Link>

          <Link
            className="cursor-pointer"
            href="/about"
            activeClass="active"
            spy={true}
          >
            About
          </Link>
          <Link
            className="cursor-pointer"
            href="/product"
            activeClass="active"
            spy={true}
          >
            Products
          </Link>

          <Link
            className="cursor-pointer"
            href="/contact"
            activeClass="active"
            spy={true}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
