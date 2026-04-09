import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const faqs = [
  {
    question: "What is Windy Fly?",
    answer: "Windy Fly is your personal AI agent — a lifelong companion that remembers every conversation, learns your preferences, and connects to the entire Windy ecosystem. Think of it as a smart assistant that actually knows you and gets better every day. It can send emails, manage your calendar, search the web, and work on 9 different messaging platforms."
  },
  {
    question: "Is it free?",
    answer: "Yes! The free tier gives you one agent with 50 messages per day, basic tools, offline mode, and access to community AI models. You can use it forever without paying. Upgrade to Pro ($14.99/mo) for unlimited messages, premium AI models, cloud backup, and full tool access."
  },
  {
    question: "What can my agent actually do?",
    answer: "Your agent comes with 17+ built-in tools: check the weather, set reminders, manage to-do lists, read the news, search the web, manage your calendar, do math, convert units, send emails, and more. It can also shape-shift into different personality modes for different tasks, grade itself on performance, and auto-generate correction skills when it makes mistakes."
  },
  {
    question: "How does it remember things?",
    answer: "Every conversation is stored in an encrypted local database. Your agent extracts knowledge nodes — people, preferences, facts, beliefs — each with confidence scores and time-awareness. There's even a memory retention slider: set it to 0 for goldfish memory, or 10 for elephant memory. Older, less-relevant memories naturally fade unless reinforced."
  },
  {
    question: "Can I import my ChatGPT conversations?",
    answer: "Yes! The Soul Import system can read your exported ChatGPT conversations.json and extract personality traits, stated preferences, and personal facts. You preview everything before it's imported, and sensitive data is flagged separately for your review. It also works with other agent platforms like OpenClaw and Hermes."
  },
  {
    question: "Can I talk to it from my phone?",
    answer: "Absolutely. Your agent works on Telegram, WhatsApp, Discord, Slack, SMS, email, Windy Chat, and the web dashboard. Same agent, same memory, same personality — no matter which app you use to reach it."
  },
  {
    question: "Is my data private?",
    answer: "Your data stays on your machine by default in an encrypted SQLite database. If you enable cloud backup (Pro feature), your data is encrypted client-side before it leaves your device and stored on Windy Cloud with zero-knowledge architecture. We never train on your data. You own everything."
  },
  {
    question: "What's the difference between Windy Fly and ChatGPT?",
    answer: "ChatGPT is a conversation tool — you open it, ask a question, and close it. Windy Fly is a persistent companion. It remembers everything, has a verified identity, connects to your email and chat, works on every messaging platform, improves from its mistakes, adapts to your emotions, grades itself weekly, and checks in with you proactively. ChatGPT is a tool. Windy Fly is yours."
  },
  {
    question: "How much does it cost to run?",
    answer: "That's entirely up to you. The free tier uses community models at zero cost. On Pro, you bring your own API keys — the dashboard tracks every cent across 12+ AI providers with per-model breakdowns. Set daily and monthly budgets, and your agent enforces them automatically. Most users spend $0.30-$1.00/day. You can also use a Claude Max subscription for unlimited usage."
  },
  {
    question: "What happens if I lose internet?",
    answer: "Your agent detects the outage, switches to a local AI model (Ollama), and keeps working. Messages are queued atomically and replayed through the full agent pipeline when connectivity returns. You won't even notice the interruption."
  }
];

function FAQItem({ faq, index }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="border border-windy-sky/10 rounded-xl overflow-hidden hover:border-windy-sky/20 transition-colors duration-300"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between text-left bg-windy-dark/40 hover:bg-windy-dark/60 transition-colors duration-200"
      >
        <span className="font-semibold text-white pr-4">{faq.question}</span>
        <motion.svg
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="w-5 h-5 text-windy-sky flex-shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </motion.svg>
      </button>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="px-6 py-5 bg-windy-dark/20"
        >
          <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
        </motion.div>
      )}
    </motion.div>
  );
}

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 gradient-bg gradient-mesh">
      <div className="max-w-3xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about your new AI companion.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
