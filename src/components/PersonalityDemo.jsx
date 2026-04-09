import { motion, useInView } from 'framer-motion';
import { useRef, useState, useMemo } from 'react';

const sliders = [
  { name: 'Humor', key: 'humor', description: 'How often your agent cracks jokes' },
  { name: 'Warmth', key: 'warmth', description: 'Emotional warmth and empathy level' },
  { name: 'Formality', key: 'formality', description: 'Casual friend vs. professional assistant' },
  { name: 'Autonomy', key: 'autonomy', description: 'How much your agent acts on its own' },
  { name: 'Creativity', key: 'creativity', description: 'Predictable answers vs. creative leaps' },
  { name: 'Verbosity', key: 'verbosity', description: 'Brief and punchy vs. detailed and thorough' },
];

const presets = [
  { name: 'Buddy', values: { humor: 8, warmth: 9, formality: 2, autonomy: 6, creativity: 7, verbosity: 6 } },
  { name: 'Engineer', values: { humor: 3, warmth: 4, formality: 6, autonomy: 5, creativity: 4, verbosity: 7 } },
  { name: 'Coder', values: { humor: 2, warmth: 3, formality: 5, autonomy: 7, creativity: 5, verbosity: 4 } },
  { name: 'Friend', values: { humor: 7, warmth: 10, formality: 1, autonomy: 4, creativity: 8, verbosity: 5 } },
];

const sampleResponses = {
  morning: [
    { min: { humor: 0, warmth: 0, formality: 7 }, text: "Good morning. You have 3 meetings today. The first is at 9:00 AM with the design team. Shall I prepare a summary?" },
    { min: { humor: 6, warmth: 7, formality: 0 }, text: "Morning! ☀️ You've got 3 meetings today — first one's the design crew at 9. Want me to whip up a summary, or are you winging it?" },
    { min: { humor: 0, warmth: 8, formality: 0 }, text: "Good morning! Hope you slept well. You've got a few meetings today — the first is with the design team at 9. I already pulled together some notes if you want them." },
    { min: { humor: 8, warmth: 5, formality: 0 }, text: "Rise and shine! Three meetings today. The design team is first at 9 — I'd say good luck, but you won't need it. Summary's ready when you are." },
  ]
};

function getResponse(values) {
  const candidates = sampleResponses.morning;
  let bestMatch = candidates[0];
  let bestScore = -1;

  for (const candidate of candidates) {
    let score = 0;
    let matches = true;
    for (const [key, minVal] of Object.entries(candidate.min)) {
      if (values[key] >= minVal) {
        score += values[key];
      } else {
        matches = false;
      }
    }
    if (matches && score > bestScore) {
      bestScore = score;
      bestMatch = candidate;
    }
  }
  return bestMatch.text;
}

export default function PersonalityDemo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [values, setValues] = useState({ humor: 7, warmth: 8, formality: 3, autonomy: 5, creativity: 6, verbosity: 5 });

  const response = useMemo(() => getResponse(values), [values]);

  const handleSlider = (key, val) => {
    setValues(prev => ({ ...prev, [key]: parseInt(val) }));
  };

  const applyPreset = (preset) => {
    setValues({ ...preset.values });
  };

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
            Tune Your Agent's <span className="gradient-text">Personality</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            18 personality sliders. 8 presets. Your agent speaks the way you want it to —
            drag the sliders and watch the response change in real time.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Sliders panel */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-windy-dark/60 backdrop-blur-sm border border-windy-sky/10 rounded-2xl p-8"
          >
            {/* Presets */}
            <div className="flex flex-wrap gap-2 mb-8">
              {presets.map((preset) => (
                <button
                  key={preset.name}
                  onClick={() => applyPreset(preset)}
                  className="px-4 py-1.5 text-sm font-medium border border-windy-sky/20 rounded-lg text-windy-sky hover:bg-windy-sky/10 hover:border-windy-sky/40 transition-all duration-200"
                >
                  {preset.name}
                </button>
              ))}
            </div>

            {/* Slider controls */}
            <div className="space-y-5">
              {sliders.map((slider) => (
                <div key={slider.key}>
                  <div className="flex justify-between items-center mb-1.5">
                    <label className="text-sm font-medium text-gray-300">{slider.name}</label>
                    <span className="text-sm font-mono text-windy-sky">{values[slider.key]}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="10"
                    value={values[slider.key]}
                    onChange={(e) => handleSlider(slider.key, e.target.value)}
                    className="w-full h-1.5 bg-windy-darker rounded-lg appearance-none cursor-pointer slider-sky"
                  />
                  <p className="text-xs text-gray-600 mt-1">{slider.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Response preview */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            {/* Chat mockup */}
            <div className="bg-windy-dark/60 backdrop-blur-sm border border-windy-sky/10 rounded-2xl p-6 flex-1">
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-windy-sky/10">
                <span className="text-lg">🪰</span>
                <span className="font-semibold text-white">Windy Fly</span>
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              </div>

              {/* User message */}
              <div className="flex justify-end mb-4">
                <div className="bg-windy-sky/20 border border-windy-sky/20 rounded-2xl rounded-br-sm px-4 py-3 max-w-[80%]">
                  <p className="text-sm text-gray-200">What do I have going on today?</p>
                </div>
              </div>

              {/* Agent response */}
              <div className="flex justify-start">
                <div className="bg-windy-dark/80 border border-windy-sky/10 rounded-2xl rounded-bl-sm px-4 py-3 max-w-[85%]">
                  <motion.p
                    key={response}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="text-sm text-gray-300 leading-relaxed"
                  >
                    {response}
                  </motion.p>
                </div>
              </div>
            </div>

            {/* Personality traits summary */}
            <div className="mt-4 bg-windy-dark/40 border border-windy-sky/10 rounded-xl p-4">
              <div className="flex flex-wrap gap-2">
                {values.humor >= 6 && <span className="px-2 py-1 text-xs bg-windy-sky/10 text-windy-sky rounded-full">Witty</span>}
                {values.warmth >= 7 && <span className="px-2 py-1 text-xs bg-windy-sky/10 text-windy-sky rounded-full">Warm</span>}
                {values.formality >= 6 && <span className="px-2 py-1 text-xs bg-windy-sky/10 text-windy-sky rounded-full">Professional</span>}
                {values.formality < 4 && <span className="px-2 py-1 text-xs bg-windy-sky/10 text-windy-sky rounded-full">Casual</span>}
                {values.autonomy >= 7 && <span className="px-2 py-1 text-xs bg-windy-sky/10 text-windy-sky rounded-full">Independent</span>}
                {values.creativity >= 7 && <span className="px-2 py-1 text-xs bg-windy-sky/10 text-windy-sky rounded-full">Creative</span>}
                {values.verbosity >= 7 && <span className="px-2 py-1 text-xs bg-windy-sky/10 text-windy-sky rounded-full">Detailed</span>}
                {values.verbosity < 4 && <span className="px-2 py-1 text-xs bg-windy-sky/10 text-windy-sky rounded-full">Concise</span>}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
