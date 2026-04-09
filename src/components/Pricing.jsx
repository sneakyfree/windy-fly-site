import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const tiers = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Everything you need to get started with your first AI agent.",
    features: [
      "1 personal agent",
      "50 messages per day",
      "Basic tools (weather, reminders, todos)",
      "Community AI models (Gemini, Groq)",
      "Terminal + dashboard access",
      "Eternitas verified identity",
      "Windy Chat account",
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
      "Unlimited memory",
      "Cloud backup to Windy Cloud",
      "All messaging channels",
      "Priority support",
      "Custom personality tuning",
    ],
    cta: "Go Pro",
    highlighted: true
  },
  {
    name: "Enterprise",
    price: "$39.99",
    period: "/user/month",
    description: "Deploy agents for your team, your customers, your entire organization.",
    features: [
      "Fleet management dashboard",
      "Team agents with shared knowledge",
      "Custom tool development",
      "Developer tools access",
      "Dedicated support",
      "VPS deployment included",
      "Advanced analytics",
      "Custom integrations",
    ],
    cta: "Contact Sales",
    highlighted: false
  }
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
            Your agent hatches free with everything it needs. Upgrade when you want more power.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
      </div>
    </section>
  );
}
