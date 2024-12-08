"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Button from "./inner-components/Button";
import NearMeIcon from "@mui/icons-material/NearMe";
import { useWindowScroll } from "react-use";
import gsap from "gsap";

const navLinks = ["Nexus", "Vault", "Prologue", "About", "Contact"];

const Navbar = () => {
  const audioRef = useRef(null);
  const navContainerRef = useRef<HTMLAudioElement>(null);
  const [audioPlaying, setAudioPlaying] = useState(false);

  const { y: currentPositionY } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audioPlaying) {
      audio.pause();
      setAudioPlaying(false);
    } else {
      audio.play();
      setAudioPlaying(true);
    }
  };

  useEffect(() => {
    if (currentPositionY === 0) {
      // Topmost position: show navbar without floating-nav
      setIsNavVisible(true);
      navContainerRef.current!.classList.remove("floating-nav");
    } else if (currentPositionY > lastScrollY) {
      // Scrolling down: hide navbar and apply floating-nav
      setIsNavVisible(false);
      navContainerRef.current!.classList.add("floating-nav");
    } else if (currentPositionY < lastScrollY) {
      // Scrolling up: show navbar with floating-nav
      setIsNavVisible(true);
      navContainerRef.current!.classList.add("floating-nav");
    }

    setLastScrollY(currentPositionY);
  }, [currentPositionY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

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
                <a key={i} id={link} href={`#${link}`} className="nav-links ">
                  {link}
                </a>
              ))}
              <div className="animation"></div>
            </div>
            <button
              onClick={handleAudio}
              className="ml-10 flex items-center space-x-0.5 h-full w-[50px]"
            >
              <audio
                className="hidden"
                ref={audioRef}
                src="/audio/loop.mp3"
                loop
              />
              {[1, 2, 3, 4, 5, 6, 7, 8].map((bar) => (
                <div
                  key={bar}
                  className={`indicator-line ${audioPlaying && "active"}`}
                  style={{
                    animationDelay: `${bar * 0.1}s`,
                  }}
                />
              ))}
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
