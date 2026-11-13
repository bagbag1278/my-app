
import Image from "next/image";
import ButtonsSection from "../hover.dev/ButtonsSection";

const HeroSction = () => {
  return (
    <section
      aria-labelledby="hero-title"
      className="mx-auto grid w-full max-w-7xl items-center gap-14 px-6 pb-24 pt-20 sm:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:px-16 lg:pb-32 lg:pt-28"
    >
      <div className="max-w-2xl">
        <p className="mb-6 text-xs font-bold tracking-[0.28em] text-pink-300">
          NEW SEASON <span className="mx-2 text-white/30">/</span> FW26
        </p>

        <h1
          id="hero-title"
          className="text-6xl font-semibold leading-[0.95] tracking-[-0.06em] text-white sm:text-7xl lg:text-8xl"
        >
          Wear the
          <br />
          <span className="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-pink-300 bg-clip-text text-transparent">
            future.
          </span>
        </h1>

        <p className="mt-7 max-w-md text-base leading-7 text-white/60 sm:text-lg">
          A new uniform for wherever the night takes you. Thoughtful materials,
          unexpected color, made to move.
        </p>

        <ButtonsSection />

        <dl className="mt-12 grid max-w-sm grid-cols-3 gap-5 border-t border-white/10 pt-6">
          <div>
            <dt className="text-2xl font-semibold text-white sm:text-3xl">
              48K
            </dt>
            <dd className="mt-1 text-xs text-white/45">
              pieces in motion
            </dd>
          </div>

          <div>
            <dt className="text-2xl font-semibold text-white sm:text-3xl">
              4.9
            </dt>
            <dd className="mt-1 text-xs text-white/45">
              community rating
            </dd>
          </div>

          <div>
            <dt className="text-2xl font-semibold text-white sm:text-3xl">
              100%
            </dt>
            <dd className="mt-1 text-xs text-white/45">
              recycled shell
            </dd>
          </div>
        </dl>
      </div>

      <div className="relative mx-auto w-full max-w-md">
        <div
          aria-hidden="true"
          className="absolute -inset-8 rounded-full bg-fuchsia-500/15 blur-3xl"
        />

        <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/[0.06] p-3 shadow-[0_30px_100px_rgba(16,4,35,0.55)] backdrop-blur-xl">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
            <Image
              src="/HeroSction/aurora-frame-191-clean.png"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 40vw"
              className="object-cover"
              alt="Aurora iridescent purple puffer jacket from the FW26 collection"
            />

            <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/30 px-3 py-1.5 text-[10px] font-semibold tracking-[0.2em] text-white/80 backdrop-blur-md">
              FW26 / 01
            </span>
          </div>

          <div className="flex items-center justify-between px-3 pb-2 pt-5">
            <div>
              <p className="text-base font-semibold text-white">
                Aurora Jacket
              </p>
              <p className="mt-1 text-xs text-white/50">
                Iridescent shell · Unisex
              </p>
            </div>

            <p className="text-lg font-semibold text-white">$289</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSction;
