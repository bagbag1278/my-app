"use client";

import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion"; 
import { FiMousePointer } from "react-icons/fi";

const ButtonsSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  const ROTATION_RANGE = 12.5; 
  const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="w-90 mt-30 flex justify-center gap-3"
    >
      <div
        style={{
          transform: "translateZ(30px)",
        }}
        className="w-[170px] h-[56px] bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] rounded-4xl cursor-pointer shadow-lg hover:shadow-xl transition-shadow"
      >
        <p className="text-base font-bold text-center text-white mt-3">
          Explore drop
        </p>
      </div>
      <div
        style={{
          transform: "translateZ(20px)",
        }}
        className="w-[170px] h-[56px] rounded-4xl border border-white/30 backdrop-blur-sm cursor-pointer hover:bg-white/10 transition-colors"
      >
        <p className="text-base font-bold text-center text-white mt-3">
          ▶ Watch film
        </p>
      </div>
    </motion.div>
  );
};

export default ButtonsSection;