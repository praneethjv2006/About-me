import { motion as Motion } from "framer-motion"
import { ArrowRight, Mail } from "lucide-react"
import { heroData } from "../data/portfolioData"

function HeroSection() {
  return (
    <section id="home" className="relative flex min-h-screen items-center px-6 py-24 md:px-10 lg:px-16">
      <div className="mx-auto w-full max-w-6xl">
        <Motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-sm uppercase tracking-[0.32em] text-cyan-300/90"
        >
          Personal Portfolio
        </Motion.p>

        <Motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl"
        >
          {heroData.name}
        </Motion.h1>

        <Motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-6 max-w-3xl text-lg text-slate-300 md:text-xl"
        >
          {heroData.title}
        </Motion.p>

        <Motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="mt-4 max-w-2xl text-slate-400"
        >
          {heroData.subtitle}
        </Motion.p>

        <Motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.7 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a href="#projects" className="btn-primary">
            View Projects <ArrowRight size={18} />
          </a>
          <a href="#contact" className="btn-secondary">
            Contact Me <Mail size={18} />
          </a>
        </Motion.div>
      </div>
    </section>
  )
}

export default HeroSection
