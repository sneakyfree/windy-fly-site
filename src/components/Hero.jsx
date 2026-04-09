import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-bg gradient-mesh">
      {/* Animated background orbs */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-windy-sky rounded-full blur-[100px]"
          animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-40 right-20 w-96 h-96 bg-windy-cyan rounded-full blur-[120px]"
          animate={{ x: [0, -40, 0], y: [0, 60, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 left-1/3 w-80 h-80 bg-windy-electric rounded-full blur-[100px]"
          animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Early Access Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-flex items-center gap-2 mb-8 px-5 py-2 bg-windy-sky/10 border border-windy-sky/30 rounded-full"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-windy-cyan opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-windy-cyan"></span>
            </span>
            <span className="text-sm font-semibold badge-shimmer">EARLY ACCESS — Hatch Your Agent Today</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            Your AI.
            <br />
            <span className="gradient-text">Always Learning. Always On.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            A personal AI companion that remembers everything, works everywhere, and gets
            smarter every day. Talk to it from your phone, computer, or any messaging app.{' '}
            <span className="text-white font-medium">It hatches in under 2 minutes.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <motion.a
              href="#pricing"
              className="px-10 py-4 bg-gradient-to-r from-windy-sky to-windy-electric text-white rounded-lg font-semibold text-lg cta-glow transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Hatch Your Agent — Free
            </motion.a>
            <motion.a
              href="#how-it-works"
              className="px-8 py-4 border-2 border-windy-sky/40 text-windy-sky rounded-lg font-semibold text-lg hover:bg-windy-sky/10 hover:border-windy-sky transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              See How It Works
            </motion.a>
          </div>

          {/* Trust metrics bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-8 md:gap-12 text-center"
          >
            {[
              { value: "22+", label: "Built-In Tools" },
              { value: "9", label: "Messaging Channels" },
              { value: "199", label: "Languages" },
              { value: "<2 min", label: "To Hatch" },
            ].map((stat, i) => (
              <div key={i} className="min-w-[100px]">
                <div className="text-2xl md:text-3xl font-bold text-windy-sky stat-glow">{stat.value}</div>
                <div className="text-xs md:text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <svg className="w-6 h-6 text-windy-sky/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
