import { NavLink } from "react-router-dom"

const navItems = [
  { label: "Home", to: "/" },
  { label: "Education", to: "/education" },
  { label: "Experience", to: "/experience" },
  { label: "Projects", to: "/projects" },
  { label: "Achievements", to: "/achievements" },
]

function SiteNavbar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-40 px-4 py-4 md:px-8">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between rounded-2xl border border-white/10 bg-slate-950/55 px-4 py-3 backdrop-blur-xl">
        <NavLink to="/" className="text-sm font-semibold tracking-wide text-cyan-300">
          Praneeth J V
        </NavLink>

        <ul className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `rounded-full px-3 py-1.5 text-sm transition ${
                    isActive
                      ? "border border-cyan-300/35 bg-cyan-400/10 text-cyan-100"
                      : "text-slate-300 hover:bg-white/5 hover:text-cyan-200"
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=1praneeth.jvp1@gmail.com"
          className="rounded-full border border-fuchsia-300/35 bg-fuchsia-400/10 px-4 py-2 text-xs text-fuchsia-100 transition hover:bg-fuchsia-300/20 md:text-sm"
          target="_blank" rel="noopener noreferrer"
        >
          Contact
        </a>
      </nav>
    </header>
  )
}

export default SiteNavbar
