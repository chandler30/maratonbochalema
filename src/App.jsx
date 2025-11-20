import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import EventKit from './components/EventKit'
import RouteMap from './components/RouteMap'
import Prizes from './components/Prizes'
import Sponsors from './components/Sponsors'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import ThankYou from './components/ThankYou'

function App() {
  // Simple routing based on pathname
  const path = window.location.pathname

  if (path === '/gracias') {
    return <ThankYou />
  }

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Sponsors />
      <EventKit />
      <RouteMap />
      <Prizes />
      <CallToAction />
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
