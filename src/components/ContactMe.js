import { useEffect } from "react"; 
import ScrollReveal from "scrollreveal";

export const ContactMe = () => {
    useEffect(() => {
        ScrollReveal().reveal('.contact-me', {
            distance: '50px',
            duration: 5000,
            easing: 'ease-out',
            origin: 'bottom',
            opacity: 0,
        });
    }, []);

    return (
        <div id="contact"
            className="contact-me py-4 d-flex justify-content-center align-items-center mt-5" 
            style={{
                minHeight: '40vh', 
                padding: '2rem 1rem', 
                paddingTop: '4rem', 
            }}
        >
            <div 
                className="text-center bg-white p-4 rounded-3" 
                style={{ 
                    border: "1px solid #D2D2D2",
                    borderRadius: "0.5rem",
                    maxWidth: '700px', 
                    width: '100%' 
                }}
            >
                <h3 
                    className="fw-bold" 
                    style={{ 
                        fontSize: 'clamp(1.4rem, 4vw, 1.2rem)', 
                        color: 'var(--bs-dark)' 
                    }}
                >
                    Entre em Contato
                </h3>
                <h2 
                    className="mb-4" 
                    style={{ 
                        fontSize: 'clamp(0.9rem, 0.9vw, 1rem)', 
                        color: 'var(--bs-secondary-color)', 
                        lineHeight: '1.6' 
                    }}
                >
                    Qualquer dúvida ou se deseja apenas dar o seu oi ou feedback, estarei feliz em receber e assim que possível irei te retornar!
                </h2>
                <a 
                    href="mailto:sofiawko@gmail.com" 
                    className="btn" 
                    style={{
                        color: 'var(--bs-primary)', 
                        border: '1px solid var(--bs-primary)', 
                        fontSize: 'clamp(1rem, 2.5vw, 1rem)', 
                        padding: '0.5rem 1.5rem', 
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
                    Diga Olá!
                </a>
            </div>
        </div>
    );
};
