import { useRef } from "react"
import {
  motion as Motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion"
import {
  Award,
  Atom,
  Medal,
  Rocket,
  Sparkles,
  Star,
  Trophy,
  Target,
} from "lucide-react"
import PageTransition from "../components/PageTransition"
import { achievements } from "../data/portfolioData"

const iconMap = {
  trophy: Trophy,
  medal: Medal,
  award: Award,
  sparkles: Sparkles,
  rocket: Rocket,
  atom: Atom,
  star: Star,
  target: Target,
}


const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.04, delayChildren: 0.02 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.1, ease: "easeOut" },
  },
}

function AchievementCard({ item }) {
  const reduceMotion = useReducedMotion()
  const cardRef = useRef(null)
  const glowX = useMotionValue(120)
  const glowY = useMotionValue(120)
  const rotateX = useSpring(0, { stiffness: 120, damping: 20 })
  const rotateY = useSpring(0, { stiffness: 120, damping: 20 })
  const glow = useMotionTemplate`radial-gradient(320px circle at ${glowX}px ${glowY}px, rgba(56, 189, 248, 0.18), transparent 65%)`

  const handleMouseMove = (event) => {
    if (reduceMotion || !cardRef.current) return
    const bounds = cardRef.current.getBoundingClientRect()
    const x = event.clientX - bounds.left
    const y = event.clientY - bounds.top
    glowX.set(x)
    glowY.set(y)
    rotateX.set(((y / bounds.height) - 0.5) * -8)
    rotateY.set(((x / bounds.width) - 0.5) * 8)
  }

  const handleMouseLeave = () => {
    glowX.set(120)
    glowY.set(120)
    rotateX.set(0)
    rotateY.set(0)
  }

  const Icon = iconMap[item.icon] || Trophy
  const featuredClass = item.featured ? "achievement-featured" : ""

  return (
    <Motion.article
      ref={cardRef}
      variants={cardVariants}
      className={`achievement-card group ${featuredClass}`}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      whileHover={reduceMotion ? undefined : { y: -2 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <span className="achievement-card-border" />
      <Motion.span className="achievement-card-glow" style={{ backgroundImage: glow }} />
      {item.featured ? <span className="achievement-card-sheen" /> : null}
      <div className="relative z-10 flex flex-col">
        <div className="flex items-start justify-between gap-4">
          <Motion.div
            className="achievement-icon"
            animate={
              reduceMotion
                ? undefined
                : {
                    rotate: [0, 6, -6, 0],
                  }
            }
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <Icon size={22} />
          </Motion.div>
          {item.featured ? <span className="achievement-ribbon">Featured</span> : null}
        </div>

        <div className="mt-6 space-y-3">
          <span className="achievement-chip">{item.category}</span>
          <h3 className="text-xl font-semibold text-white md:text-2xl">{item.title}</h3>
          <p className="text-sm leading-relaxed text-slate-300 md:text-base">{item.description}</p>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <span className="achievement-year">{item.year}</span>
          <span className="achievement-impact">{item.impact}</span>
        </div>

      </div>
    </Motion.article>
  )
}

function AchievementsPage() {
  const reduceMotion = useReducedMotion()

  return (
    <PageTransition>
      <section className="relative overflow-hidden rounded-[32px] border border-white/5 bg-[#070c17] px-6 py-10 sm:px-10 lg:px-14">
        <div className="achievement-mesh" />
        <div className="achievement-noise" />
        <Motion.div
          className="gradient-blob achievement-blob-a"
          animate={reduceMotion ? undefined : { x: [0, 24, 0], y: [0, -18, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <Motion.div
          className="gradient-blob achievement-blob-b"
          animate={reduceMotion ? undefined : { x: [0, -20, 0], y: [0, 16, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative z-10">
          <div className="max-w-3xl">
            <Motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6 }}
              className="text-xs uppercase tracking-[0.4em] text-cyan-300/80"
            >
              Achievements
            </Motion.p>
            <Motion.h1
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl"
            >
              Milestones, Recognition & Competitive Excellence
            </Motion.h1>
            <Motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-4 text-base text-slate-300 md:text-lg"
            >
              A curated showcase of competitive results, academic benchmarks, and research-driven milestones with
              measurable impact.
            </Motion.p>
            <Motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="achievement-underline"
            />
          </div>

          <Motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-10 grid gap-6"
          >
            {achievements.map((item) => (
              <div
                key={item.title}
                className="w-full"
              >
                <AchievementCard item={item} />
              </div>
            ))}
          </Motion.div>
        </div>
      </section>
    </PageTransition>
  )
}

export default AchievementsPage
