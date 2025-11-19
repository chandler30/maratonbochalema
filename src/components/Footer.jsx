import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Carrera 5K Bochalema</h3>
            <p className="footer-text">
              Un evento deportivo que une a la comunidad de Bochalema
            </p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Facebook">
                <span>📘</span>
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <span>📷</span>
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <span>🐦</span>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Contacto</h4>
            <ul className="footer-list">
              <li>📧 info@carrera5kbochalema.com</li>
              <li>📱 +57 300 123 4567</li>
              <li>📍 Bochalema, Norte de Santander</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Información</h4>
            <ul className="footer-list">
              <li><a href="#">Reglamento</a></li>
              <li><a href="#">Preguntas Frecuentes</a></li>
              <li><a href="#">Términos y Condiciones</a></li>
              <li><a href="#">Política de Privacidad</a></li>
            </ul>
          </div>
        </div>

        <div className="sponsors-section">
          <h4 className="sponsors-title">Patrocinadores</h4>
          <div className="sponsors-grid">
            <div className="sponsor-item">
              <div className="sponsor-logo">🏛️</div>
              <p>Alcaldía de Bochalema</p>
            </div>
            <div className="sponsor-item">
              <div className="sponsor-logo">🏢</div>
              <p>Gobernación Norte de Santander</p>
            </div>
            <div className="sponsor-item">
              <div className="sponsor-logo">🏃</div>
              <p>Club Deportivo Bochalema</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Carrera 5K Bochalema. Todos los derechos reservados.</p>
          <p className="footer-location">Bochalema, Norte de Santander, Colombia</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
