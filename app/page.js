import Hero from "@/components/Hero"
import Navigation from "@/components/Navbar";
import About from "@/components/About";
import GetStarted from "@/components/GetStarted";
import WhatsNew from "@/components/WhatsNew";
import Roadmap from "@/components/Roadmap";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-hidden px-4">
      <Navigation />
      <Hero />

      <div className="relative">
        <About />
        <div className="gradient-03 z-0"></div>
      </div>

      <div className="relative">
        <GetStarted />
        <div className="gradient-04 z-0"></div>
        <WhatsNew />
      </div>

      <div className="relative">
        <Roadmap />
        <div className="gradient-03 z-0"></div>
      </div>
      <Footer />
    </main>
  );
}
