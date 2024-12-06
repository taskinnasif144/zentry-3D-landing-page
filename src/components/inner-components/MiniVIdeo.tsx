import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
type Props = {
  children: React.ReactNode;
};

const MiniVideo = ({ children }: Props) => {
  const [isHover, setIsHover] = useState(false);
  const parentRef = useRef(null);
  const childRef = useRef(null);

  const handleMouseMove = ({
    clientX,
    clientY,
    currentTarget,
  }: React.MouseEvent) => {
    const rect = currentTarget.getBoundingClientRect();
    const offsetX = clientX - (rect.left + rect.width / 2);
    const offsetY = clientY - (rect.top + rect.height / 2);

    if (isHover) {
      gsap.to(parentRef.current, {
        x: offsetX,
        y: offsetY,
        rotateX: offsetX / 2,
        rotateY: -offsetY / 2,
        transformPerspective: 500,
        duration: 1,
        ease: "power1.out",
      });
      gsap.to(childRef.current, {
        x: -offsetX,
        y: -offsetY,
        duration: 1,
        ease: "power1.out",
      });
    }
  };

  useEffect(() => {
    if (!isHover) {
      gsap.to(parentRef.current, {
        x: 0,
        y: 0,
        rotateX: 0,
        rotateY: 0,
        duration: 1,
        ease: "power1.out",
      });
      gsap.to(childRef.current, {
        x: 0,
        y: 0,
        duration: 1,
        ease: "power1.out",
      });
    }
  }, [isHover]);

  return (
    <section
      ref={parentRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className=""
    >
      <div
        style={{
          transformStyle: "preserve-3d",
        }}
        ref={childRef}
        className="origin-center"
      >
        {children}
      </div>
    </section>
  );
};

export default MiniVideo;
