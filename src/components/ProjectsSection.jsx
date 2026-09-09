import { useState } from "react"
import { AnimatePresence, motion as Motion } from "framer-motion"
import { ExternalLink, Github, X } from "lucide-react"
import SectionTitle from "./SectionTitle"
import GlassCard from "./ui/GlassCard"
import { projects } from "../data/portfolioData"

function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id="projects" className="px-6 py-24 md:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Projects"
          title="Project showcase with deep technical context"
          description="Select any project card to explore architecture, implementation highlights, and impact details in depth."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <Motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard className="group flex h-full flex-col p-6" hover={false}>
                <p className="text-sm uppercase tracking-[0.2em] text-cyan-300/90">Case Study</p>
                <p className="mt-2 text-xs uppercase tracking-[0.16em] text-fuchsia-200/90">{project.period}</p>
                <h3 className="mt-3 text-xl font-medium text-white">{project.title}</h3>
                <p className="mt-3 text-slate-300">{project.description}</p>
                <p className="mt-3 text-sm text-slate-400">{project.context}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={`${project.title}-${tech}`}
                      className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </GlassCard>
            </Motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedProject ? (
            <Motion.div
              key="project-modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 p-4 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            >
              <Motion.div
                key={selectedProject.title}
                initial={{ opacity: 0, y: 26, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 18, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                className="max-h-[86vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-white/15 bg-[linear-gradient(145deg,rgba(7,17,31,0.98),rgba(6,11,22,0.95))] p-6 shadow-[0_40px_100px_rgba(0,0,0,0.6)]"
                onClick={(event) => event.stopPropagation()}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">{selectedProject.period}</p>
                    <h3 className="mt-2 text-2xl font-semibold text-white md:text-3xl">{selectedProject.title}</h3>
                    <p className="mt-2 text-sm text-fuchsia-200">{selectedProject.context}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedProject(null)}
                    className="rounded-xl border border-white/15 bg-white/5 p-2 text-slate-200 transition hover:bg-white/10"
                  >
                    <X size={18} />
                  </button>
                </div>

                <p className="mt-5 text-slate-300">{selectedProject.description}</p>

                <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-sm uppercase tracking-[0.16em] text-cyan-300">Implementation Highlights</p>
                  <ul className="mt-4 space-y-3 text-slate-300">
                    {selectedProject.bullets.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <span className="mt-1 inline-block h-2 w-2 rounded-full bg-cyan-300" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {selectedProject.stack.map((tech) => (
                    <span
                      key={`${selectedProject.title}-${tech}-modal`}
                      className="rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 text-xs text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  <a href={selectedProject.live} className="btn-secondary">
                    Live Demo <ExternalLink size={16} />
                  </a>
                  <a href={selectedProject.source} className="btn-secondary">
                    Repository <Github size={16} />
                  </a>
                </div>
              </Motion.div>
            </Motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default ProjectsSection
