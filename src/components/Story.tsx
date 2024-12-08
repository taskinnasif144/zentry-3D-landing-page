"use client";

import React, { useRef } from "react";
import WordAfterWordAnimation from "./inner-components/WordAfterWordAnimation";
import WordAfterWrordHeader from "./inner-components/WordAfterWrordHeader";
import Image from "next/image";
import gsap from "gsap";
import Button from "./inner-components/Button";

type Props = {};

const Story = (props: Props) => {
  const imageRef = useRef<HTMLImageElement>(null);
  const handleMouseEnter = ({
    clientX,
    clientY,
    currentTarget,
  }: React.MouseEvent) => {
    const rect = currentTarget.getBoundingClientRect();
    const xPos = clientX - rect.left;
    const yPos = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((yPos - centerY) / centerY) * -20;
    const rotateY = ((xPos - centerX) / centerX) * 20;

    gsap.to("#story-img", {
      rotateX: rotateX,
      rotateY: rotateY,
      duration: 0.3,
      ease: "power1.out",
    });
  };
  const handleMouseLeave = () => {
    const element = imageRef.current;

    if (element) {
      gsap.to("#story-img", {
        rotateX: 0,
        rotateY: 0,
        duration: 0.3,
        ease: "power1.out",
      });
    }
  };
  return (
    <div className="bg-black text-blue-50 pt-24 h-screen w-screen relative">
      <div className="text-center">
        <WordAfterWordAnimation header="The Multiverse Ip world" />
        <WordAfterWrordHeader header="The Story Of <b> A HIdden realm" />
      </div>

      <div id="story-img" className="story-img-mask">
        <Image
          ref={imageRef}
          onMouseMove={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          src={"/img/entrance.webp"}
          alt="story Image"
          height={2500}
          width={2500}
          priority={false}
          className="size-full object-cover object-center"
        />
      </div>

      <div className="max-w-[290px] sm:max-w-[450px] absolute bottom-[3%] right-[10%]">
        <p className="font-circular-web mb-6 opacity-70 text-blue-50 mix-blend-difference text-xs sm:text-sm: md:text-base ">
          The Open IP Universe The story of a hidden realm Where realms
          converge, lies Zentry and the boundless pillar. Discover its secrets
          and shape your fate amidst infinite opportunities.
        </p>
        <Button color="bg-blue-50" title="Discover prologue" />
      </div>
    </div>
  );
};

export default Story;
