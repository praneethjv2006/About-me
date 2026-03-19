import { motion as Motion } from "framer-motion"

function GlassCard({ children, className = "", hover = true }) {
  return (
    <Motion.div
      whileHover={hover ? { y: -6, scale: 1.01 } : undefined}
      transition={{ type: "spring", stiffness: 140, damping: 20 }}
      className={`glass-card ${className}`}
    >
      {children}
    </Motion.div>
  )
}

export default GlassCard
