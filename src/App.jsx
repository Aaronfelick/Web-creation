import { motion } from 'framer-motion'
import { ContentShell, GlassPanel, PageCanvas } from './components/layout/GlassLayout'
import Navbar from './components/navigation/Navbar'
import GlassButton from './components/ui/GlassButton'

const featureCards = [
  {
    title: 'Instant Lead Capture',
    description:
      'Deploy multilingual AI flows that qualify visitors and sync high-intent leads directly into your sales pipeline.',
  },
  {
    title: 'Localized UAE Context',
    description:
      'Tailor every reply to GCC audience nuance with support for English, Arabic, and business-specific tone profiles.',
  },
  {
    title: '24/7 Conversion Engine',
    description:
      'Keep your funnel active around the clock with always-on AI agents built to answer, guide, and convert.',
  },
]

function App() {
  return (
    <PageCanvas>
      <Navbar />
      <ContentShell>
        <GlassPanel id="home" className="mb-6 sm:mb-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="mb-5 inline-flex rounded-full border border-white/15 bg-white/[0.06] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-300 backdrop-blur-xl">
              UAE AI Automation Agency
            </p>
            <h1 className="font-display text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              Premium AI Chatbot Experiences for Ambitious Brands
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base text-slate-300 sm:text-lg">
              BizBot builds elite conversational systems that transform website visitors into
              qualified customers with speed, elegance, and measurable ROI.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <GlassButton size="lg">Get Started</GlassButton>
              <GlassButton variant="subtle" size="lg">
                Explore Services
              </GlassButton>
            </div>
          </motion.div>
        </GlassPanel>

        <section
          id="how-it-works"
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          aria-label="How BizBot works"
        >
          {featureCards.map((card) => (
            <GlassPanel key={card.title}>
              <h2 className="font-display text-xl font-semibold text-white">{card.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">{card.description}</p>
            </GlassPanel>
          ))}
        </section>

        <section className="mt-6 grid gap-4 sm:mt-8 lg:grid-cols-3">
          {['pricing', 'about', 'faq'].map((sectionId) => (
            <GlassPanel key={sectionId} id={sectionId}>
              <h2 className="font-display text-lg font-semibold capitalize text-white">
                {sectionId}
              </h2>
              <p className="mt-2 text-sm text-slate-300">
                Production-ready section scaffold prepared for your final content and CMS/API
                integration.
              </p>
              <GlassButton variant="subtle" className="mt-4 w-full">
                Configure {sectionId}
              </GlassButton>
            </GlassPanel>
          ))}
        </section>
      </ContentShell>
    </PageCanvas>
  )
}

export default App
