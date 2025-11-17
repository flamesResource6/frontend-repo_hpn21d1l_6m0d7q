import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <footer className="border-t border-zinc-800 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-4 py-6 text-xs text-zinc-500 flex items-center justify-between">
          <span className="font-mono">© {new Date().getFullYear()} NIKODEM HEITZMAN</span>
          <span className="font-mono text-cyan-400">Industrial Minimal UI</span>
        </div>
      </footer>
    </div>
  )
}

export default App
