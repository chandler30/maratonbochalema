import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section footer-social-section">
            <h3 className="footer-title">Carrera 5K Bochalema</h3>
            <p className="footer-text">
              Un evento deportivo que une a la comunidad de Bochalema
            </p>
            <div className="social-links">
              <a href="https://facebook.com/carrera5kbochalema" className="social-link social-facebook" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <div className="social-link-content">
                  <span className="social-platform">Facebook</span>
                  <span className="social-handle">@carrera5kbochalema</span>
                </div>
                <div className="social-icon-wrapper">
                  <span className="social-icon">📘</span>
                </div>
              </a>
              <a href="https://tiktok.com/@carrera5kbochalema" className="social-link social-tiktok" aria-label="TikTok" target="_blank" rel="noopener noreferrer">
                <div className="social-link-content">
                  <span className="social-platform">TikTok</span>
                  <span className="social-handle">@carrera5kbochalema</span>
                </div>
                <div className="social-icon-wrapper">
                  <span className="social-icon">🎵</span>
                </div>
              </a>
              <a href="https://instagram.com/carrera5kbochalema" className="social-link social-instagram" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <div className="social-link-content">
                  <span className="social-platform">Instagram</span>
                  <span className="social-handle">@carrera5kbochalema</span>
                </div>
                <div className="social-icon-wrapper">
                  <span className="social-icon">📷</span>
                </div>
              </a>
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
