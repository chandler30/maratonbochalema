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
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content container">
        <div className="hero-logo">
          <h1>CARRERA 5K</h1>
          <h2>BOCHALEMA</h2>
        </div>

        <div className="hero-date">
          <p className="date-label">¡Nos vemos el!</p>
          <p className="date-main">7 de Diciembre 2025</p>
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

        <button className="btn-primary hero-cta">Inscríbete Ahora</button>
      </div>
    </section>
  )
}

export default Hero
