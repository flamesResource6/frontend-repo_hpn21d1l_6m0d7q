import { Menu, GitBranch, Aperture, Zap, Sparkles, Mail } from 'lucide-react'

function NavButton({ label, href, accent = 'green' }) {
  const dot = accent === 'red' ? 'bg-[var(--accent-red)]' : 'bg-[var(--accent-green)]'
  const border = accent === 'red' ? 'border-[var(--accent-red)]/50 hover:border-[var(--accent-red)]' : 'border-[var(--accent-green)]/50 hover:border-[var(--accent-green)]'
  return (
    <a href={href} className={`px-3 py-1.5 rounded border ${border} bg-black/60 hover:bg-black/80 text-white text-xs tracking-wider uppercase inline-flex items-center gap-2 transition-colors`}>
      <span className={`h-1.5 w-1.5 rounded-sm ${dot} animate-pulse`}></span>
      {label}
    </a>
  )
}

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/50 bg-black/80 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 grid place-items-center distorted-frame neon-border-red text-white font-mono text-sm font-bold">NH</div>
          <div className="hidden sm:flex items-center gap-2 text-white/70 text-xs">
            <Aperture size={14} className="neon-green" />
            <span className="font-mono">Nikodem Heitzman</span>
            <span className="mx-1">/</span>
            <span className="font-mono glitch-text" data-text="Game Designer">Game Designer</span>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-2">
          <NavButton label="Home" href="#home" accent="green" />
          <NavButton label="Projects" href="#projects" accent="red" />
          <NavButton label="Skills" href="#skills" accent="green" />
          <NavButton label="Contact" href="#contact" accent="red" />
        </nav>
        <button className="md:hidden p-2 border border-white/10 rounded bg-black text-white">
          <Menu size={18} />
        </button>
      </div>
    </header>
  )
}
