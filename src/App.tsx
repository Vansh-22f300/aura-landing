import Benefits from "./components/Benefits";
import Cta from "./components/Cta";
import Faq from "./components/Faq";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import LogoCloud from "./components/LogoCloud";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Showcase from "./components/Showcase";
import Testimonials from "./components/Testimonials";

export default function App() {
  return (
    <div className="relative min-h-screen bg-void text-mist">
      <div aria-hidden className="noise-overlay" />
      {/* skip link for keyboard users */}
      <a
        href="#features"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[90] focus:rounded-full focus:bg-mist focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-void"
      >
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <LogoCloud />
        <Features />
        <Showcase />
        <Benefits />
        <Testimonials />
        <Pricing />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
