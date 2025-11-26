import { useState, useEffect } from 'react'
import './Hero.css'

function Hero() {
  const eventDate = new Date('2026-01-03T07:00:00')
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  function calculateTimeLeft() {
    const difference = eventDate - new Date()

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      }
    }

    return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section id="inicio" className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content container">
        <div className="hero-logo">
          <h1>RUNNING</h1>
          <h2>BOCHALEMA</h2>
        </div>

        <div className="hero-date">
          <p className="date-label">¡Nos vemos el!</p>
          <p className="date-main">3 de Enero 2026</p>
        </div>

        <div className="countdown">
          <div className="countdown-item">
            <span className="countdown-value">{String(timeLeft.days).padStart(2, '0')}</span>
            <span className="countdown-label">Días</span>
          </div>
          <div className="countdown-separator">:</div>
          <div className="countdown-item">
            <span className="countdown-value">{String(timeLeft.hours).padStart(2, '0')}</span>
            <span className="countdown-label">Horas</span>
          </div>
          <div className="countdown-separator">:</div>
          <div className="countdown-item">
            <span className="countdown-value">{String(timeLeft.minutes).padStart(2, '0')}</span>
            <span className="countdown-label">Minutos</span>
          </div>
          <div className="countdown-separator">:</div>
          <div className="countdown-item">
            <span className="countdown-value">{String(timeLeft.seconds).padStart(2, '0')}</span>
            <span className="countdown-label">Segundos</span>
          </div>
        </div>

        <a href="https://forms.gle/AY4Dvqv2JSAv2RTc6" className="btn-primary hero-cta" target="_blank" rel="noopener noreferrer">Inscríbete Ahora</a>
      </div>
    </section>
  )
}

export default Hero
