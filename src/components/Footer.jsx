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
                  <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </div>
              </a>
              <a href="https://tiktok.com/@carrera5kbochalema" className="social-link social-tiktok" aria-label="TikTok" target="_blank" rel="noopener noreferrer">
                <div className="social-link-content">
                  <span className="social-platform">TikTok</span>
                  <span className="social-handle">@carrera5kbochalema</span>
                </div>
                <div className="social-icon-wrapper">
                  <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93v6.16c0 3.18-1.34 4.81-3.17 5.49-1.14.42-2.42.53-3.64.28-1.57-.33-2.92-1.23-3.81-2.58-.89-1.35-1.21-2.98-.83-4.56.39-1.56 1.36-2.97 2.74-3.83 1.4-.86 3.08-1.11 4.67-.63.09.02.18.05.27.08v4.01c-.94-.65-2.26-.62-3.12.1-.86.72-1.05 2.03-.46 2.98.6.96 1.96 1.32 2.96.78.62-.34 1.02-1.01 1.02-1.73v-14.5c-1.32-.01-2.63 0-3.94-.01z" />
                  </svg>
                </div>
              </a>
              <a href="https://instagram.com/carrera5kbochalema" className="social-link social-instagram" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <div className="social-link-content">
                  <span className="social-platform">Instagram</span>
                  <span className="social-handle">@carrera5kbochalema</span>
                </div>
                <div className="social-icon-wrapper">
                  <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
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
