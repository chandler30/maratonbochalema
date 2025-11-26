import { useState } from 'react'
import './RouteMap.css'

function RouteMap() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <section id="recorrido" className="route-map section">
      <div className="container">
        <div className="section-header">
          <h2>Mapa del recorrido</h2>
          <p>5 kilómetros por las calles de Bochalema</p>
        </div>

        <div className="route-content">
          <div className="route-map-container">
            <div className="map-image-wrapper" onClick={openModal}>
              <img src="/MAPA-DE-RECORRIDO.webp" alt="Mapa del Recorrido" className="map-image" />
              <div className="map-overlay-hint">
                <span>🔍 Ver mapa completo</span>
              </div>
            </div>
          </div>

          <div className="route-info">
            <div className="info-card">
              <div className="info-icon">📍</div>
              <div className="info-text">
                <h3>Punto de salida</h3>
                <p>Entrada a Bochalema, vía nacional</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">🏁</div>
              <div className="info-text">
                <h3>Punto de llegada</h3>
                <p>Frente a la alcaldía y parque principal</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">🕐</div>
              <div className="info-text">
                <h3>Hora de inicio</h3>
                <p>6:00 AM</p>
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
            <span className="feature-icon">📸</span>
            <p>Fotografía profesional</p>
          </div>
        </div>

        {isModalOpen && (
          <div className="map-modal-overlay" onClick={closeModal}>
            <div className="map-modal-content" onClick={e => e.stopPropagation()}>
              <button className="map-modal-close" onClick={closeModal}>&times;</button>
              <img src="/MAPA DE RECORRIDO.jpg" alt="Mapa del Recorrido Grande" />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default RouteMap
