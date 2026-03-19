import { AnimatePresence } from "framer-motion"
import { Route, Routes, useLocation } from "react-router-dom"
import AnimatedBackground from "./components/AnimatedBackground"
import SiteNavbar from "./components/SiteNavbar"
import AchievementsPage from "./pages/AchievementsPage"
import EducationPage from "./pages/EducationPage"
import ExperiencePage from "./pages/ExperiencePage"
import HomePage from "./pages/HomePage"
import ProjectsPage from "./pages/ProjectsPage"

function App() {
  const location = useLocation()

  return (
    <div className="relative min-h-screen overflow-x-clip">
      <AnimatedBackground />
      <SiteNavbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/achievements" element={<AchievementsPage />} />
        </Routes>
      </AnimatePresence>
    </div>
  )
}

export default App
