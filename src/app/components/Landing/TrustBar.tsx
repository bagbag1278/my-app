import React from "react";

const TrustBar = () => {
  return (
    <section className="w-full h-16 border mt-10  border-y border-white/[0.04] bg-white/[0.02] backdrop-blur-sm ">
      <div className="mx-auto flex h-full max-w-[1024px] items-center justify-between gap-5 p-3 lg:px-16 cursor-pointer">
        <span className="text-sm font-bold tracking-[0.16em] text-white/40">
          VOGUE
        </span>
        <span className="text-sm font-bold tracking-[0.16em] text-white/40 max-[821]:hidden">
          HYPEBEAST
        </span>
        <span className="text-sm font-bold tracking-[0.16em] text-white/40 max-[821]:hidden">
          HIGHSNOBIETY
        </span>
        <span className="text-sm font-bold tracking-[0.16em] text-white/40 ">
          WWD
        </span>
        <span className="text-sm font-bold tracking-[0.16em] text-white/40">
          ELLE
        </span>
        <span className="text-sm font-bold tracking-[0.16em] text-white/40 ">
          GQ
        </span>
      </div>
    </section>
  );
};

export default TrustBar;
