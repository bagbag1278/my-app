const TrustBar = () => {
  return (
    <section
      aria-label="Featured in"
      className="w-full border-y border-white/[0.06] bg-white/[0.02] backdrop-blur-sm"
    >
      <div className="mx-auto flex min-h-16 max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-4 px-6 py-5 sm:justify-between sm:px-10 lg:px-16">
        <span className="text-xs font-bold tracking-[0.16em] text-white/40 sm:text-sm">
          VOGUE
        </span>
        <span className="text-xs font-bold tracking-[0.16em] text-white/40 sm:text-sm">
          HYPEBEAST
        </span>
        <span className="text-xs font-bold tracking-[0.16em] text-white/40 sm:text-sm">
          HIGHSNOBIETY
        </span>
        <span className="text-xs font-bold tracking-[0.16em] text-white/40 sm:text-sm">
          WWD
        </span>
        <span className="text-xs font-bold tracking-[0.16em] text-white/40 sm:text-sm">
          ELLE
        </span>
        <span className="text-xs font-bold tracking-[0.16em] text-white/40 sm:text-sm">
          GQ
        </span>
      </div>
    </section>
  );
};

export default TrustBar;
