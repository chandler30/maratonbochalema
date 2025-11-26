import './EventKit.css'

function EventKit() {
  const kitItems = [
    'Camiseta',
    'Dorsal',
    'Medalla',
    'Tula',
    'Visera',
    'Hidratación'
  ]

  return (
    <section className="event-kit section">
      <div className="container">
        <div className="section-header">
          <h2>CONOCE TU KIT DE CARRERA</h2>
        </div>

        <div className="kit-content">
          <div className="kit-list">
            <h3>Incluye:</h3>
            <ul>
              {kitItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <div className="kit-cta-wrapper">
              <a
                href="https://forms.gle/AY4Dvqv2JSAv2RTc6"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary hero-cta"
              >
                Inscríbete ahora
              </a>
            </div>

          </div>

          <div className="kit-image-container">
            <img
              src="/PRONTO.webp"
              alt="Pronto estará listo nuestro kit de competencia"
              className="kit-pronto-image"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default EventKit