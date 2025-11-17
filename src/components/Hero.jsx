import Spline from '@splinetool/react-spline'
import { Flame } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[80vh] grid place-items-center bg-black text-white overflow-hidden">
      {/* Animated data-stream background */}
      <div className="absolute inset-0 data-stream" />

      {/* Subtle vignette and glow grid */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08)_0%,rgba(0,0,0,0.0)_60%)] mix-blend-overlay" />

      {/* Spline layer as hologram */}
      <div className="absolute inset-0 opacity-70">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 w-full">
        <div className="max-w-6xl mx-auto px-4 py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-2 py-1 border neon-border-green bg-black/60 text-white rounded">
              <span className="h-1.5 w-1.5 rounded-sm bg-[var(--accent-green)] animate-pulse"></span>
              <span className="font-mono text-xs tracking-widest">SYSTEM ONLINE — Portfolio Interface</span>
            </div>
            <h1 className="mt-5 text-5xl sm:text-6xl md:text-7xl font-black tracking-tight glitch-text" data-text="NIKODEM HEITZMAN">
              NIKODEM HEITZMAN
            </h1>
            <div className="mt-4 flex items-center gap-3">
              <span className="text-sm font-mono uppercase tracking-widest">Junior <span className="neon-red">Game Designer</span> · <span className="neon-green">Narrative Designer</span> · Mechanics Designer</span>
              <span className="inline-flex items-center justify-center h-8 w-8 rounded-full glow-red bg-[var(--accent-red)]/20">
                <Flame size={16} className="text-[var(--accent-red)]" />
              </span>
            </div>
            <p className="mt-6 text-white/80 max-w-xl">
              Designing systems, stories and experiences. Blending narrative intent with readable mechanics and player feedback.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="px-5 py-2 bg-[var(--accent-green)] text-black font-semibold rounded glow-green border border-[var(--accent-green)]/70 hover:brightness-110 transition">
                View Projects
              </a>
              <a href="#contact" className="px-5 py-2 bg-black text-white rounded border border-white/15 hover:bg-white/5">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Glitched frame */}
      <div className="absolute inset-x-4 bottom-6 top-6 pointer-events-none distorted-frame" />
    </section>
  )
}
