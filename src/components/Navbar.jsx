import { useState, useEffect } from 'react'
import './Navbar.css'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [isVisible, setIsVisible] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY

            if (currentScrollY > lastScrollY && currentScrollY > 50) {
                setIsVisible(false)
            } else {
                setIsVisible(true)
            }

            setLastScrollY(currentScrollY)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [lastScrollY])

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const scrollToSection = (e, id) => {
        e.preventDefault()
        setIsOpen(false)
        const element = document.getElementById(id)
        if (element) {
            const offset = 100 // Adjust based on navbar height
            const bodyRect = document.body.getBoundingClientRect().top
            const elementRect = element.getBoundingClientRect().top
            const elementPosition = elementRect - bodyRect
            const offsetPosition = elementPosition - offset

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            })
        }
    }

    return (
        <nav className={`navbar ${!isVisible ? 'navbar-hidden' : ''}`}>
            <div className="navbar-container container">
                <div className="navbar-logo">
                    <img src="/LOGO DE LA ALCALDIA.png" alt="Alcaldía de Bochalema" />
                </div>

                <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
                    <a href="#inicio" className="navbar-link" onClick={(e) => scrollToSection(e, 'inicio')}>Inicio</a>
                    <a href="https://forms.gle/AY4Dvqv2JSAv2RTc6" className="navbar-link" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>Inscríbete</a>
                    <a href="#premios" className="navbar-link" onClick={(e) => scrollToSection(e, 'premios')}>Premios</a>
                    <a href="#contacto" className="navbar-link" onClick={(e) => scrollToSection(e, 'contacto')}>Contacto</a>
                </div>

                <div className="navbar-toggle" onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
