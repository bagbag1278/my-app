import React from "react";
import HeroSction from "../../components/Landing/HeroSction";
import AdvancedScrollAnimation from "../../components/Animation/AdvancedScrollAnimation";
import TrustBar from "../../components/Landing/TrustBar";

const Landing = () => {
  return (
    <div
      className="relative min-h-screen w-full overflow-hidden bg-[radial-gradient(ellipse_at_18%_8%,rgba(115,46,255,0.38),transparent_32%),radial-gradient(ellipse_at_90%_18%,rgba(221,35,127,0.24),transparent_36%),linear-gradient(180deg,#180828_0%,#10071e_48%,#090511_100%)]"
    >
      <header className="relative z-10 border-b border-white/[0.08]">
        <nav
          aria-label="Main navigation"
          className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-10 lg:px-16"
        >
          <a
            href="#top"
            className="text-xl font-bold tracking-[0.2em] text-white"
          >
            AURA<span className="text-fuchsia-300">.</span>
          </a>
          <div className="hidden items-center gap-9 text-sm text-white/65 md:flex">
            <a className="transition hover:text-white" href="#collection">
              The drop
            </a>
            <a className="transition hover:text-white" href="#story">
              Our approach
            </a>
            <a className="transition hover:text-white" href="#impact">
              Impact
            </a>
          </div>
          <a
            href="#collection"
            className="rounded-full border border-white/20 px-5 py-2.5 text-xs font-semibold tracking-wide text-white transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Explore FW26
          </a>
        </nav>
      </header>

      <AdvancedScrollAnimation type="fade" delay={0.1}>
        <div id="top">
          <HeroSction />
        </div>
      </AdvancedScrollAnimation>
      <AdvancedScrollAnimation type="slide-up" delay={0.1}>
        <TrustBar />
      </AdvancedScrollAnimation>

      <AdvancedScrollAnimation type="slide-up">
        <section
          id="collection"
          aria-labelledby="collection-title"
          className="mx-auto max-w-7xl scroll-mt-10 px-6 py-24 sm:px-10 lg:px-16 lg:py-32"
        >
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold tracking-[0.24em] text-fuchsia-300">
                THE FW26 DROP
              </p>
              <h2
                id="collection-title"
                className="mt-5 max-w-xl text-4xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-5xl"
              >
                One layer.
                <br />
                <span className="text-white/45">A different kind of energy.</span>
              </h2>
            </div>
            <p className="max-w-lg text-base leading-7 text-white/55 lg:justify-self-end">
              Meet the Aurora Jacket: an iridescent, recycled shell with a
              silhouette made for wherever the season takes you.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            <a
              href="#top"
              className="group relative min-h-72 overflow-hidden rounded-3xl border border-white/10 bg-[radial-gradient(ellipse_at_75%_15%,rgba(236,72,153,0.3),transparent_42%),linear-gradient(145deg,rgba(139,92,246,0.22),rgba(255,255,255,0.035))] p-7 transition hover:border-fuchsia-300/40 md:col-span-2 md:min-h-80 md:p-10"
            >
              <span className="text-xs font-medium tracking-[0.2em] text-white/55">
                01 — THE SIGNATURE PIECE
              </span>
              <div className="absolute bottom-8 left-7 right-7 flex items-end justify-between md:bottom-10 md:left-10 md:right-10">
                <div>
                  <p className="text-2xl font-semibold text-white sm:text-3xl">
                    Aurora Jacket
                  </p>
                  <p className="mt-2 text-sm text-white/55">
                    Iridescent shell · Unisex
                  </p>
                </div>
                <span className="grid size-12 place-items-center rounded-full border border-white/25 text-xl text-white transition group-hover:bg-white group-hover:text-[#180828]">
                  ↗
                </span>
              </div>
              <div
                aria-hidden="true"
                className="absolute right-10 top-8 size-40 rounded-full bg-fuchsia-400/10 blur-3xl"
              />
            </a>
            <div className="flex min-h-72 flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.035] p-7 md:min-h-80 md:p-8">
              <p className="text-xs font-medium tracking-[0.2em] text-white/45">
                BUILT WITH INTENTION
              </p>
              <div>
                <p className="text-5xl font-semibold tracking-[-0.05em] text-white">
                  100<span className="text-fuchsia-300">%</span>
                </p>
                <p className="mt-3 text-sm leading-6 text-white/55">
                  Recycled shell. Considered from the first thread to the final
                  layer.
                </p>
              </div>
              <a
                href="#impact"
                className="w-fit text-sm font-semibold text-white transition hover:text-fuchsia-200"
              >
                Our materials <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </section>
      </AdvancedScrollAnimation>

      <AdvancedScrollAnimation type="slide-up">
        <section
          id="story"
          aria-labelledby="story-title"
          className="border-y border-white/[0.08] bg-white/[0.025]"
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 sm:px-10 lg:grid-cols-2 lg:items-center lg:px-16 lg:py-32">
            <div>
              <p className="text-xs font-semibold tracking-[0.24em] text-fuchsia-300">
                CLOTHES FOR WHAT’S NEXT
              </p>
              <h2
                id="story-title"
                className="mt-5 max-w-xl text-4xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-5xl"
              >
                Made to move.
                <br />
                <span className="text-white/45">Designed to stay with you.</span>
              </h2>
              <p className="mt-6 max-w-lg text-base leading-7 text-white/55">
                We believe the best pieces earn their place in your wardrobe.
                Aurora brings together a bold finish and an easy, unisex fit so
                you can make it your own, season after season.
              </p>
              <a
                href="#impact"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-fuchsia-200"
              >
                Get to know AURA <span aria-hidden="true">→</span>
              </a>
            </div>

            <div className="relative flex min-h-80 items-end overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(ellipse_at_50%_20%,rgba(168,85,247,0.32),transparent_45%),linear-gradient(160deg,#28143d,#120a1d_70%)] p-8 sm:min-h-96 sm:p-10">
              <div
                aria-hidden="true"
                className="absolute -right-12 -top-20 size-72 rounded-full border border-white/10"
              />
              <div
                aria-hidden="true"
                className="absolute -right-2 -top-10 size-52 rounded-full border border-white/10"
              />
              <div className="relative max-w-sm">
                <p className="text-xs font-semibold tracking-[0.2em] text-fuchsia-200">
                  LESS, BUT BETTER
                </p>
                <p className="mt-4 text-2xl font-medium leading-snug text-white sm:text-3xl">
                  The future looks better when we make it with care.
                </p>
              </div>
            </div>
          </div>
        </section>
      </AdvancedScrollAnimation>

      <AdvancedScrollAnimation type="slide-up">
        <section
          id="impact"
          aria-labelledby="impact-title"
          className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-16 lg:py-32"
        >
          <div className="rounded-[2rem] border border-white/10 bg-[radial-gradient(ellipse_at_90%_0%,rgba(236,72,153,0.16),transparent_38%),linear-gradient(135deg,rgba(139,92,246,0.12),rgba(255,255,255,0.025))] p-8 sm:p-12 lg:flex lg:items-end lg:justify-between lg:p-16">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold tracking-[0.24em] text-fuchsia-300">
                A LIGHTER FOOTPRINT
              </p>
              <h2
                id="impact-title"
                className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl"
              >
                Keep the good in motion.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-white/55">
                Our first step is the Aurora shell, made entirely from recycled
                materials. We’re here to make pieces that feel good to wear and
                better to keep.
              </p>
            </div>
            <a
              href="#top"
              className="mt-8 inline-flex h-12 shrink-0 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-[#180828] transition hover:bg-fuchsia-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white lg:ml-8"
            >
              Meet the Aurora Jacket
            </a>
          </div>
        </section>
      </AdvancedScrollAnimation>

      <footer className="border-t border-white/[0.08]">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-8 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-16">
          <a
            href="#top"
            className="w-fit text-sm font-bold tracking-[0.2em] text-white"
          >
            AURA<span className="text-fuchsia-300">.</span>
          </a>
          <p>Made for the in-between. © 2026 AURA.</p>
          <a className="w-fit transition hover:text-white" href="#top">
            Back to top ↑
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
