import { useState } from "react"
import { motion as Motion } from "framer-motion"
import {
  BookOpenCheck,
  BrainCircuit,
  BookMarked,
  Brain,
  Cpu,
  Database,
  GitBranch,
  GraduationCap,
  Landmark,
  Network,
  Scale,
  Sigma,
  Wrench,
} from "lucide-react"
import PageTransition from "../components/PageTransition"
import GlassCard from "../components/ui/GlassCard"
import { education, keyCourses } from "../data/portfolioData"

const academicHighlights = [
  {
    title: "Strong Mathematical Foundation",
    description: "Built through olympiad-style problem solving, linear algebra, probability, and rigorous analytical coursework.",
    icon: Sigma,
    accent: "from-cyan-400/30 via-cyan-300/10 to-transparent",
  },
  {
    title: "Core Computer Science Knowledge",
    description: "Grounded in systems, algorithms, operating systems, architecture, and software engineering fundamentals.",
    icon: Cpu,
    accent: "from-fuchsia-400/25 via-fuchsia-300/10 to-transparent",
  },
  {
    title: "AI & Systems Focus",
    description: "Oriented toward intelligent systems, machine learning, and practical engineering that scales beyond prototypes.",
    icon: BrainCircuit,
    accent: "from-indigo-400/25 via-indigo-300/10 to-transparent",
  },
]

const courseIcons = [
  Sigma,
  Brain,
  Wrench,
  Network,
  GitBranch,
  Cpu,
  BookMarked,
  Database,
  Scale,
  Sigma,
  Sigma,
  Scale,
  Network,
  GitBranch,
  BookMarked,
]

const institutionVisuals = {
  "Bachelor of Technology": {
    badge: "IIT",
    glow: "from-cyan-400/20 via-cyan-300/8 to-transparent",
  },
  "Senior Secondary": {
    badge: "FJ",
    glow: "from-fuchsia-400/20 via-fuchsia-300/8 to-transparent",
  },
  Secondary: {
    badge: "WW",
    glow: "from-indigo-400/20 via-indigo-300/8 to-transparent",
  },
}

function getEducationIcon(degree) {
  if (degree === "Bachelor of Technology") {
    return Landmark
  }

  if (degree === "Senior Secondary") {
    return GraduationCap
  }

  return BookOpenCheck
}

function EducationPage() {
  const [ripples, setRipples] = useState([])

  function handleCourseRipple(course, event) {
    const bounds = event.currentTarget.getBoundingClientRect()
    const ripple = {
      id: `${course}-${Date.now()}`,
      x: event.clientX - bounds.left,
      y: event.clientY - bounds.top,
    }

    setRipples((current) => [...current, ripple])

    window.setTimeout(() => {
      setRipples((current) => current.filter((item) => item.id !== ripple.id))
    }, 700)
  }

  return (
    <PageTransition>
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(6,11,22,0.96),rgba(9,16,31,0.92))] p-6 shadow-[0_30px_90px_rgba(0,0,0,0.45)] md:p-10">
        <div className="premium-border-glow" />
        <div className="education-grid" />
        <div className="education-light-streak education-light-streak-a" />
        <div className="education-light-streak education-light-streak-b" />
        <Motion.div
          className="gradient-blob left-[-4rem] top-[5rem] h-52 w-52 bg-cyan-400/18"
          animate={{ y: [0, -18, 0], x: [0, 14, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <Motion.div
          className="gradient-blob right-[-3rem] top-12 h-64 w-64 bg-fuchsia-500/18"
          animate={{ y: [0, 20, 0], x: [0, -12, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
        <Motion.div
          className="gradient-blob bottom-12 left-1/2 h-56 w-56 -translate-x-1/2 bg-indigo-500/14"
          animate={{ y: [0, -16, 0], scale: [1, 1.06, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />

        <section className="relative z-10">
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.035] px-6 py-10 backdrop-blur-xl md:px-10 md:py-14">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_36%),radial-gradient(circle_at_80%_20%,rgba(232,121,249,0.12),transparent_30%)]" />
            <div className="absolute inset-0 opacity-60">
              {Array.from({ length: 16 }).map((_, index) => (
                <Motion.span
                  key={index}
                  className="education-particle"
                  style={{
                    left: `${8 + (index % 8) * 11}%`,
                    top: `${18 + Math.floor(index / 8) * 24}%`,
                  }}
                  animate={{
                    y: [0, -14 - (index % 3) * 6, 0],
                    opacity: [0.18, 0.7, 0.18],
                    scale: [1, 1.25, 1],
                  }}
                  transition={{
                    duration: 4.5 + (index % 4),
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.18,
                  }}
                />
              ))}
            </div>

            <Motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="relative z-10 text-sm uppercase tracking-[0.35em] text-cyan-300/85"
            >
              Education
            </Motion.p>

            <div className="relative z-10 mt-4 max-w-4xl">
              <h1 className="text-balance text-4xl font-semibold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
                {"Academic Journey".split("").map((character, index) => (
                  <Motion.span
                    key={`aj-${character}-${index}`}
                    initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.45, delay: 0.03 * index, ease: "easeOut" }}
                    style={{ color: "#fff", background: "none", WebkitBackgroundClip: "unset" }}
                  >
                    {character === " " ? "\u00A0" : character}
                  </Motion.span>
                ))}
              </h1>

              <Motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                className="education-hero-underline"
              />

              {/* Subtitle removed as requested */}
            </div>

            {/* Hero chips removed as requested */}
          </div>
        </section>

        <section className="relative z-10 mt-14">
          <div className="mb-8 max-w-3xl">
            <Motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.45 }}
              className="text-sm uppercase tracking-[0.28em] text-cyan-300/80"
            >
              Timeline
            </Motion.p>
          </div>

          <div className="relative mx-auto max-w-6xl">
            <div className="education-timeline-line" />
            <div className="education-timeline-pulse" />

            <div className="space-y-8 md:space-y-12">
              {education.map((item, index) => {
                const Icon = getEducationIcon(item.degree)
                const isLeft = index % 2 === 0
                const institutionVisual = institutionVisuals[item.degree]

                return (
                  <div key={`${item.degree}-${item.year}`} className="relative grid items-center gap-5 gap-y-4 md:grid-cols-2 md:gap-10">
                    <div className={`${isLeft ? "md:order-1" : "md:order-2"} pl-8 md:pl-0 ${isLeft ? "md:pr-14" : "md:pl-14"}`}>
                      <Motion.div
                        initial={{ opacity: 0, x: isLeft ? -60 : 60, y: 26 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        viewport={{ once: true, amount: 0.35 }}
                        transition={{ duration: 0.65, delay: index * 0.08, ease: "easeOut" }}
                      >
                        <GlassCard className="education-story-card relative overflow-hidden p-6 md:p-7">
                          <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${isLeft ? "from-cyan-400/12 via-transparent to-transparent" : "from-fuchsia-400/12 via-transparent to-transparent"}`} />
                          <div className="pointer-events-none absolute right-4 top-4 h-24 w-24 rounded-full bg-white/5 blur-2xl" />

                          <div className="relative flex items-start gap-4">
                            {/* Institution logo removed as requested */}
                            <div>
                              <p className="text-xs uppercase tracking-[0.28em] text-cyan-300/80">{item.year}</p>
                              <h3 className="mt-3 text-2xl font-semibold text-white">{item.degree}</h3>
                              <p className="mt-2 text-base text-slate-200">{item.institute}</p>
                              {item.extra ? <p className="mt-2 text-sm text-cyan-200">{item.extra}</p> : null}
                            </div>
                          </div>

                          <div className="relative mt-6 flex items-center">
                            <div className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-fuchsia-100">
                              {item.score}
                            </div>
                          </div>
                        </GlassCard>
                      </Motion.div>
                    </div>

                    <div className={`hidden md:flex ${isLeft ? "md:order-2 md:justify-start" : "md:order-1 md:justify-end"}`}>
                      <Motion.div
                        initial={{ opacity: 0, scale: 0.7 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.45 }}
                        transition={{ duration: 0.5, delay: 0.12 + index * 0.08 }}
                        className="education-node-wrap"
                      >
                        <div className="education-node-ring" />
                        <div className="education-node-core" />
                      </Motion.div>
                    </div>

                    <div className="absolute left-0 top-7 md:hidden">
                      <div className="education-node-mobile">
                        <div className="education-node-core" />
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="relative z-10 mt-16">
          <div className="mb-8 max-w-3xl">
            <Motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="mt-3 text-3xl font-semibold text-white md:text-4xl"
            >
              Academic highlights
            </Motion.h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {academicHighlights.map((item, index) => {
              const Icon = item.icon
              return (
                <Motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  animate={{ y: [0, -7, 0] }}
                  whileHover={{ y: -10 }}
                  className="education-floating-card"
                  style={{ animationDelay: `${index * 0.7}s` }}
                >
                  <GlassCard className="relative h-full overflow-hidden p-6 md:p-7">
                    <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${item.accent}`} />
                    <div className="education-highlight-orbit" />
                    <div className="relative">
                      <div className="education-icon-shell mb-6">
                        <Icon size={22} />
                      </div>
                      <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                      <p className="mt-3 text-slate-300">{item.description}</p>
                    </div>
                  </GlassCard>
                </Motion.div>
              )
            })}
          </div>
        </section>

        <section className="relative z-10 mt-16">
          <div className="mb-8 max-w-3xl">
            <Motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.45 }}
              className="text-sm uppercase tracking-[0.28em] text-cyan-300/80"
            >
              Key Courses
            </Motion.p>
            {/* Removed instructional text as requested */}
          </div>

          <div className="education-course-grid">
            {keyCourses.map((course, index) => {
              const Icon = courseIcons[index % courseIcons.length]

              return (
                <Motion.button
                  key={course}
                  type="button"
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.16 }}
                  transition={{ duration: 0.45, delay: index * 0.035 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  whileTap={{ scale: 0.985 }}
                  onMouseEnter={(event) => handleCourseRipple(course, event)}
                  onClick={(event) => handleCourseRipple(course, event)}
                  className="education-course-card"
                >
                  <div className="education-course-card-glow" />
                  <div className="education-course-card-topline" />
                  <div className="education-course-card-icon">
                    <Icon size={18} />
                  </div>
                  <div className="education-course-card-copy">
                    <p className="education-course-card-label">Course</p>
                    <h3 className="education-course-card-title">{course}</h3>
                  </div>

                  {ripples
                    .filter((ripple) => ripple.id.startsWith(`${course}-`))
                    .map((ripple) => (
                      <span
                        key={ripple.id}
                        className="education-course-ripple"
                        style={{ left: ripple.x, top: ripple.y }}
                      />
                    ))}
                </Motion.button>
              )
            })}
          </div>
        </section>
      </div>
    </PageTransition>
  )
}

export default EducationPage
