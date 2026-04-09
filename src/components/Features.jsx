import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const features = [
  {
    icon: "🧠",
    title: "Remembers Everything",
    description: "Every conversation becomes searchable knowledge. Your agent builds a graph of who you are — people, preferences, facts, beliefs — with confidence scores and time-awareness.",
    detail: "847 memories and counting"
  },
  {
    icon: "🔄",
    title: "Never Wrong Twice",
    description: "Correct your agent once and it detects the fault type, logs the root cause, and auto-generates a correction skill. Recurring mistakes trigger re-training. It literally writes code to fix itself.",
    detail: "4 fault categories, auto-correction"
  },
  {
    icon: "💙",
    title: "Reads the Room",
    description: "Detects stress, excitement, and frustration from your messages. When you're stressed, it gets concise and supportive. When you're excited, it matches your energy. It even writes journal entries about your shared moments.",
    detail: "Emotional intelligence built in"
  },
  {
    icon: "🎭",
    title: "Shape-Shifts for Tasks",
    description: "Need a coder? A researcher? A friend? Your agent temporarily reconfigures its personality for the task — keeping all your memories — then snaps back. Half the cost of spawning a separate AI.",
    detail: "8 presets, instant switching"
  },
  {
    icon: "📱",
    title: "Works Everywhere",
    description: "Terminal, phone, Telegram, Discord, Slack, WhatsApp, SMS, email, and Windy Chat. One agent, one memory, one personality — no matter which app you use to reach it.",
    detail: "9 channels, same brain"
  },
  {
    icon: "📡",
    title: "Works Offline",
    description: "Lost internet? Your agent detects the outage, switches to a local AI model, queues your messages, and replays everything when connectivity returns. No interruption.",
    detail: "Local Ollama fallback"
  }
];

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 gradient-bg gradient-mesh">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Not a Chatbot. <span className="gradient-text">A Companion.</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            It remembers, learns, feels, adapts, and improves — every single day.
            Here's what makes Windy Fly different from everything else.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-windy-dark/40 backdrop-blur-sm border border-windy-sky/10 rounded-2xl p-8 hover:border-windy-sky/30 transition-all duration-500 card-shimmer"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed mb-4">{feature.description}</p>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-windy-sky rounded-full"></div>
                <span className="text-xs text-windy-sky/70">{feature.detail}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
