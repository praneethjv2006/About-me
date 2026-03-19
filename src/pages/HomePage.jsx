import { motion as Motion } from "framer-motion"
import { ArrowRight, Mail } from "lucide-react"
import { Link } from "react-router-dom"
import ContactShowcase from "../components/ContactShowcase"
import PageTransition from "../components/PageTransition"
import GlassCard from "../components/ui/GlassCard"

import homePageImg from "../assets/images/home_page.jpg"
import { heroData } from "../data/portfolioData"

const spotlightCards = [
  {
    label: "Competitive Edge",
    value: "Codeforces Specialist",
    accent: "from-cyan-400/30 to-transparent",
    position: "home-spotlight-a",
  },
  {
    label: "Academic Base",
    value: "IIT Ropar | 8.85 CGPA",
    accent: "from-fuchsia-400/30 to-transparent",
    position: "home-spotlight-b",
  },
  {
    label: "Focus Areas",
    value: "AI/ML • Full-Stack • DSA",
    accent: "from-indigo-400/30 to-transparent",
    position: "home-spotlight-c",
  },
]

function HomePage() {
  return (
    <PageTransition>
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.45)] md:p-10">
        <div className="pointer-events-none absolute -left-20 top-16 h-56 w-56 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-10 h-56 w-56 rounded-full bg-fuchsia-500/20 blur-3xl" />

        <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-sm uppercase tracking-[0.3em] text-cyan-300"
            >
              Portfolio
            </Motion.p>

            <Motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.08 }}
              className="mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl"
            >
              {heroData.name}
            </Motion.h1>

            <Motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.14 }}
              className="mt-4 max-w-2xl text-lg text-cyan-100/90 truncate whitespace-nowrap"
              title={heroData.title}
            >
              {heroData.title}
            </Motion.p>

            <Motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2 }}
              className="mt-4 max-w-2xl text-slate-300"
            >
              Computer Science undergraduate at IIT Ropar with strong interests in Competitive Programming, Data Structures & Algorithms, Artificial Intelligence, and Software Development. I enjoy solving complex algorithmic problems, building scalable applications, and applying AI techniques to create intelligent systems.
            </Motion.p>

            <Motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.26 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Link to="/projects" className="btn-primary">
                View Projects <ArrowRight size={17} />
              </Link>
              <a href="#contact" className="btn-secondary">
                Contact Me <Mail size={17} />
              </a>
            </Motion.div>
          </div>

          <Motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.18 }}
            className="relative"
          >
            <div className="flex items-center justify-center">
              <GlassCard className="home-hero-card relative flex justify-center items-center overflow-hidden p-2 md:p-4" hover={false}>
                <div className="home-hero-card-glow" />
                <Motion.div
                  className="home-hero-sheen"
                  animate={{ x: ["-130%", "130%"] }}
                  transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", repeatDelay: 1.2 }}
                />
                <Motion.img
                  src={homePageImg}
                  alt="Professional profile"
                  className="block max-w-full max-h-[520px] w-auto h-auto rounded-2xl object-cover"
                  style={{ imageRendering: "auto" }}
                  whileHover={{ scale: 1.04, rotate: -0.8 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
              </GlassCard>
            </div>

            {spotlightCards.map((card, index) => (
              <Motion.div
                key={card.label}
                initial={{ opacity: 0, scale: 0.9, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.28 + index * 0.1 }}
                className={`home-spotlight-card ${card.position}`}
              >
                <Motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 5 + index, repeat: Infinity, ease: "easeInOut", delay: index * 0.4 }}
                  className="relative overflow-hidden rounded-2xl border border-white/12 bg-slate-950/70 p-4 shadow-[0_18px_45px_rgba(0,0,0,0.3)] backdrop-blur-xl"
                >
                  <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${card.accent}`} />
                  <p className="relative text-[11px] uppercase tracking-[0.22em] text-cyan-200/80">{card.label}</p>
                  <p className="relative mt-2 text-sm font-medium text-white">{card.value}</p>
                </Motion.div>
              </Motion.div>
            ))}
          </Motion.div>
        </div>
      </div>

      {/* Who I Am card removed as requested */}

      <ContactShowcase />
    </PageTransition>
  )
}

export default HomePage
