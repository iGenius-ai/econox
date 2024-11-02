import Hero from "@/components/Hero"
import StatsDisplay from "@/components/StatsDisplay";
import WhatsNew from "@/components/WhatsNew";
import Roadmap from "@/components/Roadmap";
import Footer from "@/components/Footer";
import FeatureCardsGrid from "@/components/FeatureCardsGrid";
import TokenomicsChart from "@/components/Tokenomics";

export const metadata = {
  title: "Econox Coin - Home",
  description: "Home website of the Econox platform",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function Home() {
  return (
    <main>
      <div className="overflow-hidden px-2">
        <Hero />

        <div className="relative">
          <StatsDisplay />
          <div className="z-0"></div>
        </div>

        <div id="roadmap" className="relative">
          <Roadmap />
          <div className="z-0"></div>
          <TokenomicsChart />
        </div>

        <div id="features" className="relative">
          <FeatureCardsGrid />
          <div id="faq" className="z-0"></div>
          <WhatsNew />
        </div>

      </div>
      <Footer/>
    </main>
  );
}