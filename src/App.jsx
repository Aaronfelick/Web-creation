import { CaseStudyCarousel } from "./components/CaseStudyCarousel";
import { CanvasShell } from "./components/GlassLayout";
import { HeroSection } from "./components/HeroSection";
import { Navbar } from "./components/Navbar";
import { AboutSection } from "./sections/AboutSection";
import { ComparisonTableSection } from "./sections/ComparisonTableSection";
import { ContactSection } from "./sections/ContactSection";
import { FAQAccordionSection } from "./sections/FAQAccordionSection";
import { FeatureGridSection } from "./sections/FeatureGridSection";
import { HowItWorksSection } from "./sections/HowItWorksSection";
import { PricingMatrixSection } from "./sections/PricingMatrixSection";
import { SectionFoldContainer } from "./sections/SectionFoldContainer";

const marketingFolds = [
  { id: "how-it-works", label: "How It Works", component: HowItWorksSection },
  { id: "features", label: "Features", component: FeatureGridSection },
  { id: "case-studies", label: "Case Studies", component: CaseStudyCarousel, fullBleed: true },
  { id: "pricing", label: "Pricing", component: PricingMatrixSection },
  { id: "comparison", label: "Comparison", component: ComparisonTableSection },
  { id: "about", label: "About", component: AboutSection },
  { id: "faq", label: "FAQ", component: FAQAccordionSection },
  { id: "contact", label: "Contact", component: ContactSection, className: "pb-24" },
];

export default function App() {
  return (
    <CanvasShell>
      <Navbar />

      <main id="home">
        <HeroSection />
        <SectionFoldContainer folds={marketingFolds} />
      </main>
    </CanvasShell>
  );
}
