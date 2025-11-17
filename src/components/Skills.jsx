function Gauge({ label, value }) {
  return (
    <div className="grid gap-1">
      <div className="flex items-center justify-between text-xs">
        <span className="font-mono text-cyan-400 tracking-widest uppercase">{label}</span>
        <span className="text-zinc-400 font-mono">{value}%</span>
      </div>
      <div className="h-2 bg-zinc-900 rounded border border-zinc-800 overflow-hidden">
        <div className="h-full bg-cyan-500" style={{ width: `${value}%` }} />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="bg-zinc-950 border-y border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-3 gap-6">
        <div className="border border-zinc-800 rounded-lg bg-gradient-to-br from-zinc-900 to-zinc-950 p-6">
          <h3 className="text-zinc-100 font-semibold mb-4">Game Design</h3>
          <div className="grid gap-3">
            <Gauge label="Narrative" value={80} />
            <Gauge label="Mechanics" value={85} />
            <Gauge label="UI/UX" value={70} />
          </div>
        </div>
        <div className="border border-zinc-800 rounded-lg bg-gradient-to-br from-zinc-900 to-zinc-950 p-6">
          <h3 className="text-zinc-100 font-semibold mb-4">Technical Skills</h3>
          <div className="grid gap-3">
            <Gauge label="Unreal" value={75} />
            <Gauge label="Unity" value={65} />
            <Gauge label="Blueprint" value={80} />
          </div>
        </div>
        <div className="border border-zinc-800 rounded-lg bg-gradient-to-br from-zinc-900 to-zinc-950 p-6">
          <h3 className="text-zinc-100 font-semibold mb-4">Project Management</h3>
          <div className="grid gap-3">
            <Gauge label="Collaboration" value={85} />
            <Gauge label="Jira/Agile" value={70} />
            <Gauge label="Git" value={75} />
          </div>
        </div>
      </div>
    </section>
  )
}
