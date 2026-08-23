import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/footer/Footer";

export default function Home() {
  return (
    <div className="page-wrapper">
      <main>
        <HeroSection />
        <HowItWorks />
        <FeaturesSection />
        <div className="bottom-strip" aria-hidden="true" />
      </main>
      <Footer />
    </div>
  );
}
