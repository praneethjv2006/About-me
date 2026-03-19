import { motion as Motion } from "framer-motion"
import { Award, Medal, Sparkles, Trophy } from "lucide-react"
import PageTransition from "../components/PageTransition"
import SectionTitle from "../components/SectionTitle"
import GlassCard from "../components/ui/GlassCard"
import { achievements } from "../data/portfolioData"

const iconList = [Trophy, Medal, Award, Sparkles, Trophy]

function AchievementsPage() {
  return (
    <PageTransition>
      <SectionTitle
        eyebrow="Achievements"
        title="Competitive milestones and distinctions"
        description="Prestigious accomplishments presented in animated, badge-inspired cards with scroll-reveal interactions."
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {achievements.map((item, index) => {
          const Icon = iconList[index % iconList.length]

          return (
            <Motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <GlassCard className="h-full p-6">
                <div className="mb-4 inline-flex rounded-xl border border-fuchsia-300/35 bg-fuchsia-400/10 p-2 text-fuchsia-100">
                  <Icon size={20} />
                </div>
                <h3 className="text-lg text-white">{item.title}</h3>
                <p className="mt-3 text-slate-300">{item.description}</p>
                <p className="mt-4 text-sm uppercase tracking-[0.2em] text-cyan-300">{item.year}</p>
              </GlassCard>
            </Motion.div>
          )
        })}
      </div>
    </PageTransition>
  )
}

export default AchievementsPage
