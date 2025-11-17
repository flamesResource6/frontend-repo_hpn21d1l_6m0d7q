import { Mail, Linkedin, Heart } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="bg-black">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="mb-6 flex items-center gap-3">
          <span className="h-2 w-2 rounded-sm bg-[var(--accent-red)]"></span>
          <h2 className="text-2xl font-bold text-white tracking-wide glitch-text" data-text="Ready to cooperate?">Ready to cooperate?</h2>
          <div className="h-px flex-1" style={{ background: 'linear-gradient(90deg, var(--accent-red), transparent)' }}></div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-lg p-6 distorted-frame">
            <p className="text-white/80">Looking for Game Designer roles. Let's connect.</p>
            <div className="mt-4 grid gap-3">
              <a href="mailto:nikodem.heitzman@gmail.com" className="inline-flex items-center gap-2 px-3 py-2 bg-[var(--accent-green)] text-black font-semibold rounded glow-green border border-[var(--accent-green)]/60 hover:brightness-110 transition w-fit">
                <Mail size={16} /> nikodem.heitzman@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/nikodem-heitzman-32b607323/" target="_blank" className="inline-flex items-center gap-2 px-3 py-2 bg-black text-white rounded border border-white/15 hover:bg-white/5 w-fit">
                <Linkedin size={16} /> LinkedIn Profile
              </a>
              <div className="inline-flex items-center gap-2 text-sm text-white/60 mt-1">
                <Heart size={14} className="text-[var(--accent-red)]" /> Crafted with passion for systems & story
              </div>
            </div>
          </div>
          <div className="rounded-lg p-6 distorted-frame">
            <form className="grid gap-3">
              <Field label="Name" type="text" placeholder="Your name" />
              <Field label="Email" type="email" placeholder="you@example.com" />
              <Field label="Message" type="textarea" placeholder="Say hello..." />
              <button type="submit" className="px-4 py-2 bg-[var(--accent-red)] text-black font-semibold rounded glow-red border border-[var(--accent-red)]/70 hover:brightness-110 transition w-fit">
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
  const common = "w-full px-3 py-2 bg-black/60 border border-white/10 rounded text-white placeholder-white/40 focus:outline-none focus:border-[var(--accent-green)]"
  return (
    <label className="grid gap-1 text-sm">
      <span className="font-mono tracking-widest uppercase" style={{ color: 'var(--accent-green)' }}>{label}</span>
      {type === 'textarea' ? (
        <textarea placeholder={placeholder} rows={5} className={common} />
      ) : (
        <input type={type} placeholder={placeholder} className={common} />
      )}
    </label>
  )
}
