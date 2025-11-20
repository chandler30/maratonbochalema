import './Prizes.css'

function Prizes() {
  const categories = [
    {
      title: 'General Masculino',
      prizes: [
        { place: '1er Lugar', amount: '$300.000' },
        { place: '2do Lugar', amount: '$200.000' },
        { place: '3er Lugar', amount: '$100.000' }
      ]
    },
    {
      title: 'General Femenino',
      prizes: [
        { place: '1er Lugar', amount: '$300.000' },
        { place: '2do Lugar', amount: '$200.000' },
        { place: '3er Lugar', amount: '$100.000' }
      ]
    }
  ]

  return (
    <section id="premios" className="prizes section">
      <div className="container">
        <div className="section-header">
          <h2>Premios</h2>
          <p>Reconocimientos para los mejores competidores</p>
        </div>

        <div className="prizes-grid">
          <div className="prize-category">
            <h3 className="category-title"></h3>
            <div className="prize-list">
              <div className="prize-item">
                <div className="prize-medal">🥇</div>
                <div className="prize-details">
                  <span className="prize-place">1er Lugar</span>
                  <span className="prize-amount">$300.000</span>
                </div>
              </div>
              <div className="prize-item">
                <div className="prize-medal">🥈</div>
                <div className="prize-details">
                  <span className="prize-place">2do Lugar</span>
                  <span className="prize-amount">$200.000</span>
                </div>
              </div>
              <div className="prize-item">
                <div className="prize-medal">🥉</div>
                <div className="prize-details">
                  <span className="prize-place">3er Lugar</span>
                  <span className="prize-amount">$100.000</span>
                </div>
              </div>
            </div>
          </div>

          <div className="prize-category">
            <h3 className="category-title">Mujeres</h3>
            <div className="prize-list">
              <div className="prize-item">
                <div className="prize-medal">🥇</div>
                <div className="prize-details">
                  <span className="prize-place">1er Lugar</span>
                  <span className="prize-amount">$300.000</span>
                </div>
              </div>
              <div className="prize-item">
                <div className="prize-medal">🥈</div>
                <div className="prize-details">
                  <span className="prize-place">2do Lugar</span>
                  <span className="prize-amount">$200.000</span>
                </div>
              </div>
              <div className="prize-item">
                <div className="prize-medal">🥉</div>
                <div className="prize-details">
                  <span className="prize-place">3er Lugar</span>
                  <span className="prize-amount">$100.000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Prizes
