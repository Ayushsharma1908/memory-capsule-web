import { HeroSection, FeaturesSection, HowItWorks, Footer } from "@/components";

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
