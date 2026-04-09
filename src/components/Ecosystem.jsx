import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const flywheelSteps = [
  {
    brand: "Windy Word",
    icon: "🎤",
    verb: "You speak.",
    hook: "Voice-to-text intelligence powered by 3,500+ specialized AI models. Your voice becomes searchable, permanent knowledge — and your Fly can search every word.",
    link: "https://windyword.com",
    color: "from-blue-500 to-cyan-500",
    ring: "ring-blue-500/30"
  },
  {
    brand: "Windy Clone",
    icon: "🧬",
    verb: "You become.",
    hook: "Your voice becomes your digital twin. Voice clone, visual avatar, personality soul file. Your Fly knows your clone's training status in real time.",
    link: "https://windyclone.com",
    color: "from-purple-500 to-pink-500",
    ring: "ring-purple-500/30"
  },
  {
    brand: "Windy Chat",
    icon: "💬",
    verb: "You connect.",
    hook: "Encrypted multilingual messaging. Your Fly is born with a chat account — it can message anyone, translate anything, and never misses a conversation.",
    link: "https://windychat.com",
    color: "from-green-500 to-teal-500",
    ring: "ring-green-500/30"
  },
  {
    brand: "Windy Traveler",
    icon: "✈️",
    verb: "You explore.",
    hook: "AI travel companion with offline language packs and local guides. Your Fly taps into 199 languages to translate anything, anywhere, instantly.",
    link: "https://windytraveler.com",
    color: "from-orange-500 to-red-500",
    ring: "ring-orange-500/30"
  },
  {
    brand: "Windy Translate",
    icon: "🔧",
    verb: "The engine.",
    hook: "3,500+ specialized translation models powering every Windy product. The invisible force behind your Fly's multilingual superpowers.",
    link: "https://windytranslate.com",
    color: "from-indigo-500 to-blue-500",
    ring: "ring-indigo-500/30"
  },
  {
    brand: "Windy Mail",
    icon: "📧",
    verb: "You communicate.",
    hook: "Email for humans and AI. Your Fly gets its own inbox on hatch — it can send, receive, and manage email as you or as itself.",
    link: "https://windymail.ai",
    color: "from-red-500 to-rose-500",
    ring: "ring-red-500/30"
  },
  {
    brand: "Windy Code",
    icon: "🖥️",
    verb: "You create.",
    hook: "AI-native code editor. Your Fly can help you build, debug, and ship code — with full access to your project context and memory.",
    link: "https://windycode.ai",
    color: "from-violet-500 to-indigo-500",
    ring: "ring-violet-500/30"
  },
  {
    brand: "Windy Cloud",
    icon: "☁️",
    verb: "You store.",
    hook: "Storage, sync, and compute for the entire ecosystem. Your Fly's memory, config, and personality are backed up and synced across every device.",
    link: "https://windycloud.com",
    color: "from-blue-400 to-cyan-500",
    ring: "ring-blue-400/30"
  },
  {
    brand: "Eternitas",
    icon: "🪪",
    verb: "You trust.",
    hook: "AI identity and trust registry. Your Fly is born with a verified passport — a real identity that platforms and people can trust.",
    link: "https://eternitas.ai",
    color: "from-gray-300 to-white",
    ring: "ring-gray-300/30"
  },
];

function FlywheelCard({ step, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className={`group relative bg-windy-dark/40 backdrop-blur-sm border border-windy-sky/10 rounded-2xl p-8 hover:border-windy-sky/30 transition-all duration-500 card-shimmer ring-1 ${step.ring}`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-[0.06] rounded-2xl transition-opacity duration-500`} />

      <div className="relative flex flex-col md:flex-row gap-6">
        <div className="flex-shrink-0 flex items-start gap-4">
          <div className="text-5xl md:text-6xl font-black text-white/[0.06] leading-none">{String(index + 1).padStart(2, '0')}</div>
          <div className="text-5xl">{step.icon}</div>
        </div>

        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-2xl font-bold text-white">{step.verb}</h3>
            <span className={`text-sm font-semibold bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>{step.brand}</span>
          </div>
          <p className="text-gray-300 mb-3 leading-relaxed">{step.hook}</p>

          <a
            href={step.link}
            className="inline-flex items-center text-sm text-windy-sky/70 hover:text-windy-sky transition-colors group/link"
          >
            Explore {step.brand}
            <svg className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Ecosystem() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="ecosystem" className="py-24 px-4 sm:px-6 lg:px-8 gradient-bg gradient-mesh">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Born Into an <span className="gradient-text">Entire Ecosystem</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
            Your agent doesn't live in a box. It connects to every Windy product — chat, email, cloud, voice, translation — from the moment it hatches.{' '}
            <span className="text-white font-medium">Windy Fly is the nervous system that ties everything together.</span>
          </p>
        </motion.div>

        <div className="space-y-6 mb-16">
          {flywheelSteps.map((step, index) => (
            <FlywheelCard key={index} step={step} index={index} />
          ))}
        </div>

        {/* The Center — Windy Fly */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-br from-windy-sky/10 via-windy-dark/50 to-windy-electric/10 border-2 border-windy-sky/30 rounded-3xl p-10 text-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-windy-sky/5 to-transparent rounded-3xl" />

          <div className="relative">
            <div className="text-6xl mb-4">🪰</div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              And at the Center —
              <br />
              <span className="gradient-text">Your Fly.</span>
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed mb-6">
              Every product feeds your agent. Every conversation makes it smarter. Every channel makes it more reachable.
              Your Fly is the reason you never have to leave the ecosystem —{' '}
              <span className="text-white font-semibold">because it's already everywhere you are.</span>
            </p>
            <p className="text-windy-sky/60 text-sm italic">
              "The more you use Windy, the smarter your Fly becomes. That's not a product — it's a companion for life."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
