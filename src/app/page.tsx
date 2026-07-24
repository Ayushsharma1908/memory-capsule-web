import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";
import TrustStrip from "./components/TrustStrip";

export default function Home() {
  return (
    <div className="page-wrapper">
      <main>
        <HeroSection />
        <HowItWorks />
        {/* Bottom black strip matching wireframe */}
        <div className="bottom-strip" aria-hidden="true" />
      </main>
      <TrustStrip />
    </div>
  );
}
