import React from "react";

const TrustBar = () => {
  return (
    <section className="w-full h-16 border mt-10  border-y border-white/[0.04] bg-white/[0.02] backdrop-blur-sm">
      <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between px-8 lg:px-16 ">
        <span className="text-sm font-bold tracking-[0.16em] text-white/40">
          VOGUE
        </span>
        <span className="text-sm font-bold tracking-[0.16em] text-white/40">
          HYPEBEAST
        </span>
        <span className="text-sm font-bold tracking-[0.16em] text-white/40">
          HIGHSNOBIETY
        </span>
        <span className="text-sm font-bold tracking-[0.16em] text-white/40">
          WWD
        </span>
        <span className="text-sm font-bold tracking-[0.16em] text-white/40">
          ELLE
        </span>
        <span className="text-sm font-bold tracking-[0.16em] text-white/40">
          GQ
        </span>
      </div>
    </section>
  );
};

export default TrustBar;
