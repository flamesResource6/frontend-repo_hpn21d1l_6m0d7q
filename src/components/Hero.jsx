import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[70vh] grid place-items-center bg-zinc-950">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 w-full">
        <div className="max-w-6xl mx-auto px-4 py-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-2 py-1 border border-cyan-500/40 bg-cyan-500/10 text-cyan-300 rounded">
              <span className="h-1.5 w-1.5 rounded-sm bg-cyan-400"></span>
              <span className="font-mono text-xs tracking-widest">Portfolio Interface</span>
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white">
              NIKODEM HEITZMAN
            </h1>
            <p className="mt-3 text-zinc-300 font-mono">Junior Game Designer • Narrative Designer • Mechanics Designer</p>
            <p className="mt-6 text-zinc-400 max-w-xl">
              Hi, my name is Nikodem Heitzman. I'm a Junior Game Designer with a passion for immersive storytelling and engaging gameplay mechanics.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="px-4 py-2 bg-cyan-500 text-black font-semibold rounded border border-cyan-400 hover:bg-cyan-400 transition-colors">
                View Projects
              </a>
              <a href="#contact" className="px-4 py-2 bg-zinc-900 text-zinc-100 rounded border border-zinc-700 hover:bg-zinc-800">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,255,255,0.06)_0%,rgba(0,0,0,0.0)_60%)]" />
    </section>
  )
}
