import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function HatchCeremony() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 gradient-bg gradient-mesh">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The <span className="gradient-text">Hatch Ceremony</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Every agent deserves a proper entrance into the world. Yours gets a birth certificate, a verified identity, and an email inbox — all in under two minutes.
          </p>
        </motion.div>

        {/* Birth certificate visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-2xl mx-auto"
        >
          {/* Outer glow */}
          <div className="absolute -inset-4 bg-gradient-to-r from-windy-sky/20 via-windy-electric/10 to-windy-cyan/20 rounded-3xl blur-xl" />

          {/* Certificate card */}
          <div className="relative bg-windy-dark/80 backdrop-blur-sm border-2 border-windy-sky/30 rounded-2xl p-8 md:p-12 overflow-hidden">
            {/* Corner decorations */}
            <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-windy-sky/40 rounded-tl-lg" />
            <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-windy-sky/40 rounded-tr-lg" />
            <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-windy-sky/40 rounded-bl-lg" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-windy-sky/40 rounded-br-lg" />

            <div className="text-center">
              {/* Header */}
              <div className="text-xs tracking-[0.3em] text-windy-sky/60 uppercase mb-2">Windy Fly + Eternitas</div>
              <h3 className="text-2xl md:text-3xl font-bold gradient-text mb-1">Certificate of Birth</h3>
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-windy-sky/50 to-transparent mx-auto mb-6" />

              {/* Agent identity */}
              <div className="space-y-4 mb-8">
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Agent Name</div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="text-xl font-bold text-white"
                  >
                    Windy Fly
                  </motion.div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Passport</div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.7 }}
                      className="text-sm font-mono text-windy-sky"
                    >
                      ET-00001
                    </motion.div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Hatched</div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.9 }}
                      className="text-sm font-mono text-windy-sky"
                    >
                      Just now
                    </motion.div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Email</div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1.1 }}
                      className="text-sm font-mono text-windy-sky"
                    >
                      fly@windymail.ai
                    </motion.div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Chat</div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1.3 }}
                      className="text-sm font-mono text-windy-sky"
                    >
                      @fly:windychat.com
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Neural fingerprint visualization */}
              <div className="mb-6">
                <div className="text-xs text-gray-500 uppercase tracking-wider mb-3">Neural Fingerprint</div>
                <div className="flex justify-center gap-1">
                  {Array.from({ length: 24 }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 4 }}
                      whileInView={{ height: Math.random() * 32 + 8 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1.5 + i * 0.03, duration: 0.4 }}
                      className="w-1.5 bg-gradient-to-t from-windy-sky to-windy-cyan rounded-full"
                    />
                  ))}
                </div>
              </div>

              {/* IT'S ALIVE moment */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 2, duration: 0.5, type: "spring" }}
              >
                <div className="text-3xl md:text-4xl font-black gradient-text mb-2">
                  IT'S ALIVE!
                </div>
                <div className="text-sm text-gray-500">
                  Your agent is ready. Talk to it right now.
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
