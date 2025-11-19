import './Sponsors.css'

function Sponsors() {
  const sponsors = [
    {
      logo: '🏛️',
      name: 'Alcaldía de Bochalema',
      type: 'Patrocinador Principal'
    },
    {
      logo: '🏢',
      name: 'Gobernación Norte de Santander',
      type: 'Patrocinador Principal'
    },
    {
      logo: '🏃',
      name: 'Club Deportivo Bochalema',
      type: 'Patrocinador Oficial'
    },
    {
      logo: '💪',
      name: 'Gimnasio Sport Center',
      type: 'Patrocinador Colaborador'
    },
    {
      logo: '🥤',
      name: 'Hidratación Plus',
      type: 'Patrocinador Colaborador'
    },
    {
      logo: '🏥',
      name: 'Cruz Roja Bochalema',
      type: 'Patrocinador Colaborador'
    },
    {
      logo: '📸',
      name: 'Foto Sport',
      type: 'Patrocinador Colaborador'
    },
    {
      logo: '🎽',
      name: 'Deportes Extremos',
      type: 'Patrocinador Colaborador'
    }
  ]

  // Duplicate sponsors for infinite scroll effect
  const allSponsors = [...sponsors, ...sponsors]

  return (
    <section className="sponsors section">
      <div className="container">
        <div className="sponsors-header">
          <h2>Nuestros Patrocinadores</h2>
          <p>Gracias a quienes hacen posible este evento</p>
        </div>

        <div className="carousel-container">
          <div className="carousel-track">
            {allSponsors.map((sponsor, index) => (
              <div key={index} className="sponsor-card">
                <div className="sponsor-logo">{sponsor.logo}</div>
                <h3 className="sponsor-name">{sponsor.name}</h3>
                <span className="sponsor-type">{sponsor.type}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sponsors
