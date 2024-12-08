import React from "react";
import ReactDOM from "react-dom";

type Props = {};

const Loader = (props: Props) => {
  return ReactDOM.createPortal(
    <div className="flex items-center justify-center h-screen w-screen overflow-hidden bg-violet-50">
      <div className="three-body">
        <div className="three-body__dot"></div>
        <div className="three-body__dot"></div>
        <div className="three-body__dot"></div>
      </div>
    </div>,
    document.body
  );
};

export default Loader;
