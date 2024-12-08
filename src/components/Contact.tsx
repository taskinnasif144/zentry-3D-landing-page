"use client";

import React, { useRef } from "react";
import WordAfterWordAnimation from "./inner-components/WordAfterWordAnimation";
import WordAfterWrordHeader from "./inner-components/WordAfterWrordHeader";
import Button from "./inner-components/Button";
import Image from "next/image";
import gsap from "gsap";

type Props = {};

const Contact = (props: Props) => {
  const swordImageRef = useRef<HTMLImageElement>(null);
  const fireImageRef = useRef<HTMLImageElement>(null);
  const itemImageRef = useRef<HTMLImageElement>(null);
  return (
    <div className="my-36 m-12 xl:my-12 rounded-lg bg-black py-24 relative h-[80vh] xl:h-auto flex items-center justify-center overflow-hidden">
      <div className="text-blue-50 text-center relative">
        <WordAfterWordAnimation header="Join zentry" />
        <WordAfterWrordHeader header="Let's build the <b> NEW era of <b> Gaming TOgether" />
        <div className="h-12"></div>
        <Button color="bg-blue-50" title="Contact us" />
      </div>
      <Image
        ref={swordImageRef}
        src={"/img/swordman.webp"}
        alt="contact image"
        width={500}
        height={500}
        className="contact-mask-1  object-center object-cover h-[70%] w-[350px]"
      />
      <Image
        ref={fireImageRef}
        src={"/img/contact-1.webp"}
        alt="contact image"
        width={500}
        height={500}
        className="contact-mask-2 object-center object-cover h-[200px] w-[300px]"
      />
      <Image
        ref={itemImageRef}
        src={"/img/contact-2.webp"}
        alt="contact image"
        width={500}
        height={500}
        className="contact-mask-3 object-center object-cover h-[200px] w-[300px]"
      />
    </div>
  );
};

export default Contact;
