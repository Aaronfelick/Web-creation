import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import ButtonShowcase from "@/components/sections/ButtonShowcase";
import CallToAction from "@/components/sections/CallToAction";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <ButtonShowcase />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
