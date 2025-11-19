import './EventKit.css'

function EventKit() {
  const kitItems = [
    {
      icon: '👕',
      title: 'Camiseta',
      description: 'Camiseta oficial del evento'
    },
    {
      icon: '🏅',
      title: 'Medalla',
      description: 'Medalla de finalización'
    },
    {
      icon: '🎽',
      title: 'Número',
      description: 'Número de competidor'
    },
    {
      icon: '📦',
      title: 'Kit Completo',
      description: 'Kit de bienvenida'
    },
    {
      icon: '💧',
      title: 'Hidratación',
      description: 'Puntos de hidratación en ruta'
    },
    {
      icon: '🎉',
      title: 'Evento Post-Carrera',
      description: 'Actividades y premios'
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
              <div className="kit-icon">{item.icon}</div>
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
