import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  {
    number: "01",
    title: "Install",
    description: "One command. That's it. Works on Mac, Linux, and Windows.",
    code: "pip install windyfly",
    detail: "No dependencies to manage, no Docker to configure. Just install and go."
  },
  {
    number: "02",
    title: "Hatch",
    description: "Paste an AI key (or use the free tier), name your agent, and watch it come alive.",
    code: "windy go",
    detail: "Your agent gets a verified identity, email inbox, and chat account — automatically."
  },
  {
    number: "03",
    title: "Talk",
    description: "Chat in your terminal, open the dashboard, or message from any platform.",
    code: "windy chat",
    detail: "Ask about the weather, set reminders, manage your calendar. Your agent handles it."
  }
];

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            From Zero to <span className="gradient-text">AI Companion</span> in 3 Steps
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            No accounts to create, no services to configure. Your agent is born ready.
          </p>
        </motion.div>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group bg-windy-dark/40 backdrop-blur-sm border border-windy-sky/10 rounded-2xl p-8 hover:border-windy-sky/30 transition-all duration-500 card-shimmer"
            >
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="text-6xl font-black text-windy-sky/20">{step.number}</div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{step.description}</p>
                  <div className="bg-black/40 rounded-lg px-4 py-3 font-mono text-windy-sky text-sm mb-3 inline-block">
                    <span className="text-gray-500">$ </span>{step.code}
                  </div>
                  <p className="text-gray-500 text-sm">{step.detail}</p>
                </div>
              </div>

              {index < steps.length - 1 && (
                <div className="flex justify-center mt-6">
                  <motion.svg
                    className="w-6 h-6 text-windy-sky/30"
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    animate={{ y: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </motion.svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
