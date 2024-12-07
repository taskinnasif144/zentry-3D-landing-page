"use client";

import React, { useRef, useState } from "react";
import WordAfterWordAnimation from "./inner-components/WordAfterWordAnimation";
import WordAfterWrordHeader from "./inner-components/WordAfterWrordHeader";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type Props = {};

const WelcomeZentry = (props: Props) => {
  const [rotate, setRotate] = useState(true);
  const parentRef = useRef(null);
  const imageRef = useRef(null);
  const stoneRef = useRef(null);

  const handleMouseMove = ({
    clientX,
    clientY,
    currentTarget,
  }: React.MouseEvent) => {
    const { width, height } = currentTarget.getBoundingClientRect();
    const offsetX = (clientX - width / 2) * 0.05;
    const offsetY = (clientY - height / 2) * 0.04;

    console.log(offsetX);
    if (rotate) {
      gsap.to(imageRef.current, {
        rotateY: offsetX,
        rotateX: offsetY,
      });
      gsap.to(stoneRef.current, {
        x: offsetX * 0.3,
        y: offsetY * 0.3,
      });
    }
  };

  useGSAP(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: parentRef.current,
        start: "35% top",
        end: "+=1500",
        scrub: 1,
        pin: true,

        onEnter: () => setRotate(false),
        onLeaveBack: () => setRotate(true),
      },
    });
    timeline.to(imageRef.current, {
      width: "60vw",
      height: "100vh",
      rotateX: 0,
      rotateY: 0,
      borderRadius: 0,
      clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",
    });
    timeline.to(imageRef.current, {
      width: "100vw",
      height: "110vh",
      rotateX: 0,
      rotateY: 0,
    });
  });

  return (
    <div
      ref={parentRef}
      onMouseMove={handleMouseMove}
      className="relative  h-screen w-screen flex flex-col items-center pt-16"
    >
      <WordAfterWordAnimation header="Welcome to zentry" />
      <WordAfterWrordHeader header="Discover the world's <b> largest shared adventure" />

      <div
        ref={imageRef}
        className="welcome-mask  h-[500px] w-[300px]  absolute top-[35%] left-1/2 -translate-x-1/2"
      >
        <Image
          src={"/img/about.webp"}
          alt="about image"
          height={2500}
          width={2500}
          className="w-full h-full object-cover object-center  border-black"
        />
      </div>
      <Image
        ref={stoneRef}
        src={"/img/stones.webp"}
        alt="about image"
        height={1500}
        width={1500}
        className=""
      />
      <div className="absolute bottom-0 w-[600px] text-center -z-10">
        <p className="font-robert-medium">
          The Game of Games begins—your life, now an epic MMORPG
        </p>
        <p className="text-gray-500">
          Zentry unites every player from countless games and platforms, both
          digital and physical, into a unified Play Economy
        </p>
      </div>
    </div>
  );
};

export default WelcomeZentry;
