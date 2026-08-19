import React from "react";
import Image from "next/image";
import ButtonsSection from "../hover.dev/ButtonsSection";

const HeroSction = () => {
  return (
    <div className="w-full  flex justify-center ">
      <div className="h-[534px]  mt-[236px] flex justify-between ">
        <div className="w-[480px] h-[521px]   ">
          <p className="text-sm font-bold text-left mb-5 text-pink-400">
            NEW SEASON — FW26
          </p>
          <p className="text-8xl font-bold text-left text-white">Wear the</p>
          <p className="text-8xl font-bold text-left">
            <span className="text-8xl font-bold text-left text-black">
              future
            </span>
            <span className="text-8xl font-bold text-left text-white">.</span>
          </p>
      <ButtonsSection />

          <div className="w-80 flex justify-between  mt-10">
            <div className="flex-col gap-3">
              <p className="text-3xl font-bold text-left text-white">48K</p>
              <p className="text-[13px] text-left text-white/50">pieces sold</p>
            </div>
            <div className="flex-col gap-3">
              <p className="text-3xl font-bold text-left text-white">4.9</p>
              <p className="text-[13px] text-left text-white/50">avg. rating</p>
            </div>
            
            <div className="flex-col gap-3">
              <p className="text-3xl font-bold text-left text-white">100%</p>
              <p className="text-[13px] text-left text-white/50">recycled</p>
            </div>
          </div>
        </div>
        <div className="w-95 h-130 rounded-3xl  flex-col border-white/[0.12] bg-white/[0.06] p-3 shadow-[0_24px_80px_rgba(16,4,35,0.45)] backdrop-blur-xl">
          <div className="w-90 h-100 rounded-3xl  ">
            <Image
              src="/HeroSction/aurora-frame-191-clean.png"
              width={352}
              height={400}
              alt="Picture of the author"
            />
          </div>
          <div className="w-89 h-19 rounded-3xl  mt-5 border-white/[0.12] bg-white/[0.06] p-3 shadow-[0_24px_80px_rgba(16,4,35,0.45)] backdrop-blur-xl">
            <p className="text-2xl   font-bold text-right text-white">$289</p>
            <div className="relative bottom-8">
              <p className="text-lg font-bold text-left text-white">
                Aurora Jacket
              </p>
              <p className="text-[13px] text-left text-white/[0.55]">
                Iridescent shell · Unisex
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSction;
