import { motion as Motion } from "framer-motion"

function PageTransition({ children }) {
  return (
    <Motion.section
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -18 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="px-6 pb-20 pt-28 md:px-10 lg:px-16"
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </Motion.section>
  )
}

export default PageTransition
