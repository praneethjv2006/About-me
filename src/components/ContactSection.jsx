import { useState } from "react"
import { motion as Motion } from "framer-motion"
import { Github, Linkedin, Send, Twitter } from "lucide-react"
import SectionTitle from "./SectionTitle"
import GlassCard from "./ui/GlassCard"
import { socialLinks } from "../data/portfolioData"

const iconMap = {
  GitHub: Github,
  LinkedIn: Linkedin,
  X: Twitter,
}

function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 2200)
  }

  return (
    <section id="contact" className="px-6 pb-20 pt-24 md:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Contact"
          title="Let us build something exceptional"
          description="Open to product collaborations, frontend leadership roles, and ambitious ideas with high quality standards."
        />

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <GlassCard className="p-6 md:p-8" hover={false}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <label className="block">
                <span className="mb-2 block text-sm text-slate-300">Name</span>
                <input className="field" type="text" name="name" placeholder="Your full name" required />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm text-slate-300">Email</span>
                <input className="field" type="email" name="email" placeholder="you@example.com" required />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm text-slate-300">Message</span>
                <textarea className="field min-h-32" name="message" placeholder="Tell me about your idea" required />
              </label>

              <Motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="btn-primary w-full justify-center"
              >
                {submitted ? "Message Sent" : "Send Message"} <Send size={17} />
              </Motion.button>
            </form>
          </GlassCard>

          <GlassCard className="p-6 md:p-8">
            <h3 className="text-xl font-medium text-white">Connect Online</h3>
            <p className="mt-3 text-slate-300">
              I regularly share engineering notes, UI experiments, and product-building insights.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {socialLinks.map((social) => {
                const Icon = iconMap[social.label] ?? Github
                return (
                  <a key={social.label} href={social.href} className="social-link">
                    <Icon size={17} />
                    {social.label}
                  </a>
                )
              })}
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
