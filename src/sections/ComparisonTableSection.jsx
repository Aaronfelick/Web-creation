import { Container, GlassPanel, SectionHeading } from "../components/GlassLayout";
import { comparisonRows } from "../content/marketing";

export function ComparisonTableSection() {
  return (
    <Container>
      <SectionHeading eyebrow="Comparison" title="BizBot versus a generic website chatbot.">
        See where a business-trained AI concierge creates a stronger customer and sales
        experience.
      </SectionHeading>

      <GlassPanel className="mt-12 hidden overflow-hidden p-0 md:block">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-white/10 bg-white/[0.045]">
              <th className="px-6 py-5 text-xs font-bold uppercase tracking-[0.22em] text-white/48">
                Capability
              </th>
              <th className="px-6 py-5 text-xs font-bold uppercase tracking-[0.22em] text-electric-amber">
                BizBot
              </th>
              <th className="px-6 py-5 text-xs font-bold uppercase tracking-[0.22em] text-white/48">
                Generic chatbot
              </th>
            </tr>
          </thead>
          <tbody>
            {comparisonRows.map((row) => (
              <tr key={row.feature} className="border-b border-white/10 last:border-b-0">
                <th className="px-6 py-5 font-display text-xl font-bold tracking-[-0.045em] text-white">
                  {row.feature}
                </th>
                <td className="px-6 py-5 leading-7 text-white/76">{row.bizbot}</td>
                <td className="px-6 py-5 leading-7 text-white/45">{row.generic}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </GlassPanel>

      <div className="mt-10 grid gap-4 md:hidden">
        {comparisonRows.map((row) => (
          <GlassPanel key={row.feature} className="p-5">
            <h3 className="font-display text-2xl font-bold tracking-[-0.055em] text-white">
              {row.feature}
            </h3>
            <div className="mt-5 grid gap-3">
              <div className="rounded-3xl border border-electric-orange/25 bg-electric-orange/10 p-4">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-electric-amber">
                  BizBot
                </p>
                <p className="mt-2 leading-7 text-white/76">{row.bizbot}</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/[0.045] p-4">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/42">
                  Generic chatbot
                </p>
                <p className="mt-2 leading-7 text-white/48">{row.generic}</p>
              </div>
            </div>
          </GlassPanel>
        ))}
      </div>
    </Container>
  );
}
