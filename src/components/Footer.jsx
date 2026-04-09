export default function Footer() {
  const currentYear = new Date().getFullYear();

  const windyApps = [
    { name: "Windy Word", url: "https://windyword.com", desc: "Voice to Text" },
    { name: "Windy Clone", url: "https://windyclone.com", desc: "Digital Twin" },
    { name: "Windy Chat", url: "https://windychat.com", desc: "Encrypted Chat" },
    { name: "Windy Traveler", url: "https://windytraveler.com", desc: "Travel Companion" },
    { name: "Windy Translate", url: "https://windytranslate.com", desc: "Translation Engine" },
    { name: "Windy Mail", url: "https://windymail.ai", desc: "AI-Native Email" },
    { name: "Windy Code", url: "https://windycode.ai", desc: "Code Editor" },
    { name: "Windy Cloud", url: "https://windycloud.com", desc: "Cloud Storage" },
    { name: "Eternitas", url: "https://eternitas.ai", desc: "AI Identity" },
  ];

  const legal = [
    { name: "Privacy Policy", url: "/privacy" },
    { name: "Terms of Service", url: "/terms" },
    { name: "Cookie Policy", url: "/cookies" },
  ];

  const social = [
    { name: "Twitter", url: "https://twitter.com/windyfly", icon: "𝕏" },
    { name: "GitHub", url: "https://github.com/sneakyfree", icon: "💻" },
    { name: "Discord", url: "https://discord.gg/windyfly", icon: "💬" },
    { name: "LinkedIn", url: "https://linkedin.com/company/windyfly", icon: "💼" },
  ];

  return (
    <footer className="bg-windy-darker border-t border-windy-sky/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-2">🪰</span>
              <span className="text-2xl font-bold gradient-text">Windy Fly</span>
            </div>
            <p className="text-gray-500 text-sm mb-2 leading-relaxed">
              Your AI. Your Rules. Your Ecosystem. A lifelong companion that remembers, learns, and grows with you.
            </p>
            <p className="text-gray-600 text-xs mb-5">Part of the Windy Empire</p>
            <div className="flex space-x-3">
              {social.map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  className="w-9 h-9 rounded-lg bg-windy-dark/50 border border-windy-sky/10 flex items-center justify-center text-lg hover:border-windy-sky/30 hover:bg-windy-sky/5 transition-all duration-200"
                  aria-label={item.name}
                  title={item.name}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Windy Ecosystem */}
          <div>
            <h3 className="text-sm font-bold mb-4 text-white uppercase tracking-wider">Ecosystem</h3>
            <ul className="space-y-3">
              {windyApps.map((app, index) => (
                <li key={index}>
                  <a
                    href={app.url}
                    className="group flex items-center gap-2 text-gray-500 hover:text-windy-sky transition-colors duration-200 text-sm"
                  >
                    <span>{app.name}</span>
                    <span className="text-gray-700 text-xs">— {app.desc}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-bold mb-4 text-white uppercase tracking-wider">Product</h3>
            <ul className="space-y-3">
              <li><a href="#features" className="text-gray-500 hover:text-windy-sky transition-colors duration-200 text-sm">Features</a></li>
              <li><a href="#how-it-works" className="text-gray-500 hover:text-windy-sky transition-colors duration-200 text-sm">How It Works</a></li>
              <li><a href="#pricing" className="text-gray-500 hover:text-windy-sky transition-colors duration-200 text-sm">Pricing</a></li>
              <li><a href="#ecosystem" className="text-gray-500 hover:text-windy-sky transition-colors duration-200 text-sm">Ecosystem</a></li>
              <li><a href="#faq" className="text-gray-500 hover:text-windy-sky transition-colors duration-200 text-sm">FAQ</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-bold mb-4 text-white uppercase tracking-wider">Legal</h3>
            <ul className="space-y-3">
              {legal.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.url}
                    className="text-gray-500 hover:text-windy-sky transition-colors duration-200 text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-windy-sky/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            &copy; {currentYear} Windy Fly. Part of the Windy Empire. All rights reserved.
          </p>
          <p className="text-gray-700 text-xs">
            Built with 🌪️ for the people who want AI that actually knows them
          </p>
        </div>
      </div>
    </footer>
  );
}
