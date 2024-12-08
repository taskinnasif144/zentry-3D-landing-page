import React from "react";

type Props = {
  color: string;
  title: string;
  RIghtIcon?: React.ElementType;
  LeftIcon?: React.ElementType;
};

const Button = ({ title, color, RIghtIcon, LeftIcon }: Props) => {
  return (
    <button
      className={` px-5 py-2 ${color} rounded-s-full rounded-e-full group  overflow-hidden hover:rounded-lg hover:skew-x-6 transition-all `}
    >
      <span className="relative">
        <div className="absolute translate-y-[170%] skew-y-12 group-hover:translate-y-0 group-hover:skew-y-0 transition-all duration-300 ">
          <span className="flex gap-2">
            <span>{RIghtIcon && <RIghtIcon />}</span>
            <span className="text-black"> {title}</span>
            <span>{LeftIcon && <LeftIcon />}</span>
          </span>
        </div>
        <div className="translate-y-0 skew-y-0 group-hover:translate-y-[-170%] group-hover:skew-y-12 transition-all duration-300">
          <span className="flex gap-2">
            <span> {RIghtIcon && <RIghtIcon />}</span>
            <span className="text-black"> {title}</span>
            <span>{LeftIcon && <LeftIcon />}</span>
          </span>
        </div>
      </span>
    </button>
  );
};

export default Button;
