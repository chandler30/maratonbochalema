import './CallToAction.css'

function CallToAction() {
    return (
        <section className="cta-section">
            <div className="container">
                <div className="cta-content">
                    <h2 className="cta-title">
                        <span className="cta-light">podrás</span> <span className="cta-bold">Superar</span>
                        <br />
                        <span className="cta-light">tu mejor</span> <span className="cta-bold">marca?</span>
                    </h2>
                    <a href="https://forms.gle/AY4Dvqv2JSAv2RTc6" className="cta-button" target="_blank" rel="noopener noreferrer">
                        a Correr!
                    </a>
                </div>
            </div>
        </section>
    )
}

export default CallToAction
