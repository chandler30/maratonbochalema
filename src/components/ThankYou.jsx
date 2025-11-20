import './ThankYou.css'

function ThankYou() {
    return (
        <div className="thank-you-page">
            <div className="thank-you-container">
                <div className="confetti-wrapper">
                    <div className="confetti-piece"></div>
                    <div className="confetti-piece"></div>
                    <div className="confetti-piece"></div>
                    <div className="confetti-piece"></div>
                    <div className="confetti-piece"></div>
                    <div className="confetti-piece"></div>
                    <div className="confetti-piece"></div>
                    <div className="confetti-piece"></div>
                    <div className="confetti-piece"></div>
                    <div className="confetti-piece"></div>
                    <div className="confetti-piece"></div>
                    <div className="confetti-piece"></div>
                    <div className="confetti-piece"></div>
                </div>

                <div className="thank-you-icon">🎉</div>
                <h1>¡Inscripción Exitosa!</h1>
                <div className="divider"></div>
                <p className="thank-you-message">
                    MUCHAS GRACIAS POR EL PAGO, YA ESTAS INSCRITO PARA LA CARRERA
                </p>
                <p className="thank-you-subtext">
                    Prepárate para dar lo mejor de ti. ¡Nos vemos en la meta!
                </p>
                <a href="/" className="btn-primary return-home">
                    Volver al Inicio
                </a>
            </div>
        </div>
    )
}

export default ThankYou
