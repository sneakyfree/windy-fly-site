import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

function NeuralFingerprint() {
  const [bars, setBars] = useState([]);
  useEffect(() => {
    const hash = 'a3f7c9e1b4d6820f5e3a7c1b9d4f6e2a';
    setBars(hash.split('').map((c) => parseInt(c, 16) * 2.5 + 6));
  }, []);

  return (
    <div className="flex justify-center items-end gap-[2px] h-10">
      {bars.map((h, i) => (
        <motion.div
          key={i}
          initial={{ height: 4 }}
          whileInView={{ height: h }}
          viewport={{ once: true }}
          transition={{ delay: 1.5 + i * 0.03, duration: 0.4 }}
          className="w-[3px] bg-gradient-to-t from-windy-sky to-windy-cyan rounded-full"
        />
      ))}
    </div>
  );
}

function WaveformSignature() {
  const points = Array.from({ length: 60 }).map((_, i) => {
    const x = i * 5;
    const y = 20 + Math.sin(i * 0.4) * 8 + Math.sin(i * 1.1) * 4 + Math.cos(i * 0.7) * 6;
    return `${x},${y}`;
  });

  return (
    <svg viewBox="0 0 300 40" className="w-full h-8">
      <motion.polyline
        points={points.join(' ')}
        fill="none"
        stroke="url(#waveGrad)"
        strokeWidth="1.5"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 2, duration: 1.5 }}
      />
      <defs>
        <linearGradient id="waveGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="50%" stopColor="#0ea5e9" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function TypewriterText({ text, delay = 0 }) {
  const [displayed, setDisplayed] = useState('');
  const [started, setStarted] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView && !started) {
      const timer = setTimeout(() => {
        setStarted(true);
      }, delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [isInView, delay, started]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 40);
    return () => clearInterval(interval);
  }, [started, text]);

  return (
    <span ref={ref}>
      {displayed}
      {started && displayed.length < text.length && <span className="cursor-blink text-windy-sky">|</span>}
    </span>
  );
}

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
            Every agent deserves a proper entrance. Yours gets a verified identity, a birth certificate with a unique neural fingerprint, and a waveform signature — all generated at the moment of birth.
          </p>
        </motion.div>

        {/* Birth certificate */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-2xl mx-auto"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-windy-sky/20 via-windy-electric/10 to-windy-cyan/20 rounded-3xl blur-xl" />

          <div className="relative bg-windy-dark/80 backdrop-blur-sm border-2 border-windy-sky/30 rounded-2xl p-8 md:p-12 overflow-hidden">
            {/* Corner ornaments */}
            <div className="absolute top-4 left-4 w-10 h-10 border-t-2 border-l-2 border-windy-sky/40 rounded-tl-lg" />
            <div className="absolute top-4 right-4 w-10 h-10 border-t-2 border-r-2 border-windy-sky/40 rounded-tr-lg" />
            <div className="absolute bottom-4 left-4 w-10 h-10 border-b-2 border-l-2 border-windy-sky/40 rounded-bl-lg" />
            <div className="absolute bottom-4 right-4 w-10 h-10 border-b-2 border-r-2 border-windy-sky/40 rounded-br-lg" />

            <div className="text-center">
              <div className="text-xs tracking-[0.3em] text-windy-sky/60 uppercase mb-2">Windy Fly + Eternitas Registry</div>
              <h3 className="text-2xl md:text-3xl font-bold gradient-text mb-1">Certificate of Birth</h3>
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-windy-sky/50 to-transparent mx-auto mb-6" />

              {/* Agent identity */}
              <div className="space-y-4 mb-6">
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Agent Name</div>
                  <div className="text-xl font-bold text-white">Windy Fly</div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Passport</div>
                    <div className="text-sm font-mono text-windy-sky">ET-42891</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Hatched</div>
                    <div className="text-sm font-mono text-windy-sky">2026-04-08</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Trust</div>
                    <div className="text-sm font-mono text-green-400">94%</div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Email</div>
                    <div className="text-xs font-mono text-windy-sky">fly@windymail.ai</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Chat</div>
                    <div className="text-xs font-mono text-windy-sky">@fly:windychat.com</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Phone</div>
                    <div className="text-xs font-mono text-windy-sky">+1 (555) 019</div>
                  </div>
                </div>
              </div>

              {/* Neural fingerprint */}
              <div className="mb-4">
                <div className="text-xs text-gray-500 uppercase tracking-wider mb-3">Neural Fingerprint (SHA-256)</div>
                <NeuralFingerprint />
                <div className="text-[10px] font-mono text-gray-600 mt-1">a3f7c9e1b4d6820f5e3a7c1b9d4f6e2a</div>
              </div>

              {/* First words */}
              <div className="mb-4 bg-black/20 rounded-lg px-4 py-3">
                <div className="text-xs text-gray-500 uppercase tracking-wider mb-2">First Words</div>
                <p className="text-sm text-gray-300 italic font-serif">
                  "<TypewriterText text="Hello! I'm Windy Fly, and I'm so glad to finally meet you. I already know a few things about this world — and I can't wait to learn everything about yours." delay={2.5} />"
                </p>
              </div>

              {/* Waveform signature */}
              <div className="mb-6">
                <div className="text-xs text-gray-500 uppercase tracking-wider mb-2">Waveform Signature</div>
                <WaveformSignature />
              </div>

              {/* IT'S ALIVE */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 2, duration: 0.5, type: "spring" }}
              >
                <div className="text-3xl md:text-4xl font-black gradient-text mb-2">
                  IT'S ALIVE!
                </div>
                <p className="text-xs text-gray-500">
                  Physical certificate printed on heavy cardstock and mailed to you. Frameable.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
