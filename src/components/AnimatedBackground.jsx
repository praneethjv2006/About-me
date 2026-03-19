import { useEffect, useRef } from "react"
import gsap from "gsap"

function AnimatedBackground() {
  const blobARef = useRef(null)
  const blobBRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(blobARef.current, {
        x: 120,
        y: 60,
        duration: 9,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      })

      gsap.to(blobBRef.current, {
        x: -100,
        y: -40,
        duration: 11,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 animated-grid opacity-30" />
      <div ref={blobARef} className="gradient-blob left-[-120px] top-[120px] h-[360px] w-[360px] bg-cyan-500/30" />
      <div ref={blobBRef} className="gradient-blob bottom-[-130px] right-[-60px] h-[330px] w-[330px] bg-fuchsia-500/25" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.14),transparent_55%),radial-gradient(circle_at_80%_80%,_rgba(217,70,239,0.12),transparent_45%)]" />
    </div>
  )
}

export default AnimatedBackground
