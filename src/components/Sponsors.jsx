import './Sponsors.css'

import { useEffect, useRef, useState } from 'react'
import './Sponsors.css'

function Sponsors() {
  const [isPaused, setIsPaused] = useState(false)
  const scrollerRef = useRef(null)

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
  const allSponsors = [...sponsors, ...sponsors, ...sponsors, ...sponsors, ...sponsors, ...sponsors]

  useEffect(() => {
    const scroller = scrollerRef.current
    if (!scroller) return

    let animationId
    const speed = 2 // Velocidad del scroll automático

    const animate = () => {
      // Incrementamos el scroll siempre, sin pausa
      scroller.scrollLeft += speed

      // Lógica de loop infinito
      const maxScroll = scroller.scrollWidth / 2

      if (scroller.scrollLeft >= maxScroll) {
        scroller.scrollLeft -= maxScroll
      } else if (scroller.scrollLeft <= 0) {
        scroller.scrollLeft += maxScroll
      }

      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationId)
  }, [])

  return (
    <section className="sponsors section">
      <div className="container">
        <div className="sponsors-header">
          <h2>Nuestros patrocinadores</h2>
          <p>Gracias a quienes hacen posible este evento</p>
        </div>

        <div
          className="carousel-container"
          ref={scrollerRef}
        >
          <div className="carousel-track">
            {allSponsors.map((sponsor, index) => (
              <div key={index} className="sponsor-card">
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
