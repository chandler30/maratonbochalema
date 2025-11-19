import './RouteMap.css'

function RouteMap() {
  return (
    <section className="route-map section">
      <div className="container">
        <div className="section-header">
          <h2>Recorrido de la Carrera</h2>
          <p>5 kilómetros por las calles de Bochalema</p>
        </div>

        <div className="route-content">
          <div className="route-info">
            <div className="info-card">
              <div className="info-icon">📍</div>
              <div className="info-text">
                <h3>Punto de Salida</h3>
                <p>Parque Principal de Bochalema</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">🏁</div>
              <div className="info-text">
                <h3>Punto de Llegada</h3>
                <p>Parque Principal de Bochalema</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">🕐</div>
              <div className="info-text">
                <h3>Hora de Inicio</h3>
                <p>7:00 AM</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">📏</div>
              <div className="info-text">
                <h3>Distancia</h3>
                <p>5 Kilómetros</p>
              </div>
            </div>
          </div>

          <div className="route-map-container">
            <div className="map-placeholder">
              <div className="map-icon">🗺️</div>
              <p>Mapa del recorrido</p>
              <span className="map-note">Recorrido circular por el centro de Bochalema</span>
            </div>
          </div>
        </div>

        <div className="route-features">
          <div className="feature-item">
            <span className="feature-icon">💧</span>
            <p>3 Puntos de hidratación</p>
          </div>
          <div className="feature-item">
            <span className="feature-icon">🚑</span>
            <p>Asistencia médica en ruta</p>
          </div>
          <div className="feature-item">
            <span className="feature-icon">⏱️</span>
            <p>Cronometraje oficial</p>
          </div>
          <div className="feature-item">
            <span className="feature-icon">📸</span>
            <p>Fotografía profesional</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RouteMap
