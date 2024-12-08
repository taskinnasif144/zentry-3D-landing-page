"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import React, { useEffect, useRef, useState } from "react";
import Button from "./inner-components/Button";
import NearMeIcon from "@mui/icons-material/NearMe";

import { ScrollTrigger } from "gsap/all";
import MiniVideo from "./inner-components/MiniVIdeo";
import Loader from "./inner-components/Loader";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type Props = {};

const Hero = (props: Props) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [loadingState, setLoadingState] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);

  const handleLoadedVideo = () => {
    console.log("loaded video");

    setLoadedVideos((prev) => prev + 1);
  };

  useEffect(() => {
    if (loadedVideos >= 3) {
      setLoadingState(false);
    }
    console.log("loaded videos: ", loadedVideos);
  }, [loadedVideos]);

  const nextVideo = () => {
    setCurrentIndex((prev) => (prev % 4) + 1);
  };

  const videoRef = useRef(null);

  useGSAP(
    () => {
      gsap.set("#next_video", { visibility: "visible" });
      gsap.to("#next_video", {
        transformOrigin: "center center",
        width: "100%",
        height: "100%",
        duration: 1,
        ease: "power1.out",
      });
      gsap.from("#mini_video", {
        scale: 0,
        transformOrigin: "center center",
        duration: 2,
        ease: "power1.out",
      });
    },
    { dependencies: [currentIndex], revertOnUpdate: true }
  );

  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
      borderRadius: "0% 0% 40% 10%",
    });
    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0, 100% 0, 100% 100%, 0 100%)",
      borderRadius: "0% 0% 0% 0%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: 1,
      },
    });
  });

  return (
    <div className="h-screen w-screen relative overflow-x-hidden">
      <div
        id="video-frame"
        className="relative z-50 h-screen w-screen overflow-hidden rounded-lg bg-blue-75"
      >
        <div>
          <div className="absolute-center size-80 z-50 cursor-pointer overflow-hidden rounded-xl animate-[hero-mini_500ms_ease-in-out_infinite_alternate]">
            <MiniVideo>
              <div className="show_on_hover  transition-all duration-500 ">
                <video
                  id="mini_video"
                  ref={videoRef}
                  onClick={nextVideo}
                  className="size-80 object-cover object-center "
                  src={`videos/hero-${(currentIndex % 4) + 1}.mp4`}
                  onLoadedData={handleLoadedVideo}
                />
              </div>
            </MiniVideo>
          </div>
          <video
            ref={videoRef}
            id="next_video"
            src={`videos/hero-${currentIndex}.mp4`}
            autoPlay
            loop
            muted
            className="absolute-center object-cover invisible object-center size-96 z-20"
            onLoadedData={handleLoadedVideo}
          />
          <video
            src={`videos/hero-${currentIndex}.mp4`}
            autoPlay
            loop
            muted
            className="absolute top-0 left-0 object-cover object-center size-full"
            onLoadedData={handleLoadedVideo}
          />
        </div>

        <div className="absolute z-50 top-[20%] left-5">
          <h1 className="hero_head_styles text-white ">Redifine</h1>
          <p className="mb-5 max-w-64 font-robert-regular text-blue-100">
            Enter the Metagame Layer <br /> Unleash the Play Economy
          </p>
          <Button
            color="bg-yellow-300"
            title="Watch Trailer"
            RIghtIcon={NearMeIcon}
          />
        </div>
        <h1 className="absolute z-50 bottom-5 right-5 hero_head_styles text-white ">
          Gaming
        </h1>
      </div>
      <h1 className="absolute z-40 bottom-5 right-5 hero_head_styles text-black ">
        Gaming
      </h1>
    </div>
  );
};

export default Hero;
