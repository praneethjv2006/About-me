import { motion as Motion } from "framer-motion"

function SectionTitle({ eyebrow, title, description }) {
  return (
    <Motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mb-10"
    >
      <p className="text-sm uppercase tracking-[0.25em] text-cyan-300/80">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold leading-tight text-white md:text-4xl">{title}</h2>
      <Motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
        className="section-title-underline"
      />
      {description ? <p className="mt-4 max-w-2xl text-slate-300">{description}</p> : null}
    </Motion.div>
  )
}

export default SectionTitle
