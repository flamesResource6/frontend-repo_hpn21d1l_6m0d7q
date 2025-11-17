import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <footer className="border-t border-white/10 bg-black">
        <div className="max-w-6xl mx-auto px-4 py-6 text-xs text-white/50 flex items-center justify-between">
          <span className="font-mono">© {new Date().getFullYear()} NIKODEM HEITZMAN</span>
          <span className="font-mono"><span className="neon-red">Glitched</span> / <span className="neon-green">Neon</span> OS Interface</span>
        </div>
      </footer>
    </div>
  )
}

export default App
