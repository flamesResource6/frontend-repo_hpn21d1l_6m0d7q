function ProjectCard({ title, role, image, cta, href, accent = 'green' }) {
  const accentColor = accent === 'red' ? 'var(--accent-red)' : 'var(--accent-green)'
  return (
    <div className="relative border border-white/10 rounded-lg overflow-hidden bg-black crt">
      {/* Image as video display */}
      <div className="h-44 w-full bg-black/60 relative">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-90"
          style={{ backgroundImage: `url(/${image})` }}
        />
        <div className="absolute inset-0 scanlines" />
        <div className="absolute inset-x-0 top-0 h-1 shine-bar" />
      </div>
      <div className="p-5 grid gap-3">
        <div className="flex items-center justify-between">
          <h3 className="text-white font-semibold tracking-wide glitch-text" data-text={title}>{title}</h3>
          <span className="text-[10px] uppercase tracking-widest font-mono" style={{ color: accentColor }}>Report</span>
        </div>
        <div className="bg-black/60 border rounded p-3 text-sm text-white/80" style={{ borderColor: accentColor }}>
          <span className="font-mono text-xs" style={{ color: accentColor }}>Role/Contribution</span>
          <p className="mt-1 text-white">{role}</p>
        </div>
        <div className="flex items-center justify-between">
          <a href={href} target="_blank" className="px-3 py-1.5 text-black font-semibold rounded transition-colors text-sm" style={{ backgroundColor: accentColor, boxShadow: `0 0 18px ${accentColor}80` }}>
            {cta}
          </a>
          <div className="text-[10px] text-white/40 font-mono">status: <span style={{ color: accentColor }}>stable</span></div>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="bg-black border-y border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="mb-6 flex items-center gap-3">
          <span className="h-2 w-2 rounded-sm bg-[var(--accent-green)]"></span>
          <h2 className="text-2xl font-bold text-white tracking-wide glitch-text" data-text="Projects">Projects</h2>
          <div className="h-px flex-1" style={{ background: 'linear-gradient(90deg, rgba(32,255,107,.6), transparent)' }}></div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <ProjectCard
            title="BEELZEBUZZ COMPANY"
            role="Projektowanie systemu progresji, balansu ekonomii, budowa narracji poprzez tekst UI i eventy."
            image="beelzebuzz-company-bg.jpg"
            cta="Play on Itch"
            href="https://kubeec.itch.io/beelzebuzz-company"
            accent="green"
          />
          <ProjectCard
            title="DEFEND THE FACTORY"
            role="Stworzenie kompletnego GDD, projektowanie i balansowanie mechaniki hybrydowej (Tower Defense + Automatyzacja), Level Design."
            image="defend-factory-bg.png"
            cta="Git Repo"
            href="https://github.com/Propethunio/Defend-The-Facotry"
            accent="red"
          />
          <ProjectCard
            title="MYSTERY FISHING VILLAGE"
            role="Całościowy Quest Design, mapowanie drzewek dialogowych, World Building, implementacja sekwencji w Unreal Blueprint."
            image="fishing-village-bg.png"
            cta="Download"
            href="https://drive.google.com/drive/u/1/folders/1qVWFGRWEyTDy6QBSLTFHBYigvfpqEU-e?hl=pl"
            accent="green"
          />
          <ProjectCard
            title="GHOST & CAT PUZZLE"
            role="Projektowanie zagadek środowiskowych, Level Design (3 poziomy), szybkie prototypowanie mechanik interakcji Duch/Kot."
            image="cat-puzzle-bg.png"
            cta="Play on Itch"
            href="https://daxkkomax.itch.io/fix-the-poziom"
            accent="red"
          />
        </div>
      </div>
    </section>
  )
}
