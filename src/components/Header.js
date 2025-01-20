import React, { useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect';
import ScrollReveal from 'scrollreveal';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GlobalStyle } from '../styles/GlobalStyle';

export const Header = () => {
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowContent(true);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (showContent) {
            const elements = document.querySelectorAll('.header-element');
            elements.forEach((el, index) => {
                ScrollReveal().reveal(el, {
                    distance: '50px',
                    duration: 500,
                    easing: 'ease-out',
                    origin: 'bottom',
                    opacity: 0,
                    delay: index * 300,
                    reset: false,
                });
            });
        }
    }, [showContent]);

    return (
        <>
            <GlobalStyle />
            <div className="py-5 vh-100 d-flex justify-content-center align-items-start header-bg" style={{ fontFamily: 'var(--bs-font-family-sans-serif)' }}>
                {showContent && (
                    <div className="container text-start">
                        <div className="header-element mb-3">
                            <h6 className="fw-bold" style={{ color: 'var(--bs-primary)' }}>
                                Olá, o meu nome é
                            </h6>
                        </div>
                        <div className="header-element mb-3">
                            <h1 className="display-4 fw-bold" style={{ color: 'var(--bs-dark)', fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
                                Sofia Sawczenko
                            </h1>
                        </div>
                        <div className="header-element mb-3 d-flex flex-wrap align-items-center gap-3">
                            <div
                                className="fw"
                                style={{ fontFamily: 'Quicksand, sans-serif', color: 'var(--bs-dark)', fontSize: "clamp(1.5rem, 4vw, 3rem)" }}
                            >
                                Desenvolvedora
                            </div>
                            <span
                                style={{ fontFamily: 'Quicksand, sans-serif', color: 'var(--bs-primary)', fontSize: "clamp(1.5rem, 4vw, 3rem)" }}
                            >
                                <Typewriter
                                    options={{
                                        strings: ["Front-End.", "Back-End.", "Full-Stack."],
                                        autoStart: true,
                                        loop: true,
                                        deleteSpeed: 50,
                                    }}
                                />
                            </span>
                        </div>
                        <div className="header-element mb-3">
                        <p className="lead" style={{
                            color: 'var(--bs-dark)', 
                            fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
                            wordWrap: 'break-word',  
                            maxWidth: '35rem',  
                            // fontFamily: 'Quicksand, sans-serif',
                            // fontWeight: 600, // Peso para semi-bold
                            }}>
                                Desenvolvedora Full-Stack em Java e JavaScript, criando soluções escaláveis e focadas na experiência do cliente.
                            </p>
                        </div>
                        <div className="header-element">
                            <a
                                href={require('../assets/curriculum/CV - Sofia Sawczenko.pdf')}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn"
                                style={{
                                    marginTop: '2rem',
                                    color: 'var(--bs-primary)',  
                                    border: '1px solid var(--bs-primary)',  
                                    fontSize: 'clamp(1rem, 2.5vw, 1rem)',  
                                    padding: '0.5rem 0.8rem',  
                                    borderRadius: '0.3rem',  
                                    backgroundColor: 'transparent',   
                                    textDecoration: 'none', 
                                    transition: 'all 0.3s ease', 
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.backgroundColor = '#FBD2D2'; 
                                    e.target.style.color = 'var(--bs-primary)';  
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.backgroundColor = 'transparent';  
                                    e.target.style.color = 'var(--bs-primary)';  
                                }}
                            >
                                Curriculum Vitae
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};
