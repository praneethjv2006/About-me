import { useEffect, useRef } from "react"
import { motion as Motion } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import SectionTitle from "./SectionTitle"
import GlassCard from "./ui/GlassCard"
import { experience } from "../data/portfolioData"

gsap.registerPlugin(ScrollTrigger)

function JourneySection() {
  const sectionRef = useRef(null)
  const lineRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0, transformOrigin: "top center" },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 30%",
            scrub: true,
          },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="journey" ref={sectionRef} className="px-6 py-24 md:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Experience"
          title="Hands-on internships and applied AI engineering"
          description="A timeline of practical experience in computer vision, digital twin simulation, and real-world product building."
        />

        <div className="relative mx-auto mt-12 max-w-4xl">
          <div className="absolute left-3 top-0 h-full w-px bg-white/10 md:left-1/2 md:-translate-x-1/2">
            <div ref={lineRef} className="h-full w-full bg-gradient-to-b from-cyan-300 to-fuchsia-400" />
          </div>

          <div className="space-y-8">
            {experience.map((item, index) => (
              <Motion.div
                key={`${item.period}-${item.title}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`relative md:w-1/2 ${index % 2 === 0 ? "md:pr-8" : "md:ml-auto md:pl-8"}`}
              >
                <span className="absolute left-0 top-8 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,0.9)] md:left-auto md:top-8 md:h-3 md:w-3 md:-translate-x-0 md:translate-y-0" />
                <GlassCard className="ml-6 p-5 md:ml-0">
                  <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">{item.period}</p>
                  <h3 className="mt-2 text-lg font-medium text-white">{item.title}</h3>
                  <p className="mt-1 text-sm text-fuchsia-200">{item.organization}</p>
                  <p className="mt-2 text-slate-300">{item.description}</p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-300">
                    {item.points.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-cyan-300" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </Motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default JourneySection
