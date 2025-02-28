import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollReveal from 'scrollreveal';

// Variável global para rastrear se o ScrollReveal foi inicializado
let scrollRevealInitialized = false;

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (!scrollRevealInitialized) {
            const links = document.querySelectorAll('.nav-link');
            links.forEach((link, index) => {
                ScrollReveal().reveal(link, {
                    distance: '50px',
                    duration: 500,
                    easing: 'ease-out',
                    origin: 'top',
                    opacity: 0,
                    delay: index * 200,
                    reset: false,
                });
            });
            scrollRevealInitialized = true; 
        }
    }, []);

    return (
        <nav
            className={`navbar navbar-expand-lg navbar-light ${isScrolled ? 'shadow-sm' : ''}`}
            style={{
                position: 'fixed',
                width: '100%',
                zIndex: 1000,
                background: isScrolled
                    ? 'linear-gradient(135deg, #fcd3d3, #fbfafa)' 
                    : 'transparent',
                transition: 'background 0.3s ease',
            }}
        >
            <div className="container">
                <a className="navbar-brand d-flex align-items-center" href="#home">
                    <span className="text" style={{ color: '#c8023f' }}>&lt;</span>
                    <span className="fw-bold mx-1" style={{ color: '#4b4b4b', fontSize: '15px' }}>sofiasawczenko</span>
                    <span className="text" style={{ color: '#c8023f' }}>/&gt;</span>
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        {/* <li className="nav-item">
                            <a className="nav-link" href="#home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">Sobre</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#experiences">Experiências</a>
                        </li> */}
                        <li style={{ opacity: 1 }} className="nav-item">
                            <a style={{ opacity: 1 }} className="nav-link" href="#experience">Experiência</a>
                        </li>
                        <li className="nav-item">
                            <a style={{ opacity: 1 }} className="nav-link" href="#projects">Projetos</a>
                        </li>
                        <li className="nav-item">
                            <a style={{ opacity: 1 }} className="nav-link" href="#contact">Contato</a>
                        </li>
                    </ul>
                </div>
            </div>


            <style jsx>{`
                .navbar-nav .nav-link {
                    color: #4b4b4b; 
                    transition: color 0.3s ease;
                }

                .navbar-nav .nav-link:hover {
                    color: #c8023f; 
                }
            `}</style>
        </nav>
    );
};
