"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";
import Button from "./inner-components/Button";
import NearMeIcon from "@mui/icons-material/NearMe";
import Link from "next/link";

const navLinks = ["Nexus", "Vault", "Prologue", "About", "Contact"];

const Navbar = () => {
  const navContainerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState<number>(5);

  const handleMouseMove = (index: number) => {
    setActiveIndex(index);
  };
  const handleMouseLeave = () => {
    setActiveIndex(5);
  };

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 top-4 z-[100] h-16 border-none transition-all duration-700 sm:inset-x-6"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          <div className="flex items-center gap-7">
            <Image
              src={"/img/logo.png"}
              alt="logo"
              width={300}
              height={300}
              className="w-10"
            />
            <Button color="bg-blue-50" title="Products" LeftIcon={NearMeIcon} />
          </div>
          <div className="flex h-full items-center">
            <div className="flex  items-center relative">
              {navLinks.map((link, i) => (
                <Link
                  onMouseMove={() => handleMouseMove(i)}
                  onMouseLeave={handleMouseLeave}
                  key={i}
                  href={`#${link}`}
                  className="nav-links"
                >
                  {link}
                </Link>
              ))}
              <div
                className={`transition-all duration-200  absolute top-0 h-full w-[90px] -z-50 rounded-e-full rounded-s-full ${
                  activeIndex == 5
                    ? ""
                    : `left-[${activeIndex * 90}px]  bg-blue-50`
                }`}
              ></div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
