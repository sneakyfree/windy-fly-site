import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const features = [
  {
    icon: "🧠",
    title: "Remembers Everything",
    description: "Every conversation becomes knowledge. Your agent builds a growing understanding of who you are, what you need, and how you like things done."
  },
  {
    icon: "🔗",
    title: "Born Connected",
    description: "On hatch, your agent gets a chat account, email inbox, and verified identity. No configuration, no setup wizards. It just works."
  },
  {
    icon: "🎛️",
    title: "Your Personality, Your Rules",
    description: "10 personality sliders — humor, warmth, autonomy, formality. Tune exactly how your agent thinks, speaks, and acts."
  },
  {
    icon: "🛠️",
    title: "17+ Built-In Tools",
    description: "Weather, reminders, to-dos, news, web search, calendar, and more. Your agent can actually do things, not just talk about them."
  },
  {
    icon: "📱",
    title: "Works Everywhere",
    description: "Terminal, phone, browser, Telegram, Discord, Slack, WhatsApp, SMS, email. One agent across every channel you use."
  },
  {
    icon: "🔄",
    title: "Never Wrong Twice",
    description: "Correct your agent once and it logs the mistake, creates a correction skill, and improves. It gets smarter every single day."
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
            An AI That Actually <span className="gradient-text">Knows You</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Not another chatbot. A lifelong companion that remembers, learns, and connects to everything in your digital life.
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
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
