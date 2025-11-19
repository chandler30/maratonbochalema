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

  const ageCategories = [
    'Juvenil (15-17 años)',
    'Abierta (18-34 años)',
    'Máster A (35-44 años)',
    'Máster B (45-54 años)',
    'Máster C (55+ años)'
  ]

  return (
    <section className="prizes section">
      <div className="container">
        <div className="section-header">
          <h2>Premios y Categorías</h2>
          <p>Reconocimientos para los mejores competidores</p>
        </div>

        <div className="prizes-grid">
          {categories.map((category, index) => (
            <div key={index} className="prize-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="prize-list">
                {category.prizes.map((prize, prizeIndex) => (
                  <div key={prizeIndex} className="prize-item">
                    <div className="prize-medal">
                      {prizeIndex === 0 && '🥇'}
                      {prizeIndex === 1 && '🥈'}
                      {prizeIndex === 2 && '🥉'}
                    </div>
                    <div className="prize-details">
                      <span className="prize-place">{prize.place}</span>
                      <span className="prize-amount">{prize.amount}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="age-categories">
          <h3 className="categories-title">Categorías por Edad</h3>
          <div className="categories-grid">
            {ageCategories.map((category, index) => (
              <div key={index} className="category-badge">
                <span className="badge-icon">🏃</span>
                <span className="badge-text">{category}</span>
              </div>
            ))}
          </div>
          <p className="categories-note">
            Medallas para los primeros 3 lugares de cada categoría
          </p>
        </div>
      </div>
    </section>
  )
}

export default Prizes
