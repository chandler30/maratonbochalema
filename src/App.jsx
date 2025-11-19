import './App.css'
import Hero from './components/Hero'
import EventKit from './components/EventKit'
import RouteMap from './components/RouteMap'
import Prizes from './components/Prizes'
import Sponsors from './components/Sponsors'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <div className="app">
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
