import React from "react";
import HeroSction from "../../components/Landing/HeroSction";
import AdvancedScrollAnimation from "../../components/Animation/AdvancedScrollAnimation";
import TrustBar from "../../components/Landing/TrustBar";

const Landing = () => {
  return (
    <div
      className="h-[2820px] w-full inset-0
    bg-[radial-gradient(circle_at_20%_8%,rgba(115,46,255,0.58),transparent_34%),radial-gradient(circle_at_88%_22%,rgba(221,35,127,0.38),transparent_40%),radial-gradient(circle_at_62%_48%,rgba(119,37,188,0.18),transparent_42%),linear-gradient(180deg,#180828_0%,#10071e_48%,#090511_100%)]"
    >
      <AdvancedScrollAnimation type="fade" delay={0.1}>
        <HeroSction />
      </AdvancedScrollAnimation>
      <AdvancedScrollAnimation type="slide-up" delay={0.1}>
        <TrustBar />
      </AdvancedScrollAnimation>
    </div>
  );
};

export default Landing;
