import './Sponsors.css'

function Sponsors() {
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

  // Duplicate sponsors for infinite scroll effect (more times since there are fewer items)
  const allSponsors = [...sponsors, ...sponsors, ...sponsors, ...sponsors, ...sponsors, ...sponsors]

  return (
    <section className="sponsors section">
      <div className="container">
        <div className="sponsors-header">
          <h2>Nuestros patrocinadores</h2>
          <p>Gracias a quienes hacen posible este evento</p>
        </div>

        <div className="carousel-container">
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
