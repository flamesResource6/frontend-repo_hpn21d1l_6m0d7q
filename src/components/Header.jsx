import { Menu, GitBranch, Home, FolderKanban, Settings2, Mail } from 'lucide-react'

function NavButton({ label, href }) {
  return (
    <a href={href} className="px-3 py-1.5 rounded border border-zinc-700/80 bg-zinc-900/60 hover:bg-zinc-800/70 text-zinc-200 text-xs tracking-wider uppercase inline-flex items-center gap-2 transition-colors">
      <span className="h-1.5 w-1.5 rounded-sm bg-cyan-400"></span>
      {label}
    </a>
  )
}

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-zinc-950/70 bg-zinc-950/90 border-b border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 grid place-items-center border border-zinc-700 rounded bg-zinc-900 text-cyan-400 font-mono text-sm font-bold">NH</div>
          <div className="hidden sm:flex items-center gap-2 text-zinc-400 text-xs">
            <GitBranch size={14} className="text-cyan-400" />
            <span className="font-mono">Nikodem Heitzman</span>
            <span className="mx-1">/</span>
            <span className="font-mono">Game Designer</span>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-2">
          <NavButton label="Home" href="#home" />
          <NavButton label="Projects" href="#projects" />
          <NavButton label="Skills" href="#skills" />
          <NavButton label="Contact" href="#contact" />
        </nav>
        <button className="md:hidden p-2 border border-zinc-700 rounded bg-zinc-900 text-zinc-300">
          <Menu size={18} />
        </button>
      </div>
    </header>
  )
}
