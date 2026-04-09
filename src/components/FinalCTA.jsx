import { motion } from 'framer-motion';

export default function FinalCTA() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-windy-sky rounded-full blur-[200px]" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-6xl mb-6">🪰</div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Meet <span className="gradient-text">Your Fly?</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10">
            One command. Two minutes. A companion for life.
            Your agent is waiting to hatch.
          </p>

          {/* Install command */}
          <div className="inline-block bg-black/50 border border-windy-sky/20 rounded-xl px-6 py-4 mb-8">
            <code className="text-windy-sky font-mono text-lg">
              <span className="text-gray-500">$ </span>pip install windyfly && windy go
            </code>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href="#pricing"
              className="px-10 py-4 bg-gradient-to-r from-windy-sky to-windy-electric text-white rounded-lg font-semibold text-lg cta-glow transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Hatch Your Agent — Free
            </motion.a>
            <motion.a
              href="#ecosystem"
              className="px-8 py-4 border-2 border-windy-sky/40 text-windy-sky rounded-lg font-semibold text-lg hover:bg-windy-sky/10 hover:border-windy-sky transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore the Ecosystem
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
