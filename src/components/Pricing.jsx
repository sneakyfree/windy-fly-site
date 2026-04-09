import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const tiers = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Everything you need to hatch your first agent and start chatting.",
    features: [
      "1 personal agent",
      "50 messages per day",
      "Basic tools (weather, reminders, todos)",
      "Community AI models (Gemini, Groq)",
      "Terminal + dashboard access",
      "Eternitas verified identity",
      "Windy Chat account",
      "Offline mode with local AI",
    ],
    cta: "Hatch for Free",
    highlighted: false
  },
  {
    name: "Pro",
    price: "$14.99",
    period: "/month",
    description: "Unlimited power for people who rely on their agent every day.",
    features: [
      "Unlimited messages",
      "Premium AI models (Claude, GPT-4o)",
      "All 17+ built-in tools",
      "Unlimited memory with decay control",
      "Cloud backup to Windy Cloud",
      "All messaging channels",
      "Soul Import (bring ChatGPT memories)",
      "Shape-shifting personality modes",
      "Priority support",
    ],
    cta: "Go Pro",
    highlighted: true
  },
  {
    name: "Enterprise",
    price: "$39.99",
    period: "/user/month",
    description: "Deploy and manage a fleet of agents across your entire organization.",
    features: [
      "Mission Control dashboard",
      "Multi-machine fleet management",
      "Remote health monitoring",
      "Team agents with shared knowledge",
      "Custom tool development",
      "Developer tools access",
      "VPS deployment (AWS)",
      "Advanced analytics & audit trails",
      "Dedicated support",
    ],
    cta: "Contact Sales",
    highlighted: false
  }
];

const costFeatures = [
  {
    icon: "📊",
    title: "Per-Model Cost Breakdown",
    description: "See exactly how much each AI model costs you — daily, monthly, per-conversation."
  },
  {
    icon: "🎚️",
    title: "Budget Sliders",
    description: "Set daily and monthly spending limits. Your agent enforces them automatically — no surprises."
  },
  {
    icon: "⚡",
    title: "Efficiency Self-Grading",
    description: "Your agent grades itself on cost efficiency weekly. It actively works to give you better answers for less money."
  },
  {
    icon: "🔌",
    title: "Use Your Own Keys",
    description: "Bring API keys from 12+ providers. Use Claude Max subscription for unlimited usage instead of per-token billing."
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 gradient-bg gradient-mesh">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Start Free. <span className="gradient-text">Grow When Ready.</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Your agent hatches free with everything it needs. Upgrade when you want more power — and always know exactly what you're spending.
          </p>
        </motion.div>

        {/* Pricing tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative bg-windy-dark/60 backdrop-blur-sm rounded-2xl p-8 transition-all duration-500 ${
                tier.highlighted
                  ? 'border-2 border-windy-sky/50 popular-ring scale-105'
                  : 'border border-windy-sky/10 hover:border-windy-sky/30'
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1.5 bg-gradient-to-r from-windy-sky to-windy-electric text-white text-xs font-bold rounded-full uppercase tracking-wider">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-4xl font-black text-white">{tier.price}</span>
                  <span className="text-gray-500 text-sm">{tier.period}</span>
                </div>
                <p className="text-gray-400 text-sm">{tier.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-windy-sky flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.a
                href="#"
                className={`block w-full py-3 rounded-lg font-semibold text-center transition-all duration-300 ${
                  tier.highlighted
                    ? 'bg-gradient-to-r from-windy-sky to-windy-electric text-white cta-glow'
                    : 'border-2 border-windy-sky/30 text-windy-sky hover:bg-windy-sky/10 hover:border-windy-sky'
                }`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                {tier.cta}
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* Cost control section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Cost Control That <span className="gradient-text">Actually Works</span>
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Every API call tracked. Every dollar accounted for. Your agent manages its own budget so you never get surprised.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {costFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-windy-dark/40 border border-windy-sky/10 rounded-xl p-5 text-center hover:border-windy-sky/20 transition-all duration-300"
            >
              <div className="text-2xl mb-3">{feature.icon}</div>
              <h4 className="font-bold text-white text-sm mb-2">{feature.title}</h4>
              <p className="text-xs text-gray-500 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
