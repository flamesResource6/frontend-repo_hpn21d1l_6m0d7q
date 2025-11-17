function Gauge({ label, value, accent = 'green' }) {
  const accentColor = accent === 'red' ? 'var(--accent-red)' : 'var(--accent-green)'
  return (
    <div className="grid gap-1">
      <div className="flex items-center justify-between text-xs">
        <span className="font-mono tracking-widest uppercase" style={{ color: accentColor }}>{label}</span>
        <span className="text-white/60 font-mono">{value}%</span>
      </div>
      <div className="h-2 bg-black rounded border border-white/10 overflow-hidden relative">
        <div className="h-full" style={{ width: `${value}%`, background: `linear-gradient(90deg, ${accentColor} 0%, rgba(255,255,255,.85) 100%)`, boxShadow: `0 0 22px ${accentColor}80` }} />
        <div className="absolute inset-0 opacity-30 shine-bar" />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="bg-black border-y border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-3 gap-6">
        <div className="rounded-lg p-6 distorted-frame">
          <h3 className="text-white font-semibold mb-4 glitch-text" data-text="Game Design">Game Design</h3>
          <div className="grid gap-3">
            <Gauge label="Narrative" value={80} accent="red" />
            <Gauge label="Mechanics" value={85} accent="green" />
            <Gauge label="UI/UX" value={70} accent="red" />
          </div>
        </div>
        <div className="rounded-lg p-6 distorted-frame">
          <h3 className="text-white font-semibold mb-4 glitch-text" data-text="Technical Skills">Technical Skills</h3>
          <div className="grid gap-3">
            <Gauge label="Unreal" value={75} accent="green" />
            <Gauge label="Unity" value={65} accent="red" />
            <Gauge label="Blueprint" value={80} accent="green" />
          </div>
        </div>
        <div className="rounded-lg p-6 distorted-frame">
          <h3 className="text-white font-semibold mb-4 glitch-text" data-text="Project Management">Project Management</h3>
          <div className="grid gap-3">
            <Gauge label="Collaboration" value={85} accent="green" />
            <Gauge label="Jira/Agile" value={70} accent="red" />
            <Gauge label="Git" value={75} accent="green" />
          </div>
        </div>
      </div>
    </section>
  )
}
