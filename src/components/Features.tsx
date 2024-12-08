import React from "react";
import BentoCard from "./inner-components/BentoCard";
import { NearMe } from "@mui/icons-material";
import BentoTilt from "./inner-components/BentoTilt";

type Props = {};

const Features = (props: Props) => {
  return (
    <div className=" bg-black p-20 md:p-30 lg:p-40 text-white ">
      <div className="max-w-[500px] mb-20">
        <h2 className="font-robert-medium text-xl">
          Dive into the 'Game of Games' Universe
        </h2>
        <p className="font-robert-regular text-gray-400 text-xl">
          Immerse yourself in a rich and ever-expanding ecosystem where a
          vibrant array of products converge into an interconnected universe.
        </p>
      </div>

      <div className="relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
        <BentoTilt>
          <BentoCard
            description="A cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure."
            title="Radiant"
            videoURL="/videos/feature-1.mp4"
          />
        </BentoTilt>
      </div>
      <div className="grid h-[135vh] w-full grid-cols-2 grid-rows-3 gap-7">
        <div className="col-span-1 row-span-1 md:row-span-2">
          <BentoTilt>
            <BentoCard
              videoURL="videos/feature-2.mp4"
              description="An anime and gaming-inspired NFT collection - the IP primed for expansion."
              title="Zigma"
            />
          </BentoTilt>
        </div>
        <div className="col-span-1 row-span-1 ">
          <BentoTilt>
            <BentoCard
              videoURL="videos/feature-3.mp4"
              description="A gamified social hub, adding a new dimension of play to social interaction for Web3 communities."
              title="Nexus"
            />
          </BentoTilt>
        </div>
        <div className="col-span-1 row-span-1 ">
          <BentoTilt>
            <BentoCard
              videoURL="videos/feature-4.mp4"
              description="A cross-world AI Agent - elevating your gameplay to be more fun and productive."
              title="Azul"
            />
          </BentoTilt>
        </div>
        <BentoTilt>
          <div className="flex size-full flex-col justify-between bg-violet-300 p-5 pb-20 pr-20">
            <h1 className="text-8xl font-zentry-regular  text-black">
              More Coming Soon
            </h1>

            <NearMe className="m-5 scale-[5] self-end" />
          </div>
        </BentoTilt>
        <BentoTilt>
          <div>
            <video
              src="videos/feature-5.mp4"
              loop
              muted
              autoPlay
              className="size-full object-cover object-center"
            />
          </div>
        </BentoTilt>
      </div>
    </div>
  );
};

export default Features;
