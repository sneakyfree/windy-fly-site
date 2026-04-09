import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const faqs = [
  {
    question: "What is Windy Fly?",
    answer: "Windy Fly is your personal AI agent — a lifelong companion that remembers every conversation, learns your preferences, and connects to the entire Windy ecosystem. Think of it as a smart assistant that actually knows you and gets better every day."
  },
  {
    question: "Is it free?",
    answer: "Yes! The free tier gives you one agent with 50 messages per day, basic tools, and access to community AI models. You can use it forever without paying. Upgrade to Pro ($14.99/mo) for unlimited messages, premium AI models, and full tool access."
  },
  {
    question: "What can my agent actually do?",
    answer: "Your agent comes with 17+ built-in tools: check the weather, set reminders, manage to-do lists, read the news, search the web, manage your calendar, do math, convert units, and more. It can also send emails, chat on multiple platforms, and learn new skills over time."
  },
  {
    question: "How does it remember things?",
    answer: "Every conversation is stored locally in an encrypted database. Your agent extracts important facts, builds a knowledge graph of what it knows about you, and uses that context in future conversations. The more you talk, the more useful it becomes."
  },
  {
    question: "Can I talk to it from my phone?",
    answer: "Absolutely. Your agent works on Telegram, WhatsApp, Discord, Slack, SMS, email, and Windy Chat. Same agent, same memory, same personality — no matter which app you use to reach it."
  },
  {
    question: "Is my data private?",
    answer: "Your data stays on your machine by default. Memory is stored in a local encrypted database. If you enable cloud backup (Pro feature), your data is encrypted before it leaves your device and stored on Windy Cloud. We never train on your data. You own everything."
  },
  {
    question: "What's the difference between Windy Fly and ChatGPT?",
    answer: "ChatGPT is a conversation tool — you open it, ask a question, and close it. Windy Fly is a persistent companion. It remembers everything, has a real identity, connects to your email, chat, and cloud, works on every messaging platform, and improves from its mistakes. ChatGPT is a tool. Windy Fly is yours."
  }
];

function FAQItem({ faq, index }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
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
