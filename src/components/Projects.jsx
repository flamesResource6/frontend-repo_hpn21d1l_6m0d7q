function ProjectCard({ title, role, image, cta, href }) {
  return (
    <div className="border border-zinc-800 rounded-lg overflow-hidden bg-zinc-950">
      <div className="h-40 w-full bg-zinc-900" style={{ backgroundImage: `url(/${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
      <div className="p-5 grid gap-3">
        <div className="flex items-center justify-between">
          <h3 className="text-zinc-100 font-semibold tracking-wide">{title}</h3>
          <span className="text-[10px] uppercase tracking-widest text-cyan-400 font-mono">Report</span>
        </div>
        <div className="bg-zinc-900/60 border border-zinc-800 rounded p-3 text-sm text-zinc-300">
          <span className="text-cyan-400 font-mono text-xs">Role/Contribution</span>
          <p className="mt-1 text-zinc-200">{role}</p>
        </div>
        <div className="flex items-center justify-between">
          <a href={href} target="_blank" className="px-3 py-1.5 bg-cyan-500 text-black font-semibold rounded border border-cyan-400 hover:bg-cyan-400 transition-colors text-sm">
            {cta}
          </a>
          <div className="text-[10px] text-zinc-500 font-mono">status: stable</div>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="bg-zinc-950 border-y border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="mb-6 flex items-center gap-3">
          <span className="h-2 w-2 rounded-sm bg-cyan-400"></span>
          <h2 className="text-2xl font-bold text-white tracking-wide">Projects</h2>
          <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/50 to-transparent"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <ProjectCard
            title="BEELZEBUZZ COMPANY"
            role="Projektowanie systemu progresji, balansu ekonomii, budowa narracji poprzez tekst UI i eventy."
            image="beelzebuzz-company-bg.jpg"
            cta="Play on Itch"
            href="https://kubeec.itch.io/beelzebuzz-company"
          />
          <ProjectCard
            title="DEFEND THE FACTORY"
            role="Stworzenie kompletnego GDD, projektowanie i balansowanie mechaniki hybrydowej (Tower Defense + Automatyzacja), Level Design."
            image="defend-factory-bg.png"
            cta="Git Repo"
            href="https://github.com/Propethunio/Defend-The-Facotry"
          />
          <ProjectCard
            title="MYSTERY FISHING VILLAGE"
            role="Całościowy Quest Design, mapowanie drzewek dialogowych, World Building, implementacja sekwencji w Unreal Blueprint."
            image="fishing-village-bg.png"
            cta="Download"
            href="https://drive.google.com/drive/u/1/folders/1qVWFGRWEyTDy6QBSLTFHBYigvfpqEU-e?hl=pl"
          />
          <ProjectCard
            title="GHOST & CAT PUZZLE"
            role="Projektowanie zagadek środowiskowych, Level Design (3 poziomy), szybkie prototypowanie mechanik interakcji Duch/Kot."
            image="cat-puzzle-bg.png"
            cta="Play on Itch"
            href="https://daxkkomax.itch.io/fix-the-poziom"
          />
        </div>
      </div>
    </section>
  )
}
