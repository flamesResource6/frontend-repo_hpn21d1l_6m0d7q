import { Mail, Linkedin } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="mb-6 flex items-center gap-3">
          <span className="h-2 w-2 rounded-sm bg-cyan-400"></span>
          <h2 className="text-2xl font-bold text-white tracking-wide">Ready to cooperate?</h2>
          <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/50 to-transparent"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-zinc-800 rounded-lg bg-gradient-to-br from-zinc-900 to-zinc-950 p-6">
            <p className="text-zinc-300">Looking for Game Designer roles. Let's connect.</p>
            <div className="mt-4 grid gap-3">
              <a href="mailto:nikodem.heitzman@gmail.com" className="inline-flex items-center gap-2 px-3 py-2 bg-cyan-500 text-black font-semibold rounded border border-cyan-400 hover:bg-cyan-400 transition-colors w-fit">
                <Mail size={16} /> nikodem.heitzman@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/nikodem-heitzman-32b607323/" target="_blank" className="inline-flex items-center gap-2 px-3 py-2 bg-zinc-900 text-zinc-100 rounded border border-zinc-700 hover:bg-zinc-800 w-fit">
                <Linkedin size={16} /> LinkedIn Profile
              </a>
            </div>
          </div>
          <div className="border border-zinc-800 rounded-lg bg-gradient-to-br from-zinc-900 to-zinc-950 p-6">
            <form className="grid gap-3">
              <Field label="Name" type="text" placeholder="Your name" />
              <Field label="Email" type="email" placeholder="you@example.com" />
              <Field label="Message" type="textarea" placeholder="Say hello..." />
              <button type="submit" className="px-4 py-2 bg-cyan-500 text-black font-semibold rounded border border-cyan-400 hover:bg-cyan-400 transition-colors w-fit">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({ label, type = 'text', placeholder }) {
  const common = "w-full px-3 py-2 bg-zinc-950/60 border border-zinc-800 rounded text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-cyan-400"
  return (
    <label className="grid gap-1 text-sm">
      <span className="font-mono text-cyan-400 tracking-widest uppercase">{label}</span>
      {type === 'textarea' ? (
        <textarea placeholder={placeholder} rows={5} className={common} />
      ) : (
        <input type={type} placeholder={placeholder} className={common} />
      )}
    </label>
  )
}
