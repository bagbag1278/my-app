"use client";

import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";

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
      className="mt-8 flex flex-wrap gap-3"
    >
      <a
        href="#collection"
        style={{
          transform: "translateZ(30px)",
        }}
        className="inline-flex h-13 min-w-40 items-center justify-center rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] px-6 text-sm font-semibold text-white shadow-lg shadow-fuchsia-950/30 transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-fuchsia-300"
      >
        Explore the drop
      </a>
      <a
        href="#story"
        style={{
          transform: "translateZ(20px)",
        }}
        className="inline-flex h-13 min-w-40 items-center justify-center rounded-full border border-white/25 px-6 text-sm font-semibold text-white transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
      >
        Discover the story
      </a>
    </motion.div>
  );
};

export default ButtonsSection;