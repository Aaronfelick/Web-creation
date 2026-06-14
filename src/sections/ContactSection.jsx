import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { Button } from "../components/Button";
import { Container, GlassPanel } from "../components/GlassLayout";

const initialFormState = {
  name: "",
  email: "",
  company: "",
  goal: "",
  budget: "Starter",
};

function normalizeFormData(values) {
  return Object.fromEntries(
    Object.entries(values).map(([key, value]) => [key, typeof value === "string" ? value.trim() : value]),
  );
}

export function ContactSection() {
  const [formData, setFormData] = useState(initialFormState);
  const [submittedData, setSubmittedData] = useState(null);

  const isReadyToSubmit = useMemo(() => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return (
      formData.name.trim().length >= 2 &&
      emailPattern.test(formData.email.trim()) &&
      formData.goal.trim().length >= 8
    );
  }, [formData]);

  function updateField(event) {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!isReadyToSubmit) {
      return;
    }

    setSubmittedData(normalizeFormData(formData));
  }

  return (
    <Container>
      <GlassPanel className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-electric-amber">
            Contact
          </p>
          <h2 className="font-display text-4xl font-bold tracking-[-0.065em] text-white sm:text-5xl">
            Tell us what your AI concierge should handle first.
          </h2>
          <p className="mt-5 text-lg leading-8 text-graphite-200/76">
            Share your business goal and we will map the safest first chatbot flow for your
            customers, sales team, and operations.
          </p>
        </div>

        <div className="rounded-[1.75rem] border border-white/10 bg-canvas-950/44 p-5 backdrop-blur-glass sm:p-6">
          <AnimatePresence mode="wait">
            {submittedData ? (
              <motion.div
                key="success"
                className="grid min-h-[26rem] place-items-center text-center"
                initial={{ opacity: 0, y: 18, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -18, scale: 0.98 }}
                transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
              >
                <div>
                  <div className="mx-auto mb-6 grid h-16 w-16 place-items-center rounded-full border border-electric-orange/35 bg-electric-orange/15 text-2xl text-electric-amber shadow-orange-glow">
                    ✓
                  </div>
                  <h3 className="font-display text-3xl font-bold tracking-[-0.06em] text-white">
                    Request received
                  </h3>
                  <p className="mt-4 leading-7 text-white/70">
                    Thanks, {submittedData.name}. We have captured your {submittedData.budget}{" "}
                    interest and will prepare next-step recommendations for {submittedData.company || "your team"}.
                  </p>
                </div>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                className="grid gap-4"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.3 }}
                onSubmit={handleSubmit}
              >
                <label className="grid gap-2">
                  <span className="text-sm font-semibold text-white/72">Name</span>
                  <input
                    required
                    name="name"
                    value={formData.name}
                    onChange={updateField}
                    className="rounded-3xl border border-white/10 bg-white/[0.06] px-4 py-3 text-white outline-none backdrop-blur-xl transition placeholder:text-white/30 focus:border-electric-orange/45"
                    placeholder="Your name"
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-sm font-semibold text-white/72">Work email</span>
                  <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={updateField}
                    className="rounded-3xl border border-white/10 bg-white/[0.06] px-4 py-3 text-white outline-none backdrop-blur-xl transition placeholder:text-white/30 focus:border-electric-orange/45"
                    placeholder="you@company.ae"
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-sm font-semibold text-white/72">Company</span>
                  <input
                    name="company"
                    value={formData.company}
                    onChange={updateField}
                    className="rounded-3xl border border-white/10 bg-white/[0.06] px-4 py-3 text-white outline-none backdrop-blur-xl transition placeholder:text-white/30 focus:border-electric-orange/45"
                    placeholder="Company name"
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-sm font-semibold text-white/72">Plan interest</span>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={updateField}
                    className="rounded-3xl border border-white/10 bg-canvas-950/80 px-4 py-3 text-white outline-none backdrop-blur-xl transition focus:border-electric-orange/45"
                  >
                    <option>Starter</option>
                    <option>Growth</option>
                    <option>Enterprise</option>
                  </select>
                </label>

                <label className="grid gap-2">
                  <span className="text-sm font-semibold text-white/72">What should BizBot handle?</span>
                  <textarea
                    required
                    name="goal"
                    value={formData.goal}
                    onChange={updateField}
                    rows="4"
                    className="resize-none rounded-3xl border border-white/10 bg-white/[0.06] px-4 py-3 text-white outline-none backdrop-blur-xl transition placeholder:text-white/30 focus:border-electric-orange/45"
                    placeholder="Example: qualify website leads, answer pricing questions, and route Arabic/English chats to our sales team."
                  />
                </label>

                <Button type="submit" className="mt-2 w-full" disabled={!isReadyToSubmit}>
                  Submit chatbot brief
                </Button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </GlassPanel>
    </Container>
  );
}
