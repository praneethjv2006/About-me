import { motion as Motion } from "framer-motion"
import {
  ArrowRight,
  Award,
  BriefcaseBusiness,
  FolderKanban,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Instagram,
} from "lucide-react"
import { Link } from "react-router-dom"
import GlassCard from "./ui/GlassCard"

const quickLinks = [
  {
    title: "Projects",
    description: "Explore selected builds and engineering decisions.",
    to: "/projects",
    icon: FolderKanban,
  },
  {
    title: "Achievements",
    description: "See competition milestones and distinctions.",
    to: "/achievements",
    icon: Award,
  },
  {
    title: "Education",
    description: "Review academic background and coursework.",
    to: "/education",
    icon: GraduationCap,
  },
  {
    title: "Experience",
    description: "Browse internships and technical depth.",
    to: "/experience",
    icon: BriefcaseBusiness,
  },
]

function ContactShowcase() {
  return (
    <Motion.section
      id="contact"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative mt-12 overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(145deg,rgba(9,16,31,0.95),rgba(14,20,38,0.84))] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.45)] md:p-8"
    >
      <div className="premium-border-glow" />
      <div className="contact-pattern" />
      <div className="pointer-events-none absolute -left-24 top-12 h-44 w-44 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="pointer-events-none absolute right-[-60px] top-[-30px] h-48 w-48 rounded-full bg-fuchsia-500/18 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-40px] left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-indigo-500/12 blur-3xl" />

      <div className="relative z-10">
        <div className="mb-8 max-w-2xl">
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/90">Contact</p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight text-white md:text-4xl">
            Let&apos;s Build Something Great Together
          </h2>
        </div>


        {/* Collaboration Panel */}
        <GlassCard className="relative overflow-hidden p-6 md:p-8 mb-8" hover={false}>
          <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent" />
          <p className="text-sm uppercase tracking-[0.22em] text-fuchsia-200">Collaboration Panel</p>
          <h3 className="mt-3 text-2xl font-semibold text-white">Available for thoughtful engineering work</h3>
          <p className="mt-4 max-w-xl text-slate-300">
            If you&apos;re building something ambitious and need a developer who enjoys algorithms, AI systems,
            and polished product experiences, I&apos;d be glad to connect.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Motion.a
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://mail.google.com/mail/?view=cm&fs=1&to=1praneeth.jvp1@gmail.com"
              className="gradient-outline-button"
              target="_blank" rel="noopener noreferrer"
            >
              <Mail size={17} /> Send Gmail
            </Motion.a>
            <Motion.a
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://www.linkedin.com/in/venkata-praneeth-j-b31a40286/"
              className="gradient-outline-button"
              target="_blank" rel="noopener noreferrer"
            >
              <Linkedin size={17} /> LinkedIn
            </Motion.a>
            <Motion.a
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://github.com/praneethjv2006"
              className="gradient-outline-button"
              target="_blank" rel="noopener noreferrer"
            >
              <Github size={17} /> GitHub
            </Motion.a>
            <Motion.a
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://www.instagram.com/j.v.praneeth06?igsh=MW5lYzc1MWNrdnVxdw=="
              className="gradient-outline-button"
              target="_blank" rel="noopener noreferrer"
            >
              <Instagram size={17} /> Instagram
            </Motion.a>
          </div>
        </GlassCard>

        {/* Quick Links below Collaboration Panel */}
        <div>
          <p className="mb-3 text-sm uppercase tracking-[0.22em] text-fuchsia-200">Quick Links</p>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-2">
            {quickLinks.map((item, index) => {
              const Icon = item.icon
              return (
                <Motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                >
                  <Link to={item.to} className="group quick-link-card">
                    <span className="quick-link-icon">
                      <Icon size={18} />
                    </span>
                    <div>
                      <div className="flex items-center justify-between gap-3">
                        <h3 className="text-base font-medium text-white">{item.title}</h3>
                        <ArrowRight size={16} className="text-cyan-200 transition group-hover:translate-x-1" />
                      </div>
                      <p className="mt-2 text-sm text-slate-300">{item.description}</p>
                    </div>
                  </Link>
                </Motion.div>
              )
            })}
          </div>
        </div>

      </div>
    </Motion.section>
  )
}

export default ContactShowcase
