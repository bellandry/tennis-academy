"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

function AnimatedBall() {
  const ballRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const ballElem = ballRef.current;

      if (ballElem) {
        const xPos = (clientX / window.innerWidth - 0.5) * 20;
        const yPos = (clientY / window.innerHeight - 0.5) * 20;

        ballElem.style.transform = `translate(${xPos}px, ${yPos}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="absolute top-1/3 right-[10%] w-32 h-32 pointer-events-none hidden md:block">
      <Image
        ref={ballRef}
        src="/ball.png"
        alt="tennis ball"
        width="200"
        height="200"
        className="absolute opacity-80"
      />
    </div>
  );
}

export default AnimatedBall;
