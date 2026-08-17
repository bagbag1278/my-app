import React from "react";

const HeroSction = () => {
  return (
    <div className="w-full  flex justify-center ">
      <div className="w-[940px] h-[534px] border mt-[236px] flex justify-between ">
        <div className="w-[480px] h-[521px] border ">
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
          <div className="w-100 h-50 border mt-20 flex justify-between gap-5">
            <div className="w-[170px] h-[56px] bg-[#EC4899] rounded-4xl">
              <p className="text-base font-bold text-center text-white">Explore drop</p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSction;
