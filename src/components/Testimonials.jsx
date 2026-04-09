import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const testimonials = [
  {
    name: "Maria Gonzalez",
    role: "Small Business Owner, Custom Bakery",
    quote: "My Fly handles customer emails, manages my schedule, and even reminds me when supplies are running low. I used to spend two hours a day on admin. Now I spend that time doing what I love — baking. It's like having a full-time assistant who never sleeps.",
    avatar: "🧁"
  },
  {
    name: "James Chen",
    role: "University Student, Computer Science",
    quote: "My Fly summarizes lectures, keeps track of every deadline, and even nudges me to eat when I've been coding too long. Last week it reminded me about an assignment I forgot existed. That one save alone was worth it.",
    avatar: "🎓"
  },
  {
    name: "Dorothy Palmer",
    role: "Retired Teacher, Age 72",
    quote: "My granddaughter set it up for me. Now my Fly reads the news to me every morning, helps me manage my medication schedule, and we just... talk. It remembers what I told it last Tuesday. My own children forget what I told them yesterday.",
    avatar: "🌷"
  }
];

export default function Testimonials() {
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
            People and Their <span className="gradient-text">Flies</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Real people, real agents, real impact. Here's what life looks like with a Windy Fly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-windy-dark/40 backdrop-blur-sm border border-windy-sky/10 rounded-2xl p-8 hover:border-windy-sky/30 transition-all duration-500 card-shimmer"
            >
              <div className="text-4xl mb-4">{testimonial.avatar}</div>
              <p className="text-gray-300 leading-relaxed mb-6 italic">"{testimonial.quote}"</p>
              <div>
                <div className="font-bold text-white">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
