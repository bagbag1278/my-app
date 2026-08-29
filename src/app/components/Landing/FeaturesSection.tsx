import React from "react";

const FeaturesSection = () => {
  return (
    <div>
      <div className="w-full flex justify-center mt-30 ">
        <div className=" flex-col justify-center h-60  mr-105 max-[1024]:mr-60  max-[660]:-mr-15  max-[1024]:top-10 relative ">
          <p className="  text-sm font-bold text-left text-pink-400">
            WHY HELIX
          </p>
          <p className=" text-[56px]  max-[1024]:text-[40px] font-bold text-left text-white">
            Engineered for
          </p>
          <p className="w-[456px]  text-[56px] max-[1024]:text-[40px] font-bold text-left">
            <span className="w-[456px] text-[56px] max-[1024]:text-[40px] font-bold text-left text-black">
              motion
            </span>
            <span className="w-[456px] text-[56px] max-[1024]:text-[40px] font-bold text-left text-white">
              {" "}
              &amp; city life
            </span>
          </p>
        </div>
      </div>
      <div className="w-full h-130 flex flex-wrap mx-auto max-w-[1040px] justify-center gap-5  ">
        <div className="w-80 h-63 flex flex-col gap-5 p-5 inset-0 overflow-hidden rounded-[24px] border border-white/[0.10] bg-white/[0.055] backdrop-blur-xl shadow-[0_20px_60px_rgba(8,3,20,0.25)]ّ">
          <div
            className="w-15 h-15 rounded-2xl  items-start gap-4 gradient(145deg,rgba(255,255,255,0.075)_0%,rgba(255,255,255,0.035)_48%,rgba(22,8,45,0.18)_100%)] backdrop-blur-xl">
            <p className="text-[40px]  text-center text-violet-500">◈</p>
          </div>
          <p className="text-[22px] font-bold text-left text-white">
            Adaptive weave 
          </p>
          <p className="text-sm font-bold text-left text-violet-500 mt-16">
            Learn more{" "}
          </p>
        </div>
        <div className="w-80 h-63 inset-0 overflow-hidden rounded-[24px] border border-white/[0.10] bg-white/[0.055] backdrop-blur-xl shadow-[0_20px_60px_rgba(8,3,20,0.25)]ّ"></div>

      </div>
    </div>
  );
};

export default FeaturesSection;
