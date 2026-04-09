import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const sources = [
  {
    name: "ChatGPT",
    icon: "💬",
    description: "Import your conversation history, preferences, and personality traits from exported ChatGPT data.",
    fileType: "conversations.json",
    what: "Conversation topics, stated preferences, personal facts"
  },
  {
    name: "Other AI Agents",
    icon: "🤖",
    description: "Bring memories and skills from OpenClaw, Hermes, or any agent with a SOUL.md personality file.",
    fileType: "SOUL.md + MEMORY.md",
    what: "Personality traits, knowledge base, learned skills"
  },
];

const importSteps = [
  {
    step: "01",
    title: "Upload your export",
    description: "Drop your ChatGPT conversations.json or agent's SOUL.md — we auto-detect the format."
  },
  {
    step: "02",
    title: "Preview what we found",
    description: "See exactly what we extracted: personality traits, memories, and skills. Nothing gets imported without your approval."
  },
  {
    step: "03",
    title: "Approve and merge",
    description: "Choose what to keep. Sensitive data is flagged separately. Your Fly absorbs the memories and gets smarter instantly."
  },
];

export default function SoulImport() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 gradient-bg gradient-mesh">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Bring Your <span className="gradient-text">ChatGPT Memories</span> With You
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Months of conversations. Preferences you've shared. Things it learned about you.
            Don't leave them behind — import them into your Fly in minutes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Source cards */}
          {sources.map((source, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-windy-dark/40 backdrop-blur-sm border border-windy-sky/10 rounded-2xl p-8 hover:border-windy-sky/30 transition-all duration-500 card-shimmer"
            >
              <div className="text-4xl mb-4">{source.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{source.name}</h3>
              <p className="text-gray-400 mb-4 leading-relaxed">{source.description}</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-gray-600">File:</span>
                  <code className="text-windy-sky font-mono text-xs bg-black/30 px-2 py-0.5 rounded">{source.fileType}</code>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <span className="text-gray-600">Extracts:</span>
                  <span className="text-gray-400">{source.what}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Import preview mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto bg-windy-dark/60 backdrop-blur-sm border border-windy-sky/20 rounded-2xl p-8 mb-16"
        >
          <div className="text-center mb-6">
            <div className="text-xs tracking-[0.2em] text-windy-sky/60 uppercase mb-2">Soul Import Preview</div>
            <h3 className="text-xl font-bold text-white">We found your memories</h3>
          </div>

          <div className="space-y-4">
            {/* Personality traits */}
            <div className="bg-black/20 rounded-xl p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-semibold text-white">Personality Traits</span>
                <span className="px-2 py-0.5 bg-green-500/10 text-green-400 text-xs rounded-full">Safe</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Prefers concise answers', 'Enjoys wordplay', 'Night owl', 'Coffee over tea'].map((trait, i) => (
                  <span key={i} className="px-2 py-1 text-xs bg-windy-sky/10 text-windy-sky/80 rounded-lg">{trait}</span>
                ))}
              </div>
            </div>

            {/* Memories */}
            <div className="bg-black/20 rounded-xl p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-semibold text-white">Memories</span>
                <span className="text-xs text-gray-500">147 extracted</span>
              </div>
              <div className="space-y-2">
                {[
                  { type: 'fact', text: 'Works as a software engineer', confidence: '85%' },
                  { type: 'preference', text: 'Prefers Python over JavaScript', confidence: '92%' },
                  { type: 'fact', text: 'Has a dog named Max', confidence: '78%' },
                ].map((m, i) => (
                  <div key={i} className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-windy-sky rounded-full"></span>
                      <span className="text-gray-300">{m.text}</span>
                    </div>
                    <span className="text-gray-500 font-mono">{m.confidence}</span>
                  </div>
                ))}
                <div className="text-xs text-gray-600 text-center pt-1">+ 144 more memories</div>
              </div>
            </div>

            {/* Sensitive flag */}
            <div className="bg-black/20 rounded-xl p-4 border border-yellow-500/10">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-white">Flagged for Review</span>
                <span className="px-2 py-0.5 bg-yellow-500/10 text-yellow-400 text-xs rounded-full">Sensitive</span>
              </div>
              <p className="text-xs text-gray-500">3 memories contain beliefs or identity data. You decide whether to import them.</p>
            </div>
          </div>

          <div className="mt-6 flex gap-3 justify-center">
            <button className="px-6 py-2 bg-gradient-to-r from-windy-sky to-windy-electric text-white rounded-lg font-semibold text-sm">
              Approve & Import
            </button>
            <button className="px-6 py-2 border border-windy-sky/20 text-gray-400 rounded-lg text-sm">
              Review Details
            </button>
          </div>
        </motion.div>

        {/* How it works */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {importSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              className="text-center"
            >
              <div className="text-4xl font-black text-windy-sky/20 mb-2">{step.step}</div>
              <h4 className="font-bold text-white mb-2">{step.title}</h4>
              <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
