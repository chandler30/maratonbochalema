import './App.css'
import Hero from './components/Hero'
import EventKit from './components/EventKit'
import RouteMap from './components/RouteMap'
import Prizes from './components/Prizes'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Hero />
      <EventKit />
      <RouteMap />
      <Prizes />
      <Footer />
    </div>
  )
}

export default App
