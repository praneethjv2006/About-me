import { motion as Motion } from "framer-motion"
import { Award, BookOpen, GraduationCap } from "lucide-react"
import SectionTitle from "./SectionTitle"
import GlassCard from "./ui/GlassCard"
import { achievements, certifications, education, keyCourses } from "../data/portfolioData"

function CredentialsSection() {
  return (
    <section id="credentials" className="px-6 py-24 md:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Credentials"
          title="Education, certifications, and achievements"
          description="Academic excellence, continuous upskilling, and competition performance that reflect technical depth and consistency."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <Motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <GlassCard className="h-full p-6">
              <div className="mb-5 flex items-center gap-2 text-cyan-200">
                <GraduationCap size={18} />
                <h3 className="text-lg font-medium text-white">Education</h3>
              </div>
              <div className="space-y-4">
                {education.map((item) => (
                  <div key={`${item.degree}-${item.year}`} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <p className="text-sm uppercase tracking-[0.12em] text-cyan-300/90">{item.year}</p>
                    <p className="mt-2 text-white">{item.degree}</p>
                    <p className="mt-1 text-sm text-slate-300">{item.institute}</p>
                    <p className="mt-2 text-sm text-fuchsia-200">{item.score}</p>
                  </div>
                ))}
              </div>
            </GlassCard>
          </Motion.div>

          <Motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.06 }}>
            <GlassCard className="h-full p-6">
              <div className="mb-5 flex items-center gap-2 text-cyan-200">
                <Award size={18} />
                <h3 className="text-lg font-medium text-white">Certifications</h3>
              </div>
              <ul className="space-y-3">
                {certifications.map((item) => (
                  <li key={item.name} className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-slate-200">
                    <a href={item.link} className="transition hover:text-cyan-200">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </Motion.div>

          <Motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.1 }}>
            <GlassCard className="h-full p-6">
              <div className="mb-5 flex items-center gap-2 text-cyan-200">
                <BookOpen size={18} />
                <h3 className="text-lg font-medium text-white">Key Courses</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {keyCourses.map((course) => (
                  <span key={course} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-slate-200">
                    {course}
                  </span>
                ))}
              </div>
            </GlassCard>
          </Motion.div>

          <Motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}>
            <GlassCard className="h-full p-6">
              <div className="mb-5 flex items-center gap-2 text-cyan-200">
                <Award size={18} />
                <h3 className="text-lg font-medium text-white">Miscellaneous Achievements</h3>
              </div>
              <ul className="space-y-3 text-slate-300">
                {achievements.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-fuchsia-300 shadow-[0_0_12px_rgba(232,121,249,0.8)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </GlassCard>
          </Motion.div>
        </div>
      </div>
    </section>
  )
}

export default CredentialsSection
