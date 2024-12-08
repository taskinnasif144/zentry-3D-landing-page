"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, useGSAP);

type Props = {
  header: string;
};

const WordAfterWrordHeader = ({ header }: Props) => {
  const upperRef = useRef(null);
  const lowerRef = useRef(null);
  useGSAP(() => {
    gsap.from(upperRef.current, {
      scrollTrigger: {
        trigger: upperRef.current,
        start: "top 80%",
        end: "+=300",
        toggleActions: "play none none reverse",
      },
      rotateY: 24,
      opacity: 0,
      rotateX: 30,
      duration: 0.3,
      skewY: 25,
      y: 300,
      x: 150,
      scale: 0.8,
      transformOrigin: "right top",
    });
  });

  return (
    <div
      className="text-center "
      ref={upperRef}
      id="stagger"
      style={{
        perspective: "1000px",
      }}
    >
      {header.split("<b>").map((part, index) => (
        <h1
          key={index}
          className="font-zentry-regular uppercase text-5xl sm:text-[4rem] md:text-[5rem] "
        >
          {part.split(" ").map((word, index) => (
            <span
              key={index}
              id=""
              className="header-stagger [&:not(:last-child)]:pr-3"
            >
              {word}
            </span>
          ))}
        </h1>
      ))}
    </div>
  );
};

export default WordAfterWrordHeader;
