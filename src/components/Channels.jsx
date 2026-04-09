import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const channels = [
  { name: "Terminal", icon: "💻", description: "Chat directly from your command line" },
  { name: "Windy Chat", icon: "💬", description: "Encrypted messaging with translation" },
  { name: "Telegram", icon: "📨", description: "Message your agent on Telegram" },
  { name: "Discord", icon: "🎮", description: "Add your agent to any Discord server" },
  { name: "Slack", icon: "📋", description: "Bring your agent into your workspace" },
  { name: "WhatsApp", icon: "📱", description: "Chat from the world's most popular app" },
  { name: "SMS", icon: "✉️", description: "Text your agent from any phone" },
  { name: "Email", icon: "📧", description: "Your agent has its own inbox" },
  { name: "Dashboard", icon: "🌐", description: "Beautiful web interface at localhost" },
];

export default function Channels() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            One Agent. <span className="gradient-text">Every Channel.</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Your agent lives wherever you do. Same memory, same personality, same tools — no matter how you reach it.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {channels.map((channel, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="group bg-windy-dark/40 backdrop-blur-sm border border-windy-sky/10 rounded-xl p-6 hover:border-windy-sky/30 transition-all duration-500 card-shimmer flex items-center gap-4"
            >
              <div className="text-3xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">{channel.icon}</div>
              <div>
                <h3 className="font-bold text-white mb-1">{channel.name}</h3>
                <p className="text-sm text-gray-500">{channel.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Central connection visual */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-windy-sky/5 border border-windy-sky/20 rounded-full">
            <span className="text-2xl">🪰</span>
            <span className="text-gray-400 text-sm">All channels connect to <span className="text-windy-sky font-semibold">one brain, one memory</span></span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
