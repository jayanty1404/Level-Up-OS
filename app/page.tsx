import { motion } from "framer-motion";

const features = [
  "AI Study Planner", "NOVA AI Assistant", "Focus Mode", "Gamification System", "Homework Tracker", "Analytics Dashboard", "Study Rooms", "Habit Tracker"
];

export default function Home() {
  return (
    <main className="min-h-screen bg-grid bg-[size:30px_30px]">
      <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/70 backdrop-blur px-6 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="text-xl font-bold tracking-wide">LEVELUP <span className="text-blue-400">OS</span></div>
          <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
            <a href="#features">Features</a><a href="#ranks">Ranks</a><a href="#pricing">Pricing</a>
          </nav>
          <button className="rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 text-sm font-semibold">Start Free</button>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2">
        <div>
          <p className="mb-4 text-blue-300">Turn Your Life Into A Game.</p>
          <h1 className="text-5xl font-black leading-tight">Level Up Your Life Like A Game.</h1>
          <p className="mt-5 max-w-xl text-slate-300">The AI-powered Student OS built for ambitious students who want to focus harder, study smarter, and achieve more.</p>
          <div className="mt-8 flex gap-4">
            <button className="rounded-xl bg-blue-500 px-5 py-3 font-semibold shadow-glow">Start Free</button>
            <button className="rounded-xl border border-purple-300/30 px-5 py-3">Watch Demo</button>
          </div>
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass glow-border rounded-3xl p-6 shadow-violetGlow">
          <div className="mb-4 flex items-center justify-between"><p>NOVA Command Center</p><p>Level 27</p></div>
          <div className="h-3 rounded bg-white/10"><div className="h-3 w-2/3 rounded bg-gradient-to-r from-blue-400 to-purple-500"/></div>
          <div className="mt-5 grid grid-cols-2 gap-4 text-sm">
            <div className="rounded-xl bg-white/5 p-4">🔥 21 Day Streak</div>
            <div className="rounded-xl bg-white/5 p-4">⚡ 3,240 XP</div>
            <div className="rounded-xl bg-white/5 p-4">🎯 Focus: 4h 20m</div>
            <div className="rounded-xl bg-white/5 p-4">🏆 Rank: Study Warrior</div>
          </div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-6">
        <div className="grid gap-4 md:grid-cols-4">
          {['3.2M XP Earned','50K+ Focus Sessions','20+ Countries','120K Missions Completed'].map((s)=><div key={s} className="glass rounded-2xl p-4 text-center">{s}</div>)}
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="mb-6 text-3xl font-bold">Premium Feature Stack</h2>
        <div className="grid gap-4 md:grid-cols-4">
          {features.map((f) => <div key={f} className="glass rounded-2xl p-5 text-sm hover:shadow-glow transition">{f}</div>)}
        </div>
      </section>

      <section id="ranks" className="mx-auto max-w-7xl px-6 py-10">
        <h2 className="mb-6 text-3xl font-bold">Official Rank System (1000 XP = 1 Level)</h2>
        <div className="glass rounded-2xl p-6 text-sm leading-8">
          Discipline Soldier (1–10) → Focus Knight (11–20) → Study Warrior (21–30) → Elite Grinder (31–40) → Master Scholar (41–50) → Strategy Commander (51–60) → Academic Titan (61–70) → Quantum Achiever (71–80) → Legendary Prodigy (81–90) → NOVA Ascendant (91–100). Prestige: Dimension Breaker, Time Conqueror, Mythic Overmind, Celestial Emperor, The Ascended One.
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="mb-6 text-3xl font-bold">Plans</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {["Free","Pro — ₹199/mo","Elite — ₹499/mo"].map((p, i)=> <div key={p} className={`glass rounded-2xl p-6 ${i>0?'glow-border':''}`}><p className="font-bold">{p}</p><p className="mt-2 text-sm text-slate-300">{i===0?'Basic tools, limited AI and rooms':i===1?'Unlimited Nova AI, analytics, elite rooms':'All features, AI mentor, prestige cosmetics'}</p></div>)}
        </div>
      </section>
    </main>
  );
}
