const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#journey" },
  { label: "Credentials", href: "#credentials" },
  { label: "Contact", href: "#contact" },
]

function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-40 px-4 py-4 md:px-8">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3 backdrop-blur-lg">
        <a href="#home" className="text-sm uppercase tracking-[0.25em] text-cyan-300">
          AM
        </a>
        <ul className="hidden items-center gap-5 md:flex">
          {navItems.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="text-sm text-slate-300 transition hover:text-cyan-200">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <span className="hidden h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(34,211,238,0.8)] md:inline-block" />
      </nav>
    </header>
  )
}

export default Navbar
