import './EventKit.css'

function EventKit() {
  const kitItems = [
    {
      image: '/CAMISETA POR DETALNTE Y POR DETRAS.jpg',
      title: 'Camiseta Oficial',
      description: 'Diseño exclusivo, tela tecnológica'
    },
    {
      icon: '123',
      title: 'Número de Competidor',
      description: 'Con chip de cronometraje'
    },
    {
      icon: '🎫',
      title: 'Manilla',
      description: 'Acceso a zonas exclusivas'
    },
    {
      icon: '🗺️',
      title: 'Folleto del Recorrido',
      description: 'Mapa detallado y guía'
    },
    {
      image: '/TULA.jpg',
      title: 'Tula Deportiva',
      description: 'Para guardar tus pertenencias'
    },
    {
      image: '/MEDALLA.jpg',
      title: 'Medalla Finisher',
      description: 'Para todos los que crucen la meta'
    },
    {
      image: '/GORRA.jpg',
      title: 'Gorra Oficial',
      description: 'Protección y estilo'
    },
    {
      image: '/KIT COMPLETO.jpg',
      title: 'Kit Completo',
      description: 'Todo lo que necesitas para la carrera'
    }
  ]

  return (
    <section className="event-kit section">
      <div className="container">
        <div className="section-header">
          <h2>¿Qué incluye tu inscripción?</h2>
          <p>Todo lo que necesitas para disfrutar de la carrera</p>
        </div>

        <div className="kit-grid">
          {kitItems.map((item, index) => (
            <div key={index} className="kit-item">
              <div className="kit-icon">
                {item.image ? (
                  <img src={item.image} alt={item.title} className="kit-image" />
                ) : (
                  <span className="emoji-icon">{item.icon}</span>
                )}
              </div>
              <h3 className="kit-title">{item.title}</h3>
              <p className="kit-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EventKit
