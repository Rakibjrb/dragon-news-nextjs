"use client";

import Image from "next/image";
import logo from "@/assets/logo.png";
import navItems from "@/utils/navItems";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [sticky, setSticky] = useState(false);
  const activePath = usePathname();
  const menuRef = useRef();

  const handleClickOutside = () => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setToggle(!toggle);
    }
  };

  // side effect handle for handleClickOutside of the mobile menu div
  useEffect(() => {
    if (toggle) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    () => document.removeEventListener("mousedown", handleClickOutside);

    //eslint-disable-next-line
  }, [toggle]);

  // side effect handle for sticky menu
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 200) setSticky(true);
      else setSticky(false);
    });
  }, []);

  return (
    <div className={`relative ${sticky ? "sticky top-0" : ""} `}>
      <div className={` bg-black py-5 mt-3 overflow-hidden px-4 xl:px-0`}>
        <nav className="max-w-7xl mx-auto flex justify-between items-center">
          <Image
            className="w-[120px] h-[20px]"
            src={logo}
            width={160}
            height={100}
            alt="nav logo"
            placeholder="blur"
            priority={true}
          />
          {/* large device menu */}
          <ul className="hidden lg:flex items-center text-white space-x-4">
            {navItems?.map((item, i) => (
              <li key={item + i} className="uppercase font-semibold">
                <Link
                  href={item.pathname}
                  className={`${
                    activePath === item.pathname ? "text-red-500" : ""
                  }`}
                >
                  {item.route}
                </Link>
              </li>
            ))}
          </ul>

          {/* smasll device menu */}
          <div className="lg:hidden">
            <button onClick={() => setToggle(!toggle)}>
              {toggle ? (
                <IoMdClose className="text-2xl text-white" />
              ) : (
                <FaBars className="text-2xl text-white" />
              )}
            </button>
          </div>
        </nav>

        <div
          ref={menuRef}
          className={`lg:hidden z-50 absolute ${
            toggle ? "left-0" : "-left-[9999px]"
          } transition-all duration-500`}
        >
          <ul className="bg-black text-white p-5 space-y-5">
            {navItems?.map((item, index) => (
              <li key={item + index} className="uppercase">
                <Link
                  href={item.pathname}
                  className={`${
                    activePath === item.pathname ? "text-red-500" : ""
                  }`}
                >
                  {item.route}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
