import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import HatchCeremony from './components/HatchCeremony'
import Channels from './components/Channels'
import Pricing from './components/Pricing'
import Ecosystem from './components/Ecosystem'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-windy-darker text-white">
      <Navigation />
      <Hero />
      <Features />
      <HowItWorks />
      <HatchCeremony />
      <Channels />
      <Pricing />
      <Ecosystem />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  )
}

export default App
