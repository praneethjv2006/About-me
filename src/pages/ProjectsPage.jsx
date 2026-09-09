import { useEffect, useState } from "react"
import { AnimatePresence, motion as Motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion"
import { ArrowRight, ExternalLink, Github, Layers3, Sparkles, X } from "lucide-react"
import PageTransition from "../components/PageTransition"
import SectionTitle from "../components/SectionTitle"
import { projects } from "../data/portfolioData"

function InteractiveProjectSurface({ children, className = "" }) {
  const pointerX = useMotionValue(50)
  const pointerY = useMotionValue(50)
  const rotateXRaw = useMotionValue(0)
  const rotateYRaw = useMotionValue(0)

  const springX = useSpring(pointerX, { stiffness: 180, damping: 26 })
  const springY = useSpring(pointerY, { stiffness: 180, damping: 26 })
  const rotateX = useSpring(rotateXRaw, { stiffness: 180, damping: 22 })
  const rotateY = useSpring(rotateYRaw, { stiffness: 180, damping: 22 })

  const spotlight = useMotionTemplate`radial-gradient(340px circle at ${springX}% ${springY}%, rgba(255,255,255,0.16), transparent 42%)`

  const handleMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect()
    const xPercent = ((event.clientX - bounds.left) / bounds.width) * 100
    const yPercent = ((event.clientY - bounds.top) / bounds.height) * 100

    pointerX.set(xPercent)
    pointerY.set(yPercent)
    rotateXRaw.set(((50 - yPercent) / 50) * 2.6)
    rotateYRaw.set(((xPercent - 50) / 50) * 3.2)
  }

  const handleLeave = () => {
    pointerX.set(50)
    pointerY.set(50)
    rotateXRaw.set(0)
    rotateYRaw.set(0)
  }

  return (
    <Motion.div
      className={`group relative [transform-style:preserve-3d] ${className}`}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY }}
    >
      <Motion.div
        style={{ background: spotlight }}
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      {children}
    </Motion.div>
  )
}

function ProjectShowcaseCard({ project, index, onOpen }) {
  return (
    <Motion.article
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.55, delay: index * 0.09, ease: "easeOut" }}
    >
      <InteractiveProjectSurface className="rounded-[32px]">
        <div className="project-showcase-gradient" />
        <div className="project-showcase-card">
          <div className="project-showcase-topline" />
          <div className="project-showcase-sheen" />

          <div className="relative flex flex-wrap items-start gap-5">
            <div className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-3">
                <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/85">{project.period}</p>
                <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-[0.68rem] uppercase tracking-[0.2em] text-slate-300">
                  Case Study {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="mt-4 max-w-4xl text-2xl font-semibold leading-tight text-white md:text-[2rem]">{project.title}</h3>
              <p className="mt-2 text-sm uppercase tracking-[0.22em] text-cyan-300/80">{project.context}</p>
              {/* Tagline and description removed as requested */}
            </div>
          </div>

          <div className="mt-8 grid gap-4 grid-cols-1">
            {project.bullets.map((point) => (
              <div key={point} className="project-highlight-card">
                <span className="project-highlight-dot" />
                <p className="text-sm leading-7 text-slate-300">{point}</p>
              </div>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap gap-2.5">
            {project.stack.map((tech, techIndex) => (
              <Motion.span
                key={`${project.title}-${tech}`}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className="project-tech-chip"
                style={{ transitionDelay: `${techIndex * 35}ms` }}
              >
                <Sparkles size={13} />
                {tech}
              </Motion.span>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-end gap-3 border-t border-white/10 pt-5">
            <a href={project.source} target="_blank" rel="noreferrer" className="project-button-secondary">
              GitHub
              <Github size={16} />
            </a>
          </div>
        </div>
      </InteractiveProjectSurface>
    </Motion.article>
  )
}

function ProjectDetailsModal({ project, onClose }) {
  return (
    <Motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/78 px-4 py-6 backdrop-blur-xl md:px-6"
      onClick={onClose}
    >
      <Motion.aside
        initial={{ opacity: 0, y: 30, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 30, scale: 0.96 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="project-modal-shell scrollbar-hide"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="project-showcase-mesh" />
        <div className="experience-panel-noise" />
        <div className="pointer-events-none absolute left-[-12%] top-[-14%] h-64 w-64 rounded-full bg-cyan-400/14 blur-3xl" />
        <div className="pointer-events-none absolute bottom-[-16%] right-[-10%] h-72 w-72 rounded-full bg-fuchsia-400/12 blur-3xl" />

        <div className="relative z-10 p-6 md:p-8 lg:p-10">
          <div className="flex items-start justify-between gap-4">
            <div className="max-w-4xl">
              <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/80">{project.period}</p>
              <h3 className="mt-4 text-3xl font-semibold leading-tight text-white md:text-5xl">{project.title}</h3>
              <p className="mt-4 max-w-3xl text-base text-fuchsia-100/86 md:text-lg">{project.tagline}</p>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-slate-100 transition hover:bg-white/[0.09]"
            >
              <X size={18} />
            </button>
          </div>

          <div className="mt-8 grid gap-6 xl:grid-cols-[1.2fr,0.8fr]">
            <div className="space-y-6">
              <section className="project-detail-panel">
                <p className="project-detail-label">Extended Description</p>
                <p className="mt-4 text-sm leading-8 text-slate-300 md:text-base">{project.description}</p>
              </section>

              <section className="project-detail-panel">
                <p className="project-detail-label">Problem Statement</p>
                <p className="mt-4 text-sm leading-8 text-slate-300 md:text-base">{project.problem}</p>
              </section>

              <section className="project-detail-panel">
                <p className="project-detail-label">Motivation</p>
                <p className="mt-4 text-sm leading-8 text-slate-300 md:text-base">{project.motivation}</p>
              </section>

              <section className="project-detail-panel">
                <p className="project-detail-label">Key Technical Challenges</p>
                <div className="mt-5 space-y-4">
                  {project.challenges.map((challenge) => (
                    <div key={`${project.title}-${challenge.title}`} className="project-challenge-card">
                      <p className="text-sm font-medium text-white">{challenge.title}</p>
                      <p className="mt-3 text-sm leading-7 text-slate-300">{challenge.solution}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <div className="space-y-6">
              <section className="project-detail-panel">
                <p className="project-detail-label">Architecture Overview</p>
                <div className="mt-5 space-y-3">
                  {project.architecture.map((item) => (
                    <div key={`${project.title}-${item}`} className="project-architecture-row">
                      <span className="project-highlight-dot" />
                      <p className="text-sm leading-7 text-slate-300">{item}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="project-detail-panel">
                <p className="project-detail-label">Technology Stack</p>
                <div className="mt-5 flex flex-wrap gap-2.5">
                  {project.stack.map((tech) => (
                    <span key={`${project.title}-${tech}-detail`} className="project-tech-chip">
                      <Layers3 size={13} />
                      {tech}
                    </span>
                  ))}
                </div>
              </section>

              <section className="project-detail-panel">
                <p className="project-detail-label">Screenshots / UI Previews</p>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {project.previews.map((preview) => (
                    <div key={`${project.title}-${preview.label}`} className="project-preview-card">
                      <div className="project-preview-frame">
                        <div className="project-preview-orb project-preview-orb-a" />
                        <div className="project-preview-orb project-preview-orb-b" />
                        <span className="project-preview-badge">Preview</span>
                        <p className="relative z-10 mt-auto text-sm font-medium text-white">{preview.label}</p>
                      </div>
                      <p className="mt-3 text-xs leading-6 text-slate-300">{preview.caption}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="flex flex-wrap gap-3">
                <a href={project.source} target="_blank" rel="noreferrer" className="project-button-primary">
                  {project.repositoryLabel}
                  <ExternalLink size={16} />
                </a>
              </section>
            </div>
          </div>
        </div>
      </Motion.aside>
    </Motion.div>
  )
}


function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [modalLock, setModalLock] = useState(false)

  useEffect(() => {
    if (!selectedProject) {
      setModalLock(false)
      return undefined
    }

    const previousOverflow = document.body.style.overflow
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        handleCloseModal()
      }
    }

    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", handleEscape)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener("keydown", handleEscape)
    }
  }, [selectedProject])

  // Prevent opening/closing modal while animating
  const handleOpenModal = (project) => {
    if (modalLock || selectedProject) return
    setModalLock(true)
    setSelectedProject(project)
  }

  const handleCloseModal = () => {
    if (modalLock) return
    setModalLock(true)
    setSelectedProject(null)
  }

  // Unlock after animation duration (0.4s)
  useEffect(() => {
    if (!modalLock) return
    const timeout = setTimeout(() => setModalLock(false), 400)
    return () => clearTimeout(timeout)
  }, [modalLock])

  return (
    <PageTransition>
      <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-[linear-gradient(180deg,rgba(6,9,18,0.98),rgba(8,12,22,0.96))] px-5 py-8 sm:px-8 lg:px-10 lg:py-10">
        <div className="project-showcase-mesh" />
        <div className="experience-panel-noise" />
        <div className="pointer-events-none absolute left-[-12%] top-[-14%] h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="pointer-events-none absolute right-[-12%] top-[18%] h-64 w-64 rounded-full bg-indigo-400/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-[-16%] right-[-10%] h-72 w-72 rounded-full bg-fuchsia-400/[0.08] blur-3xl" />

        <section className="relative z-10">
          <SectionTitle
            eyebrow="Projects"
            title="Projects & Case Studies"
            description="A curated set of builds, hackathon entries, and engineering case studies."
          />
          <div className="space-y-8">
            {projects.map((project, index) => (
              <ProjectShowcaseCard
                key={`${project.period}-${project.title}`}
                project={project}
                index={index}
                onOpen={handleOpenModal}
              />
            ))}
          </div>
        </section>
      </div>

      <AnimatePresence>
        {selectedProject ? <ProjectDetailsModal project={selectedProject} onClose={handleCloseModal} /> : null}
      </AnimatePresence>
    </PageTransition>
  )
}

export default ProjectsPage
