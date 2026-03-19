import { motion as Motion } from "framer-motion"
import { Braces, Database, Gauge, Layers, ServerCog, Sparkles } from "lucide-react"
import SectionTitle from "./SectionTitle"
import GlassCard from "./ui/GlassCard"
import { skills } from "../data/portfolioData"

const iconMap = {
  React: Layers,
  JavaScript: Braces,
  TypeScript: Sparkles,
  "Node.js": ServerCog,
  Python: Database,
  TailwindCSS: Gauge,
}

function SkillsSection() {
  return (
    <section id="skills" className="px-6 py-24 md:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Skills"
          title="Technology stack I trust in production"
          description="A balanced toolkit for shipping performant products with robust architecture and refined interfaces."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => {
            const Icon = iconMap[skill.name] ?? Sparkles
            return (
              <Motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <GlassCard className="p-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="rounded-xl bg-white/5 p-2 text-cyan-300">
                        <Icon size={18} />
                      </span>
                      <p className="font-medium text-white">{skill.name}</p>
                    </div>
                    <span className="text-sm text-cyan-200">{skill.level}%</span>
                  </div>
                  <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                    <Motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true, amount: 0.7 }}
                      transition={{ duration: 1.1, delay: index * 0.07, ease: "easeOut" }}
                      className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-400"
                    />
                  </div>
                </GlassCard>
              </Motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
