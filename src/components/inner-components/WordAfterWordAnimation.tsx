"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Span } from "next/dist/trace";
import React, { useRef } from "react";
import { ScrollTrigger } from "gsap/all";

type Props = {
  header: string;
};
gsap.registerPlugin(ScrollTrigger, useGSAP);

const WordAfterWordAnimation = ({ header }: Props) => {
  const headerRef = useRef(null);
  useGSAP(() => {
    const timeLine = gsap.timeline({
      scrollTrigger: {
        trigger: headerRef.current,
        start: "top 80%",
        end: "+=200",
        toggleActions: "play none none reverse",
      },
    });
    timeLine.from("#word-stagger span", {
      opacity: 0,
      duration: 0.2,
      stagger: 0.2,
    });
  });
  return (
    <div id="word-stagger" ref={headerRef} className="py-6">
      {header.split(" ").map((word, index) => (
        <span
          key={index}
          className="uppercase [&:not(:last-child)]:mr-2 font-circular-web font-bold"
        >
          {word}
        </span>
      ))}
    </div>
  );
};

export default WordAfterWordAnimation;
