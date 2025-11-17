export default function About() {
  return (
    <section id="about" className="bg-zinc-950 border-y border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-8">
        <div className="border border-zinc-800 rounded-lg bg-gradient-to-br from-zinc-900 to-zinc-950 p-6">
          <div className="text-xs font-mono text-zinc-400">/profile/config.yaml</div>
          <div className="mt-3 text-zinc-100 font-mono text-sm bg-zinc-950/60 border border-zinc-800 rounded p-4">
            role: Junior Game Designer
            <br />specializations:
            <br />  - Game Design
            <br />  - Narrative Designer
            <br />  - Mechanics Designer
          </div>
          <p className="mt-4 text-zinc-400">
            Hi, my name is Nikodem Heitzman. I'm a Junior Game Designer with a passion for immersive storytelling and engaging gameplay mechanics.
          </p>
        </div>
        <div className="border border-zinc-800 rounded-lg bg-gradient-to-br from-zinc-900 to-zinc-950 p-6">
          <div className="text-xs font-mono text-zinc-400">/properties</div>
          <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
            <div className="space-y-2">
              <Prop label="Location" value="Poland" />
              <Prop label="Role" value="Junior Game Designer" />
              <Prop label="Focus" value="Narrative, Mechanics" />
            </div>
            <div className="space-y-2">
              <Prop label="Experience" value="Student/Junior" />
              <Prop label="Engines" value="Unreal, Unity" />
              <Prop label="Tools" value="Blueprint, Jira, Git" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Prop({ label, value }) {
  return (
    <div className="bg-zinc-950/60 border border-zinc-800 rounded p-3">
      <div className="text-[10px] uppercase tracking-widest text-cyan-400 font-mono">{label}</div>
      <div className="text-zinc-200">{value}</div>
    </div>
  )
}
