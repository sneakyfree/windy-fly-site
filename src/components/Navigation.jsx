import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Ecosystem', href: '#ecosystem' },
    { name: 'FAQ', href: '#faq' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-windy-darker/95 backdrop-blur-lg border-b border-windy-sky/10 shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#hero" className="flex items-center space-x-2 group">
            <span className="text-2xl group-hover:scale-110 transition-transform duration-200">🪰</span>
            <span className="text-xl font-bold gradient-text">Windy Fly</span>
            <span className="hidden sm:inline-flex text-[10px] font-bold px-1.5 py-0.5 bg-windy-cyan/10 text-windy-cyan border border-windy-cyan/20 rounded-full ml-1 tracking-wider">EARLY ACCESS</span>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
              >
                {link.name}
              </a>
            ))}
            <motion.a
              href="#pricing"
              className="px-5 py-2 bg-gradient-to-r from-windy-sky to-windy-electric text-white rounded-lg font-semibold text-sm hover:shadow-lg hover:shadow-windy-sky/30 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Hatch Your Agent
            </motion.a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-300 hover:text-windy-sky"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-windy-sky/10 py-4 bg-windy-darker/95 backdrop-blur-lg"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 text-gray-400 hover:text-white transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#pricing"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block mt-4 px-6 py-2 bg-gradient-to-r from-windy-sky to-windy-electric text-white rounded-lg font-semibold text-center"
            >
              Hatch Your Agent
            </a>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
