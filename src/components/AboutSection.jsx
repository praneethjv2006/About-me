import { motion as Motion } from "framer-motion"
import SectionTitle from "./SectionTitle"
import GlassCard from "./ui/GlassCard"
import { aboutData } from "../data/portfolioData"

function AboutSection() {
  return (
    <section id="about" className="px-6 py-24 md:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="About"
          title="Design-minded engineering with product impact"
          description="I focus on resilient architecture and high-fidelity interfaces that make complex workflows feel effortless."
        />

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <Motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <GlassCard className="p-8">
              <p className="text-lg leading-relaxed text-slate-300">{aboutData.intro}</p>
              <ul className="mt-6 space-y-3 text-slate-300">
                {aboutData.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </GlassCard>
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <GlassCard className="h-full p-4" hover={false}>
              <img
                src={aboutData.imageUrl}
                alt="Professional portrait"
                className="h-full min-h-[320px] w-full rounded-2xl object-cover"
              />
            </GlassCard>
          </Motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
