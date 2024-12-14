import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import "bootstrap/dist/css/bootstrap.min.css";

const technologies = [
    { name: "React.js", icon: "/images/checkblue.svg" },
    { name: "Styled Components", icon: "/images/checkblue.svg" },
    { name: "Javascript", icon: "/images/checkblue.svg" },
    { name: "Typescript", icon: "/images/checkblue.svg" },
    { name: "Tailwind CSS", icon: "/images/checkblue.svg" },
    { name: "Bootstrap", icon: "/images/checkblue.svg" },
    { name: "Next", icon: "/images/checkblue.svg" },
    { name: "Java 17", icon: "/images/checkblue.svg" },
    { name: "SQL", icon: "/images/checkblue.svg" },
    { name: "Python", icon: "/images/checkblue.svg" },
    { name: "R", icon: "/images/checkblue.svg" },
    { name: "Figma", icon: "/images/checkblue.svg" },
    { name: "Git", icon: "/images/checkblue.svg" },
    { name: "GitHub", icon: "/images/checkblue.svg" },
    { name: "Agile", icon: "/images/checkblue.svg" },
];

export const Technologies = () => {
    useEffect(() => {
        const techItems = document.querySelectorAll(".tech-item");
        techItems.forEach((item, index) => {
            ScrollReveal().reveal(item, {
                delay: index * 150,
                distance: "50px",
                duration: 800,
                easing: "ease-out",
                origin: "bottom",
                opacity: 0,
                reset: false,
            });
        });
    }, []);

    return (
        <section className="technologies py-1 bg-light mt-5">
            <div className="container mb-5">
                <div className="row justify-content-center">
                    <div className="col-12 text-left mb-4">
                        <h2 style={{ color: 'var(--bs-primary)' }} className="fw-bold">Minhas Experiências</h2>
                        <h3 style={{ color: 'var(--bs-dark)' }} className="fw-bold">Linguagens e Tecnologias</h3>
                        <h2 className="text-muted">Aqui estão as linguagens e tecnologias que eu tenho contato.</h2>
                    </div>

                    <div className="col-12">
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 justify-content-center">
                            {technologies.map((tech, index) => (
                                <div key={index} className="col tech-item mb-4 d-flex justify-content-center">
                                <div className="bg-white card p-4 d-flex align-items-left" style={{width: "100%", height: "4rem" }}>
                                    <div className="d-flex align-items-center">
                                        <img src={tech.icon} alt={`${tech.name} icon`} className="mb-0" style={{ width: "20px", height: "20px", marginRight: "1rem" }} />
                                        <h5 className="card-title mb-0" style={{ fontSize: "15px" }}>{tech.name}</h5>
                                    </div>
                                </div>
                            </div>                            
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
