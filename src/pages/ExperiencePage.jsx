import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { AnimatePresence, motion as Motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion"
import {
  ArrowRight,
  Brain,
  Braces,
  Code2,
  Cpu,
  Database,
  ExternalLink,
  ScanSearch,
  Smartphone,
  Sparkles,
  Trophy,
  X,
} from "lucide-react"
import PageTransition from "../components/PageTransition"
import SectionTitle from "../components/SectionTitle"
import { experience, technicalSkills } from "../data/portfolioData"

const skillCategoryMeta = {
  programmingLanguages: {
    eyebrow: "Programming Languages",
    description: "Core languages for algorithms, systems work, and product engineering foundations.",
    icon: Code2,
  },
  webAndAppDevelopment: {
    eyebrow: "Web / App Development",
    description: "Frontend, backend, database, and mobile technologies used to ship production experiences.",
    icon: Braces,
  },
  aiMl: {
    eyebrow: "AI / Machine Learning",
    description: "Applied modeling and vision capabilities used across intelligent product and research workflows.",
    icon: Brain,
  },
  other: {
    eyebrow: "Other Skills",
    description: "Foundational strengths that support execution speed, problem solving, and competitive rigor.",
    icon: Trophy,
  },
}

const techIconMap = {
  "C++": Code2,
  Python: Code2,
  C: Code2,
  Java: Code2,
  JavaScript: Braces,
  SQL: Database,
  "RISC-V": Cpu,
  "React.js": Braces,
  "Next.js": Braces,
  "Node.js": Cpu,
  PostgreSQL: Database,
  MongoDB: Database,
  Supabase: Database,
  Flutter: Smartphone,
  Firebase: Sparkles,
  Regression: Brain,
  Classification: Brain,
  Clustering: Brain,
  "Computer Vision": ScanSearch,
  CNN: Cpu,
  "Data Structures & Algorithms": Code2,
  "Competitive Programming": Trophy,
}

const accentClasses = {
  indigo: {
    text: "text-indigo-200",
    chip: "border-indigo-300/20 bg-indigo-400/10 text-indigo-50",
    dot: "bg-indigo-300",
    glow: "bg-indigo-400/14",
  },
  cyan: {
    text: "text-cyan-200",
    chip: "border-cyan-300/20 bg-cyan-400/10 text-cyan-50",
    dot: "bg-cyan-300",
    glow: "bg-cyan-400/14",
  },
  emerald: {
    text: "text-emerald-200",
    chip: "border-emerald-300/20 bg-emerald-400/10 text-emerald-50",
    dot: "bg-emerald-300",
    glow: "bg-emerald-400/14",
  },
}

const heroMetrics = [
  { label: "Internships", value: "03" },
  { label: "Focus", value: "AI + Product" },
  { label: "Timeline", value: "2025 - 2026" },
]

function SurfaceSpotlight({ children, className = "" }) {
  const pointerX = useMotionValue(50)
  const pointerY = useMotionValue(50)
  const springX = useSpring(pointerX, { stiffness: 180, damping: 28 })
  const springY = useSpring(pointerY, { stiffness: 180, damping: 28 })
  const spotlight = useMotionTemplate`radial-gradient(320px circle at ${springX}% ${springY}%, rgba(255,255,255,0.12), transparent 42%)`

  const handleMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect()
    pointerX.set(((event.clientX - bounds.left) / bounds.width) * 100)
    pointerY.set(((event.clientY - bounds.top) / bounds.height) * 100)
  }

  return (
    <div className={`group relative overflow-hidden ${className}`} onMouseMove={handleMove}>
      <Motion.div style={{ background: spotlight }} className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      {children}
    </div>
  )
}

function ExperienceTimelineItem({ item, index, onOpen }) {
  const accent = accentClasses[item.accent] ?? accentClasses.cyan

  return (
    <div className="grid gap-5 md:grid-cols-[84px,minmax(0,1fr)] md:gap-8">
      <div className="relative hidden md:block">
        <div className="experience-timeline-rail" />
        <Motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.4, delay: index * 0.08 }}
          className="experience-timeline-node-wrap"
        >
          <div className="experience-timeline-node-ring" />
          <div className={`experience-timeline-node-core ${accent.dot}`} />
        </Motion.div>
      </div>

      <Motion.div
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
      >
        <SurfaceSpotlight className="rounded-[30px]">
          <div className="experience-panel-gradient" />
          <div className="experience-panel">
            <div className={`pointer-events-none absolute right-0 top-0 h-36 w-36 rounded-full blur-3xl ${accent.glow}`} />

            <div className="relative flex flex-wrap items-start justify-between gap-4">
              <div className="max-w-2xl">
                <p className={`text-xs uppercase tracking-[0.24em] ${accent.text}`}>{item.period}</p>
                <h3 className="mt-3 text-2xl font-semibold leading-tight text-white md:text-[1.9rem]">{item.title}</h3>
                <p className="mt-3 text-sm text-slate-300">{item.organization}</p>
                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">{item.description}</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-right backdrop-blur-xl">
                <p className="text-[0.65rem] uppercase tracking-[0.2em] text-slate-400">Duration</p>
                <p className={`mt-1 text-sm font-medium ${accent.text}`}>{item.duration}</p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span key={`${item.title}-${tag}`} className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs ${accent.chip}`}>
                  <Sparkles size={12} />
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-8 grid gap-4 grid-cols-1">
              {item.achievements.map((achievement) => (
                <div key={achievement} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-sm leading-7 text-slate-300">{achievement}</p>
                </div>
              ))}
            </div>
          </div>
        </SurfaceSpotlight>
      </Motion.div>
    </div>
  )
}

function SkillPanel({ category, skills, index }) {
  const meta = skillCategoryMeta[category]
  const Icon = meta?.icon ?? Sparkles

  return (
    <Motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.45, delay: index * 0.07, ease: "easeOut" }}
    >
      <SurfaceSpotlight className="h-full rounded-[28px]">
        <div className="skill-panel-gradient" />
        <div className="skill-panel h-full">
          <div className="skill-panel-indicator" />

          <div className="relative flex items-start justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-cyan-200/80">{meta.eyebrow}</p>
              <p className="mt-4 max-w-lg text-sm leading-7 text-slate-300">{meta.description}</p>
            </div>

            <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-slate-100">
              <Icon size={18} />
            </div>
          </div>

          <div className="mt-7 flex flex-wrap gap-2.5">
            {skills.map((skill) => {
              const SkillIcon = techIconMap[skill] ?? Sparkles

              return (
                <Motion.span key={`${category}-${skill}`} whileHover={{ y: -2 }} className="skill-chip">
                  <SkillIcon size={14} />
                  {skill}
                </Motion.span>
              )
            })}
          </div>
        </div>
      </SurfaceSpotlight>
    </Motion.div>
  )
}

function ExperienceDetailsPanel({ item, onClose }) {
  const accent = accentClasses[item.accent] ?? accentClasses.cyan

  return (
    <Motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 backdrop-blur-xl"
      onClick={onClose}
    >
      <Motion.aside
        initial={{ scale: 0.92, opacity: 0, y: 40 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.92, opacity: 0, y: 40 }}
        transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto rounded-[2.2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(7,10,18,0.98),rgba(9,12,22,0.97))] shadow-2xl scrollbar-hide"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="experience-panel-noise" />
        <div className={`pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full blur-3xl ${accent.glow}`} />

        <div className="relative h-full p-6 md:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className={`text-xs uppercase tracking-[0.24em] ${accent.text}`}>{item.period}</p>
              <h3 className="mt-3 max-w-2xl text-3xl font-semibold leading-tight text-white md:text-4xl">{item.title}</h3>
              <p className="mt-3 text-sm text-slate-300">{item.organization}</p>
            </div>

            <button type="button" onClick={onClose} className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-slate-100 transition hover:bg-white/[0.08]">
              <X size={18} />
            </button>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {item.technologies.map((technology) => (
              <span key={`${item.title}-${technology}`} className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs ${accent.chip}`}>
                <Sparkles size={12} />
                {technology}
              </span>
            ))}
          </div>

          <div className="mt-8 space-y-6">
            <section className="rounded-[26px] border border-white/10 bg-white/[0.04] p-5">
              <p className="text-sm uppercase tracking-[0.22em] text-slate-400">Full Internship Story</p>
              <p className="mt-4 text-base leading-8 text-slate-300">{item.description}</p>
            </section>

            <section className="rounded-[26px] border border-white/10 bg-white/[0.04] p-5">
              <p className="text-sm uppercase tracking-[0.22em] text-slate-400">Key Responsibilities</p>
              <div className="mt-4 space-y-3">
                {item.points.map((point) => (
                  <div key={point} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <span className={`mt-2 inline-flex h-2.5 w-2.5 rounded-full ${accent.dot}`} />
                    <p className="text-sm leading-7 text-slate-300">{point}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-[26px] border border-white/10 bg-white/[0.04] p-5">
              <p className="text-sm uppercase tracking-[0.22em] text-slate-400">Achievements</p>
              <div className="mt-4 space-y-3">
                {item.achievements.map((achievement) => (
                  <div key={achievement} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <span className={`mt-2 inline-flex h-2.5 w-2.5 rounded-full ${accent.dot}`} />
                    <p className="text-sm leading-7 text-slate-300">{achievement}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-[26px] border border-white/10 bg-white/[0.04] p-5">
              <p className="text-sm uppercase tracking-[0.22em] text-slate-400">Project Screenshots</p>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {item.media.map((mediaItem) => (
                  <div key={`${item.title}-${mediaItem.title}`} className="rounded-[22px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-4">
                    <div className="experience-media-frame">
                      <div className="experience-media-overlay" />
                      <div className="relative z-10 p-4">
                        <span className="rounded-full border border-white/10 bg-slate-950/50 px-3 py-1 text-[0.65rem] uppercase tracking-[0.2em] text-slate-200">
                          {mediaItem.type}
                        </span>
                      </div>
                    </div>
                    <p className="mt-4 text-sm font-medium text-white">{mediaItem.title}</p>
                    <p className="mt-2 text-xs leading-6 text-slate-300">{mediaItem.caption}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-[26px] border border-white/10 bg-white/[0.04] p-5">
              <p className="text-sm uppercase tracking-[0.22em] text-slate-400">Milestone Timeline</p>
              <div className="relative mt-6 space-y-5 pl-7">
                <div className="experience-detail-rail" />
                {item.timeline.map((step, index) => (
                  <Motion.div
                    key={`${item.title}-${step.phase}`}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.32, delay: 0.08 * index }}
                    className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                  >
                    <span className={`absolute left-[-1.85rem] top-5 inline-flex h-3 w-3 rounded-full ${accent.dot}`} />
                    <p className="text-[0.68rem] uppercase tracking-[0.2em] text-slate-400">{step.phase}</p>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{step.detail}</p>
                  </Motion.div>
                ))}
              </div>
            </section>

            <section className="flex flex-wrap gap-3">
              {item.links.map((link) => {
                const isInternal = link.href.startsWith("/")

                if (isInternal) {
                  return (
                    <Link key={`${item.title}-${link.label}`} to={link.href} onClick={onClose} className="experience-button">
                      {link.label}
                      <ArrowRight size={16} />
                    </Link>
                  )
                }

                return (
                  <a key={`${item.title}-${link.label}`} href={link.href} target="_blank" rel="noreferrer" className="experience-button">
                    {link.label}
                    <ExternalLink size={16} />
                  </a>
                )
              })}
            </section>
          </div>
        </div>
      </Motion.aside>
    </Motion.div>
  )
}

function ExperiencePage() {
  const [selectedExperience, setSelectedExperience] = useState(null)

  useEffect(() => {
    if (!selectedExperience) {
      return undefined
    }

    const previousOverflow = document.body.style.overflow
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedExperience(null)
      }
    }

    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", handleEscape)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener("keydown", handleEscape)
    }
  }, [selectedExperience])

  return (
    <PageTransition>
      <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-[linear-gradient(180deg,rgba(6,9,18,0.98),rgba(8,12,22,0.96))] px-5 py-8 sm:px-8 lg:px-10 lg:py-10">
        <div className="experience-background-mesh" />
        <div className="experience-panel-noise" />
        <div className="pointer-events-none absolute left-[-10%] top-[-12%] h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-[-16%] right-[-10%] h-72 w-72 rounded-full bg-fuchsia-400/[0.08] blur-3xl" />

        <section className="relative">
          <SectionTitle
            eyebrow="Experience"
            title="Internships, Research & Roles"
            description="Hands-on engineering, research, and product work across internships and teams."
          />
        </section>

        <section className="relative mt-16">
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80 mb-8">Internships</p>
          <div className="space-y-8">
            {experience.map((item, index) => (
              <ExperienceTimelineItem key={`${item.period}-${item.title}`} item={item} index={index} onOpen={setSelectedExperience} />
            ))}
          </div>
        </section>

        <section className="relative mt-16">
          <div className="experience-divider" />
        </section>

        <section className="relative mt-16">
          <SectionTitle
            eyebrow="Technical Skills"
          />

          <div className="grid gap-6 lg:grid-cols-2">
            {Object.entries(technicalSkills).map(([category, skills], index) => (
              <SkillPanel key={category} category={category} skills={skills} index={index} />
            ))}
          </div>
        </section>
      </div>

      <AnimatePresence>
        {selectedExperience ? <ExperienceDetailsPanel item={selectedExperience} onClose={() => setSelectedExperience(null)} /> : null}
      </AnimatePresence>
    </PageTransition>
  )
}

export default ExperiencePage