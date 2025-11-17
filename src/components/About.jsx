export default function About() {
  return (
    <section id="about" className="bg-black border-y border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-8">
        <div className="rounded-lg p-6 distorted-frame">
          <div className="text-xs font-mono text-white/60">/profile/config.yaml</div>
          <div className="mt-3 text-white font-mono text-sm bg-black/60 border border-white/10 rounded p-4">
            role: <span className="neon-red">Junior Game Designer</span>
            <br />specializations:
            <br />  - <span className="neon-green">Game Design</span>
            <br />  - Narrative Designer
            <br />  - Mechanics Designer
          </div>
          <p className="mt-4 text-white/70">
            Hi, my name is Nikodem Heitzman. I'm a Junior Game Designer with a passion for immersive storytelling and engaging gameplay mechanics.
          </p>
        </div>
        <div className="rounded-lg p-6 distorted-frame">
          <div className="text-xs font-mono text-white/60">/properties</div>
          <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
            <div className="space-y-2">
              <Prop label="Location" value="Poland" accent="green" />
              <Prop label="Role" value="Junior Game Designer" accent="red" />
              <Prop label="Focus" value="Narrative, Mechanics" accent="green" />
            </div>
            <div className="space-y-2">
              <Prop label="Experience" value="Student/Junior" accent="red" />
              <Prop label="Engines" value="Unreal, Unity" accent="green" />
              <Prop label="Tools" value="Blueprint, Jira, Git" accent="red" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Prop({ label, value, accent = 'green' }) {
  const accentColor = accent === 'red' ? 'var(--accent-red)' : 'var(--accent-green)'
  return (
    <div className="bg-black/60 border rounded p-3" style={{ borderColor: accentColor }}>
      <div className="text-[10px] uppercase tracking-widest font-mono" style={{ color: accentColor }}>{label}</div>
      <div className="text-white">{value}</div>
    </div>
  )
}
