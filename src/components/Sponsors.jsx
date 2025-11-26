import './Sponsors.css'

import { useEffect, useRef, useState } from 'react'
import './Sponsors.css'

function Sponsors() {
  const [isPaused, setIsPaused] = useState(false)
  const scrollerRef = useRef(null)
  const innerRef = useRef(null)

  const sponsors = [
    {
      image: '/TODOS-SOMOS-EIMY-01.webp',
      name: 'TODOS SOMOS EIMY SUÁREZ',
      type: 'Patrocinador Oficial'
    },
    {
      image: '/CONCEJAL.webp',
      name: 'CRISTIAM VEJAR CONCEJAL ',
      type: 'Patrocinador Oficial'
    },
    {
      image: '/ALCALDIA.webp',
      name: 'ALCALDIA DE BOCHALEMA',
      type: 'Patrocinador Oficial'
    }
  ]

  // Duplicamos los sponsors suficientes veces para asegurar que cubran la pantalla y permitan el loop
  // Multiplicamos por 6 para tener suficientes elementos
  const allSponsors = [...sponsors, ...sponsors, ...sponsors, ...sponsors, ...sponsors, ...sponsors]

  useEffect(() => {
    if (!innerRef.current || !scrollerRef.current) return

    const scroller = scrollerRef.current
    const inner = innerRef.current

    let animationId
    let position = 0
    let speed = 0.5 // Velocidad del scroll automático
    let isDragging = false
    let startX = 0
    let scrollLeft = 0
    let lastX = 0
    let velocity = 0
    let lastTime = 0

    // Clonar elementos para el efecto infinito si es necesario
    // Ya lo hacemos con allSponsors, pero aseguramos que el contenido sea lo suficientemente ancho

    const animate = (time) => {
      if (!isDragging && !isPaused) {
        position += speed

        // Lógica de loop infinito
        // Si hemos scrolleado más de la mitad del contenido (asumiendo contenido duplicado)
        // reseteamos la posición para dar efecto infinito
        const maxScroll = inner.scrollWidth / 2

        if (position >= maxScroll) {
          position = 0
        }

        scroller.scrollLeft = position
      } else if (!isDragging && Math.abs(velocity) > 0.1) {
        // Inercia después de soltar
        position += velocity
        velocity *= 0.95 // Fricción

        const maxScroll = inner.scrollWidth / 2
        if (position >= maxScroll) position -= maxScroll
        if (position < 0) position += maxScroll

        scroller.scrollLeft = position
      }

      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    // Event Listeners para Drag/Touch
    const handleMouseDown = (e) => {
      isDragging = true
      setIsPaused(true)
      startX = e.pageX - scroller.offsetLeft
      scrollLeft = position
      lastX = e.pageX
      lastTime = Date.now()
      velocity = 0
    }

    const handleMouseLeave = () => {
      isDragging = false
      setTimeout(() => setIsPaused(false), 2000) // Reanudar después de 2s
    }

    const handleMouseUp = () => {
      isDragging = false
      setTimeout(() => setIsPaused(false), 2000)
    }

    const handleMouseMove = (e) => {
      if (!isDragging) return
      e.preventDefault()
      const x = e.pageX - scroller.offsetLeft
      const walk = (x - startX) * 2 // Velocidad del drag
      position = scrollLeft - walk

      // Calcular velocidad para inercia
      const now = Date.now()
      const dt = now - lastTime
      if (dt > 0) {
        velocity = (lastX - e.pageX) / dt * 15 // Factor de velocidad
      }
      lastX = e.pageX
      lastTime = now

      scroller.scrollLeft = position
    }

    // Touch events
    const handleTouchStart = (e) => {
      isDragging = true
      setIsPaused(true)
      startX = e.touches[0].pageX - scroller.offsetLeft
      scrollLeft = position
      lastX = e.touches[0].pageX
      lastTime = Date.now()
      velocity = 0
    }

    const handleTouchEnd = () => {
      isDragging = false
      setTimeout(() => setIsPaused(false), 2000)
    }

    const handleTouchMove = (e) => {
      if (!isDragging) return
      const x = e.touches[0].pageX - scroller.offsetLeft
      const walk = (x - startX) * 2
      position = scrollLeft - walk

      const now = Date.now()
      const dt = now - lastTime
      if (dt > 0) {
        velocity = (lastX - e.touches[0].pageX) / dt * 15
      }
      lastX = e.touches[0].pageX
      lastTime = now

      scroller.scrollLeft = position
    }

    scroller.addEventListener('mousedown', handleMouseDown)
    scroller.addEventListener('mouseleave', handleMouseLeave)
    scroller.addEventListener('mouseup', handleMouseUp)
    scroller.addEventListener('mousemove', handleMouseMove)

    scroller.addEventListener('touchstart', handleTouchStart)
    scroller.addEventListener('touchend', handleTouchEnd)
    scroller.addEventListener('touchmove', handleTouchMove)

    return () => {
      cancelAnimationFrame(animationId)
      scroller.removeEventListener('mousedown', handleMouseDown)
      scroller.removeEventListener('mouseleave', handleMouseLeave)
      scroller.removeEventListener('mouseup', handleMouseUp)
      scroller.removeEventListener('mousemove', handleMouseMove)
      scroller.removeEventListener('touchstart', handleTouchStart)
      scroller.removeEventListener('touchend', handleTouchEnd)
      scroller.removeEventListener('touchmove', handleTouchMove)
    }
  }, [isPaused])

  return (
    <section className="sponsors section">
      <div className="container">
        <div className="sponsors-header">
          <h2>Nuestros patrocinadores</h2>
          <p>Gracias a quienes hacen posible este evento</p>
        </div>

        <div className="carousel-container" ref={scrollerRef}>
          <div className="carousel-track" ref={innerRef}>
            {allSponsors.map((sponsor, index) => (
              <div key={index} className="sponsor-card">
                <div className="sponsor-logo">
                  <img src={sponsor.image} alt={sponsor.name} className="sponsor-image" />
                </div>
              </div>
            ))}
            {/* Duplicamos el contenido una vez más visualmente para el loop perfecto */}
            {allSponsors.map((sponsor, index) => (
              <div key={`dup-${index}`} className="sponsor-card">
                <div className="sponsor-logo">
                  <img src={sponsor.image} alt={sponsor.name} className="sponsor-image" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sponsors
