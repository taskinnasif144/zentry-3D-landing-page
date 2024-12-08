import React from "react";

type Props = {
  title: string;
  description: string;
  videoURL: string;
  classes?: string;
};

const BentoCard = ({ title, description, videoURL, classes }: Props) => {
  return (
    <div className={`relative size-full ${classes}`}>
      <video
        src={videoURL}
        className="absolute size-full  top-0 left-0 object-cover object-center"
        autoPlay
        loop
        muted
      />

      <div className="absolute top-[6%] left-[5%] z-10">
        <h1 className="text-blue-50 uppercase font-zentry-regular text-5xl md:text-7xl  ">
          {title}
        </h1>
        <p className="max-w-[400px] text-blue-50 opacity-60 mt-6">
          {description}
        </p>
      </div>
    </div>
  );
};

export default BentoCard;
