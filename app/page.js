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
        </div>

        <div id="roadmap" className="relative">
          <Roadmap />
        </div>

        <div className="relative">
          <TokenomicsChart />
        </div>

        <div id="features" className="relative">
          <FeatureCardsGrid />
        </div>

        <div id="faq" className="relative">
          <WhatsNew />
        </div>

      </div>
      <Footer/>
    </main>
  );
}