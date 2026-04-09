import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const pages = [
  {
    name: 'Home',
    icon: '🏠',
    content: (
      <div className="space-y-4">
        {/* Status row */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🪰</span>
            <div>
              <div className="font-bold text-white text-lg">Windy Fly</div>
              <div className="text-xs text-green-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>Running
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-xs text-gray-500">Uptime</div>
            <div className="text-sm font-mono text-windy-sky">14d 6h 23m</div>
          </div>
        </div>

        {/* Cost bar */}
        <div className="bg-black/30 rounded-xl p-4">
          <div className="flex justify-between text-xs text-gray-400 mb-2">
            <span>Today's Spend</span>
            <span className="text-windy-sky">$0.42 / $5.00</span>
          </div>
          <div className="w-full h-2 bg-windy-darker rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '8.4%' }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-full bg-gradient-to-r from-windy-sky to-windy-cyan rounded-full"
            />
          </div>
        </div>

        {/* Quick stats */}
        <div className="grid grid-cols-4 gap-2">
          {[
            { label: 'Memories', value: '847' },
            { label: 'Skills', value: '12' },
            { label: 'Intents', value: '5' },
            { label: 'Trust', value: '94%' },
          ].map((s, i) => (
            <div key={i} className="bg-black/20 rounded-lg p-2 text-center">
              <div className="text-lg font-bold text-windy-sky">{s.value}</div>
              <div className="text-[10px] text-gray-500">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Ecosystem status */}
        <div className="bg-black/20 rounded-xl p-3">
          <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Ecosystem</div>
          <div className="space-y-1.5">
            {[
              { name: 'Eternitas', status: 'ET-42891', color: 'text-green-400' },
              { name: 'Windy Mail', status: 'fly@windymail.ai', color: 'text-green-400' },
              { name: 'Windy Chat', status: '@fly:windychat.com', color: 'text-green-400' },
              { name: 'Phone', status: '+1 (555) 019-2847', color: 'text-green-400' },
            ].map((s, i) => (
              <div key={i} className="flex justify-between items-center text-xs">
                <span className="text-gray-400">{s.name}</span>
                <span className={`font-mono ${s.color}`}>{s.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  },
  {
    name: 'Personality',
    icon: '🎛️',
    content: (
      <div className="space-y-4">
        <div className="flex gap-2 mb-4">
          {['Companion', 'Focused', 'Neutral'].map((mode) => (
            <button key={mode} className={`px-3 py-1 text-xs rounded-lg border ${mode === 'Companion' ? 'border-windy-sky/50 bg-windy-sky/10 text-windy-sky' : 'border-gray-700 text-gray-500'}`}>
              {mode}
            </button>
          ))}
        </div>
        {[
          { name: 'Humor', value: 7 },
          { name: 'Warmth', value: 9 },
          { name: 'Formality', value: 3 },
          { name: 'Autonomy', value: 6 },
          { name: 'Creativity', value: 7 },
          { name: 'Verbosity', value: 5 },
          { name: 'Reasoning Depth', value: 8 },
          { name: 'Epistemic Strictness', value: 6 },
        ].map((s, i) => (
          <div key={i}>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-gray-400">{s.name}</span>
              <span className="text-windy-sky font-mono">{s.value}</span>
            </div>
            <div className="w-full h-1 bg-windy-darker rounded-full">
              <div className="h-full bg-gradient-to-r from-windy-sky to-windy-cyan rounded-full" style={{ width: `${s.value * 10}%` }} />
            </div>
          </div>
        ))}
      </div>
    )
  },
  {
    name: 'Identity',
    icon: '🪪',
    content: (
      <div className="space-y-4">
        {/* Passport card */}
        <div className="bg-gradient-to-br from-windy-sky/10 to-windy-dark/50 border border-windy-sky/20 rounded-xl p-4 text-center">
          <div className="text-3xl mb-2">🪰</div>
          <div className="text-lg font-bold text-white">Windy Fly</div>
          <div className="text-xs text-gray-500 mb-3">Personal AI Agent</div>
          <div className="inline-block px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full">
            <span className="text-xs text-green-400 font-semibold">ACTIVE</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="bg-black/20 rounded-lg p-3">
            <div className="text-[10px] text-gray-500 uppercase">Passport</div>
            <div className="text-sm font-mono text-windy-sky">ET-42891</div>
          </div>
          <div className="bg-black/20 rounded-lg p-3">
            <div className="text-[10px] text-gray-500 uppercase">Trust Score</div>
            <div className="text-sm font-mono text-green-400">94%</div>
          </div>
        </div>

        {/* Neural fingerprint */}
        <div className="bg-black/20 rounded-lg p-3">
          <div className="text-[10px] text-gray-500 uppercase mb-2">Neural Fingerprint</div>
          <div className="flex justify-center gap-0.5">
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className="w-1 bg-gradient-to-t from-windy-sky to-windy-cyan rounded-full" style={{ height: `${Math.sin(i * 0.8) * 12 + 16}px` }} />
            ))}
          </div>
        </div>

        <div className="space-y-2">
          {[
            { icon: '📧', label: 'fly@windymail.ai' },
            { icon: '📱', label: '+1 (555) 019-2847' },
            { icon: '💬', label: '@fly:windychat.com' },
          ].map((c, i) => (
            <div key={i} className="flex items-center gap-2 text-xs">
              <span>{c.icon}</span>
              <span className="text-gray-400 font-mono">{c.label}</span>
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    name: 'Costs',
    icon: '💰',
    content: (
      <div className="space-y-4">
        <div className="bg-black/30 rounded-xl p-4">
          <div className="text-xs text-gray-500 mb-1">Daily Spend</div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-white">$0.42</span>
            <span className="text-xs text-gray-500">/ $5.00 budget</span>
          </div>
          <div className="w-full h-2 bg-windy-darker rounded-full mt-2">
            <div className="h-full bg-windy-sky rounded-full" style={{ width: '8.4%' }} />
          </div>
        </div>

        <div className="bg-black/20 rounded-xl p-4">
          <div className="text-xs text-gray-500 mb-1">Monthly Total</div>
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-bold text-white">$12.87</span>
            <span className="text-xs text-gray-500">avg $0.46/day</span>
          </div>
        </div>

        <div className="bg-black/20 rounded-xl p-3">
          <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">By Model</div>
          <div className="space-y-2">
            {[
              { model: 'gpt-4o-mini', cost: '$6.20', pct: 48 },
              { model: 'claude-haiku', cost: '$3.90', pct: 30 },
              { model: 'gpt-4o', cost: '$2.10', pct: 16 },
              { model: 'gemini-flash', cost: '$0.67', pct: 6 },
            ].map((m, i) => (
              <div key={i}>
                <div className="flex justify-between text-xs mb-0.5">
                  <span className="text-gray-400 font-mono">{m.model}</span>
                  <span className="text-gray-300">{m.cost}</span>
                </div>
                <div className="w-full h-1 bg-windy-darker rounded-full">
                  <div className="h-full bg-windy-sky/60 rounded-full" style={{ width: `${m.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  },
];

export default function DashboardPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activePage, setActivePage] = useState(0);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your Agent's <span className="gradient-text">Control Center</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            An 8-page dashboard at localhost:3000. Manage personality, memory, skills, costs, identity — everything your agent is, in one place.
          </p>
        </motion.div>

        {/* Dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          {/* Browser chrome */}
          <div className="bg-windy-dark/80 border border-windy-sky/20 rounded-t-2xl px-4 py-3 flex items-center gap-3">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/60"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/60"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/60"></div>
            </div>
            <div className="flex-1 bg-black/30 rounded-lg px-3 py-1 text-xs text-gray-500 font-mono">
              localhost:3000
            </div>
          </div>

          {/* Dashboard body */}
          <div className="bg-[#0a0e17] border border-t-0 border-windy-sky/20 rounded-b-2xl flex min-h-[480px] overflow-hidden">
            {/* Sidebar */}
            <div className="w-14 md:w-44 bg-black/30 border-r border-windy-sky/10 py-4 flex-shrink-0">
              <div className="flex items-center gap-2 px-3 mb-6">
                <span className="text-lg">🪰</span>
                <span className="hidden md:block text-sm font-bold gradient-text">Windy Fly</span>
              </div>
              <div className="space-y-1">
                {pages.map((page, i) => (
                  <button
                    key={i}
                    onClick={() => setActivePage(i)}
                    className={`w-full flex items-center gap-2 px-3 py-2 text-left text-xs transition-colors ${
                      activePage === i
                        ? 'bg-windy-sky/10 text-windy-sky border-r-2 border-windy-sky'
                        : 'text-gray-500 hover:text-gray-300'
                    }`}
                  >
                    <span>{page.icon}</span>
                    <span className="hidden md:block">{page.name}</span>
                  </button>
                ))}
                {[
                  { icon: '💬', name: 'Chat' },
                  { icon: '🧠', name: 'Memory' },
                  { icon: '🛠️', name: 'Skills' },
                  { icon: '⚙️', name: 'Settings' },
                ].map((p, i) => (
                  <div key={i} className="flex items-center gap-2 px-3 py-2 text-xs text-gray-600">
                    <span>{p.icon}</span>
                    <span className="hidden md:block">{p.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Page content */}
            <div className="flex-1 p-5 overflow-y-auto">
              <motion.div
                key={activePage}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                {pages[activePage].content}
              </motion.div>
            </div>
          </div>
        </motion.div>

        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm">Click the sidebar tabs to explore different pages</p>
        </div>
      </div>
    </section>
  );
}
