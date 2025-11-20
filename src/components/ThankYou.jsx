import './ThankYou.css'

function ThankYou() {
    return (
        <div className="thank-you-page">
            <div className="thank-you-container">
                <div className="thank-you-icon">🎉</div>
                <h1>¡Inscripción Exitosa!</h1>
                <p className="thank-you-message">
                    MUCHAS GRACIAS POR EL PAGO, YA ESTAS INSCRITO PARA LA CARRERA
                </p>
                <a href="/" className="btn-primary return-home">
                    Volver al Inicio
                </a>
            </div>
        </div>
    )
}

export default ThankYou
